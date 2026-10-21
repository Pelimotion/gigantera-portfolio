#!/usr/bin/env python3
import os
import subprocess
import time

ONLINE_DIR = '/Volumes/PLM_SSD_01/Pipeline SSD 01/Gigantera/Pipeline Gigantera/Out Gigantera/ONLINE'
PUBLIC_DIR = '/Volumes/PLM_SSD_01/Dev/Gigantera Portfolio/public/works'

POSTERS_DIR = os.path.join(PUBLIC_DIR, 'posters')
VIDEOS_DIR = os.path.join(PUBLIC_DIR, 'full')
PREVIEWS_DIR = os.path.join(PUBLIC_DIR, 'video')
PROJECTIONS_DIR = os.path.join(PUBLIC_DIR, 'projections')

os.makedirs(POSTERS_DIR, exist_ok=True)
os.makedirs(VIDEOS_DIR, exist_ok=True)
os.makedirs(PREVIEWS_DIR, exist_ok=True)
os.makedirs(PROJECTIONS_DIR, exist_ok=True)

WORKS = [
    {
        'id': 'tetrapode-concreto-pixel',
        'file': '01_tetrapode_concreto_pixel_01.mp4',
        'poster_ts': '00:00:05',
        'preview_dur': 8.0,
    },
    {
        'id': 'tetrapode-tecnologia-morta',
        'file': '02_tetrapode_tecnologia_morta_02.mp4',
        'poster_ts': '00:00:05',
        'preview_dur': 8.0,
    },
    {
        'id': 'nostalgia-monolito-costeiro',
        'file': '03_nostalgia_monolito_costeiro_05.mp4',
        'poster_ts': '00:00:05',
        'preview_dur': 8.0,
    },
    {
        'id': 'espinhaco-projecao-tecido',
        'file': '04_espinhaco_projecao_tecido_09_2.mp4',
        'poster_ts': '00:00:05',
        'preview_dur': 8.0,
    },
    {
        'id': 'espinhaco-giant-mullets',
        'file': '05_espinhaco_giant_mullets.mov',
        'poster_ts': '00:00:12',
        'preview_dur': 8.0,
    },
    {
        'id': 'espinhaco-matriz-pontos',
        'file': '06_espinhaco_matriz_pontos_13c.mp4',
        'poster_ts': '00:00:10',
        'preview_dur': 8.0,
    },
    {
        'id': 'espinhaco-abissal-tracao',
        'file': '07_espinhaco_abissal_tracao_09_2.mp4',
        'poster_ts': '00:00:05',
        'preview_dur': 8.0,
    },
    {
        'id': 'espinhaco-mockup-tv',
        'file': '08_espinhaco_mockup_tv_06.mp4',
        'poster_ts': '00:00:05',
        'preview_dur': 8.0,
    },
    {
        'id': 'cine-itajai-molhes',
        'file': '09_cine_itajai_molhes_interferencias.mp4',
        'poster_ts': '00:00:05',
        'preview_dur': 8.0,
    },
    {
        'id': 'aparecida-rogai-por-nos',
        'file': '10_aparecida_rogai_por_nos_02.mp4',
        'poster_ts': '00:00:05',
        'preview_dur': 8.0,
    }
]

PROJECTION = {
    'id': 'projecao-santuario-semana-arte',
    'file': '00_projecao_santuario_semana_da_arte_vertical.mov',
    'poster_ts': '00:00:10'
}

def run_cmd(cmd):
    start = time.time()
    res = subprocess.run(cmd, capture_output=True, text=True)
    elapsed = time.time() - start
    if res.returncode != 0:
        print(f"Error running {' '.join(cmd)}:\n{res.stderr}")
        raise RuntimeError(res.stderr)
    return elapsed

print("=== GIGANTERA MEDIA OPTIMIZATION ENGINE ===")

