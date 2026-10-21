# GIGANTERA — Operações, Infraestrutura & Pipeline de Mídia

> **Versão:** 3.0 (Outubro 2026)  
> **Domínio de Produção:** [https://gigantera.xyz](https://gigantera.xyz)  
> **CDN Pull Zone:** [https://gigantera-penumbra.b-cdn.net/gigantera-portfolio](https://gigantera-penumbra.b-cdn.net/gigantera-portfolio)  
> **Pasta Master de Exposição:** `/Volumes/PLM_SSD_01/Pipeline SSD 01/Gigantera/Pipeline Gigantera/Out Gigantera/ONLINE`  
> **Scripts de Suporte:** `scripts/process_media.py`, `scripts/upload_new_assets_bunny.cjs`, `scripts/sync_bunny_cdn.cjs`

---

## 1. Organização dos Masters em `Out Gigantera/ONLINE`

Para assegurar reprodutibilidade e integridade de arquivo, toda mídia de vídeo exposta no pavilhão é preservada na pasta mestre:
```
/Volumes/PLM_SSD_01/Pipeline SSD 01/Gigantera/Pipeline Gigantera/Out Gigantera/ONLINE/
├── 00_projecao_santuario_semana_da_arte_vertical.mov (260.6 MB)
├── 01_tetrapode_concreto_pixel_01.mp4 (108.3 MB)
├── 02_tetrapode_tecnologia_morta_02.mp4 (102.4 MB)
├── 03_nostalgia_monolito_costeiro_05.mp4 (91.3 MB)
├── 04_espinhaco_projecao_tecido_09_2.mp4 (101.7 MB)
├── 05_espinhaco_giant_mullets.mov (39.7 MB)
├── 06_espinhaco_matriz_pontos_13c.mp4 (82.3 MB)
├── 07_espinhaco_abissal_tracao_09_2.mp4 (268.2 MB)
├── 08_espinhaco_mockup_tv_06.mp4 (46.4 MB)
├── 09_cine_itajai_molhes_interferencias.mp4 (54.8 MB)
└── 10_aparecida_rogai_por_nos_02.mp4 (40.4 MB)
```

---

## 2. Pipeline de Transcodificação e Otimização (`scripts/process_media.py`)

O script Python automatiza a geração de 3 camadas de mídia a partir dos masters:
1. **Posters de Alta Resolução (`public/works/posters/`)**: WebP e JPG (1080×1920) extraídos em frame representativo e comprimidos via Pillow/FFmpeg.
2. **Loops Leves de Vitrine 3D (`public/works/video/`)**: Vídeos de 8 segundos, mutados, comprimidos em CRF 24 com `-movflags +faststart` (~1.5–2.0 MB).
3. **Masters de Streaming Completo (`public/works/full/`)**: Vídeo integral em H.264 CRF 22 com áudio estéreo AAC 192k e cabeçalho `moov atom` no início do arquivo para buffering instantâneo.
4. **Loops de Projeção (`public/works/projections/`)**: Otimização do master vertical para reprodução contínua na parede de fundo.

```bash
# Executar o pipeline de processamento de mídias
python3 scripts/process_media.py
```

---

## 3. Envio para Bunny.net Edge Storage (`scripts/upload_new_assets_bunny.cjs`)

Para garantir streaming ultra-rápido no Brasil e globalmente sem consumir largura de banda da Vercel:

- **Storage Zone:** `gigantera`
- **Endpoint Regional:** `br.storage.bunnycdn.com` (São Paulo)
- **Pull Zone Base:** `https://gigantera-penumbra.b-cdn.net/gigantera-portfolio/`
- **Subpastas na CDN:**
  - `posters/` — Imagens de capa WebP e JPG
  - `previews/` — Loops leves das vitrines 3D
  - `videos/` — Masters completos de streaming (CinemaView)
  - `projections/` — Vídeo e posters da projeção monumental de fundo
  - `models/` — Malha 3D `espinhaco.glb` (12.03 MB) e coordenadas `espinhaco_points.bin` (586 KB)

```bash
# Executar upload e validação de cabeçalhos HTTP 200 na CDN
node scripts/upload_new_assets_bunny.cjs
```

---

## 4. Comandos de Ciclo de Vida e Build

```bash
# 1. Checagem estrita de tipagem (0 erros garantidos)
npx tsc --noEmit

# 2. Compilação de produção limpa
npm run build

# 3. Pré-visualização local do bundle de produção
npm run preview -- --port 4173 --host

# 4. Deploy direto no Vercel (Production)
npx vercel --prod --yes
```

---

## 5. Rotina Recomendada para Adição de Novos Conteúdos

1. Salvar o master do vídeo na pasta `/Volumes/PLM_SSD_01/Pipeline SSD 01/Gigantera/Pipeline Gigantera/Out Gigantera/ONLINE` com nome padronizado.
2. Rodar `python3 scripts/process_media.py` para gerar preview, poster e streaming master.
3. Rodar `node scripts/upload_new_assets_bunny.cjs` para subir os arquivos para a Bunny CDN.
4. Cadastrar a obra em `src/data/artworks.ts` e calibrar os pesos em `src/data/mediaKitData.ts`.
5. Validar com `npx tsc --noEmit` e `npm run build`.