# 1. Process Projection
proj_src = os.path.join(ONLINE_DIR, PROJECTION['file'])
proj_poster_jpg = os.path.join(PROJECTIONS_DIR, f"{PROJECTION['id']}_poster.jpg")
proj_poster_webp = os.path.join(PROJECTIONS_DIR, f"{PROJECTION['id']}_poster.webp")
proj_video_mp4 = os.path.join(PROJECTIONS_DIR, f"{PROJECTION['id']}_web.mp4")

print(f"\n[1/3] Processing Wall Projection: {PROJECTION['id']}")
from PIL import Image

def convert_to_webp(src_jpg, dest_webp, quality=88):
    im = Image.open(src_jpg)
    im.save(dest_webp, 'WEBP', quality=quality)

run_cmd(['ffmpeg', '-y', '-ss', PROJECTION['poster_ts'], '-i', proj_src, '-vframes', '1', '-q:v', '2', proj_poster_jpg])
convert_to_webp(proj_poster_jpg, proj_poster_webp, 88)
print(f"  ✓ Poster generated: {os.path.getsize(proj_poster_webp)/(1024):.1f} KB")

# Projection Web Video (H.264, faststart, crf 23, 1080x1920, muted for WebGL texture loop)
print(f"  Encoding web video for Three.js texture...")
t = run_cmd([
    'ffmpeg', '-y', '-i', proj_src,
    '-c:v', 'libx264', '-preset', 'fast', '-crf', '23',
    '-pix_fmt', 'yuv420p',
    '-an',
    '-movflags', '+faststart',
    proj_video_mp4
])
print(f"  ✓ Projection web video encoded in {t:.1f}s: {os.path.getsize(proj_video_mp4)/(1024*1024):.1f} MB")

# 2. Process Artworks
total = len(WORKS)
for idx, w in enumerate(WORKS, start=1):
    src = os.path.join(ONLINE_DIR, w['file'])
    print(f"\n[2/3] ({idx}/{total}) Processing Work: {w['id']}")
    
    # Posters (JPG + WebP)
    poster_jpg = os.path.join(POSTERS_DIR, f"{w['id']}.jpg")
    poster_webp = os.path.join(POSTERS_DIR, f"{w['id']}.webp")
    run_cmd(['ffmpeg', '-y', '-ss', w['poster_ts'], '-i', src, '-vframes', '1', '-q:v', '2', poster_jpg])
    convert_to_webp(poster_jpg, poster_webp, 88)
    print(f"  ✓ Posters: JPG ({os.path.getsize(poster_jpg)/1024:.1f}KB), WebP ({os.path.getsize(poster_webp)/1024:.1f}KB)")
    
    # 3D Vitrine Preview Loop (Lightweight, 8 seconds, faststart, muted)
    preview_mp4 = os.path.join(PREVIEWS_DIR, f"{w['id']}_loop.mp4")
    run_cmd([
        'ffmpeg', '-y', '-ss', '00:00:00', '-t', str(w['preview_dur']), '-i', src,
        '-c:v', 'libx264', '-preset', 'fast', '-crf', '24',
        '-pix_fmt', 'yuv420p',
        '-an',
        '-movflags', '+faststart',
        preview_mp4
    ])
    print(f"  ✓ Gallery Preview Loop: {os.path.getsize(preview_mp4)/(1024*1024):.2f} MB")
    
    # Full Stream-Ready Web Video (CinemaView modal playback with sound)
    full_mp4 = os.path.join(VIDEOS_DIR, f"{w['id']}_full.mp4")
    t = run_cmd([
        'ffmpeg', '-y', '-i', src,
        '-c:v', 'libx264', '-preset', 'fast', '-crf', '22',
        '-c:a', 'aac', '-b:a', '192k',
        '-pix_fmt', 'yuv420p',
        '-movflags', '+faststart',
        full_mp4
    ])
    print(f"  ✓ Full Stream Master encoded in {t:.1f}s: {os.path.getsize(full_mp4)/(1024*1024):.1f} MB")

print("\n=== All media assets successfully processed & optimized! ===")
