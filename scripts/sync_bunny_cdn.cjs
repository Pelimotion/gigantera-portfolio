const https = require('https');
const fs = require('fs');
const path = require('path');

const BUNNY_STORAGE_ZONE = 'gigantera';
const BUNNY_STORAGE_PASSWORD = '9b382c1a-23ac-4fa6-b93ce53458c7-e946-40b8';
const BUNNY_ENDPOINT = 'br.storage.bunnycdn.com';
const OLD_CDN_BASE = 'https://pelimotion-portfolio.b-cdn.net/gigantera';
const NEW_PULL_ZONE = 'https://gigantera-penumbra.b-cdn.net';

const LOCAL_WORKS_DIR = path.join(__dirname, 'public/works');

const AUDIO_TRACKS = [
  '01-automar', '02-danse', '03-apenas', '04-giant-mullets',
  '05-notalgia', '06-un-disney', '07-sintetic-olive', '08-fisherman',
  '09-talking-peoplr', '10-feed-your-soul', '11-assuviu', '12-bicho-malandro',
  '13-calmaria', '14-todas-linguas', '15-tranca', '16-techno-1', '17-sobnome'
];

const STILLS = [
  'espinhaco-cinetica-prata.jpg',
  'espinhaco-descida-crepuscular.jpg',
  'espinhaco-registro-abissal.jpg',
  'espinhaco-relevo-neotribal.jpg',
  'espinhaco-vitrine-aquario.jpg',
  'notalgia-monolito-costeiro.jpg',
  'sedimento-litificacao-final.jpg',
  'zimbro-estudo-espectral.jpg',
  'zimbro-rastreamento-vetorial.jpg'
];

const VIDEOS = [
  'video-01-kinetic-spine.mp4',
  'video-02-stipples-simulation.mp4',
  'video-03-metallic-spine.mp4',
  'video-04-mapping-led.mp4',
  'video-05-onda-padroes.mp4',
  'video-06-cores-spectrum.mp4'
];

function downloadBuffer(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: HTTP ${res.statusCode}`));
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

function uploadBuffer(remotePath, buffer, contentType) {
  return new Promise((resolve, reject) => {
    const encodedPath = '/' + BUNNY_STORAGE_ZONE + '/' + remotePath.split('/').map(encodeURIComponent).join('/');
    const req = https.request({
      hostname: BUNNY_ENDPOINT,
      path: encodedPath,
      method: 'PUT',
      headers: {
        'AccessKey': BUNNY_STORAGE_PASSWORD,
        'Content-Length': buffer.length,
        'Content-Type': contentType || 'application/octet-stream'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200 || res.statusCode === 201) {
          resolve({ status: res.statusCode, remote: remotePath, size: buffer.length });
        } else {
          reject(new Error(`Deploy failed for ${remotePath}: HTTP ${res.statusCode} - ${data}`));
        }
      });
    });
    req.on('error', reject);
    req.write(buffer);
    req.end();
  });
}

async function verifyHead(url) {
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'HEAD' }, (res) => {
      resolve(res.statusCode);
    });
    req.on('error', () => resolve(500));
    req.end();
  });
}

async function run() {
  console.log('🚀 [BUNNY CDN MIGRATION] Iniciando sincronização integral para zona "gigantera"');
  console.log(`🌐 Pull Zone Destino: ${NEW_PULL_ZONE}\n`);

  // 1. Audio Previews
  console.log('🎵 --- FASE 1: Áudio Previews (17 faixas) ---');
  for (const track of AUDIO_TRACKS) {
    const filename = `preview-${track}.mp3`;
    const remoteSubpath = `audio/previews/${filename}`;
    const url = `${OLD_CDN_BASE}/${remoteSubpath}`;
    try {
      const buf = await downloadBuffer(url);
      await uploadBuffer(remoteSubpath, buf, 'audio/mpeg');
      await uploadBuffer(`gigantera/${remoteSubpath}`, buf, 'audio/mpeg');
      const headStatus = await verifyHead(`${NEW_PULL_ZONE}/${remoteSubpath}`);
      console.log(`  ✓ ${filename.padEnd(30)} [${(buf.length/1024).toFixed(1)} KB] -> CDN HTTP ${headStatus}`);
    } catch (e) {
      console.error(`  ✗ Erro em ${filename}:`, e.message);
    }
  }

  // 2. Audio Full Tracks
  console.log('\n🎼 --- FASE 2: Áudio Completo / Full (17 faixas) ---');
  for (const track of AUDIO_TRACKS) {
    const filename = `full-${track}.mp3`;
    const remoteSubpath = `audio/full/${filename}`;
    const url = `${OLD_CDN_BASE}/${remoteSubpath}`;
    try {
      const buf = await downloadBuffer(url);
      await uploadBuffer(remoteSubpath, buf, 'audio/mpeg');
      await uploadBuffer(`gigantera/${remoteSubpath}`, buf, 'audio/mpeg');
      const headStatus = await verifyHead(`${NEW_PULL_ZONE}/${remoteSubpath}`);
      console.log(`  ✓ ${filename.padEnd(30)} [${(buf.length/1024/1024).toFixed(2)} MB] -> CDN HTTP ${headStatus}`);
    } catch (e) {
      console.error(`  ✗ Erro em ${filename}:`, e.message);
    }
  }

  // 3. Stills / Obras Fotográficas Giclée
  console.log('\n🖼️ --- FASE 3: Stills & Obras Giclée (9 obras) ---');
  for (const filename of STILLS) {
    const remoteSubpath = `stills/${filename}`;
    let buf = null;
    const localPath = path.join(LOCAL_WORKS_DIR, filename);
    if (fs.existsSync(localPath)) {
      buf = fs.readFileSync(localPath);
    } else {
      buf = await downloadBuffer(`${OLD_CDN_BASE}/${remoteSubpath}`);
    }
    try {
      await uploadBuffer(remoteSubpath, buf, 'image/jpeg');
      await uploadBuffer(`gigantera/${remoteSubpath}`, buf, 'image/jpeg');
      const headStatus = await verifyHead(`${NEW_PULL_ZONE}/${remoteSubpath}`);
      console.log(`  ✓ ${filename.padEnd(36)} [${(buf.length/1024).toFixed(1)} KB] -> CDN HTTP ${headStatus}`);
    } catch (e) {
      console.error(`  ✗ Erro em ${filename}:`, e.message);
    }
  }

  // 4. Videos / Vitrines Cinéticas
  console.log('\n🎬 --- FASE 4: Vídeos & Vitrines Cinéticas (6 vídeos) ---');
  for (const filename of VIDEOS) {
    const remoteSubpath = `videos/${filename}`;
    let buf = null;
    const localPath = path.join(LOCAL_WORKS_DIR, 'video', filename);
    if (fs.existsSync(localPath)) {
      buf = fs.readFileSync(localPath);
    } else {
      buf = await downloadBuffer(`${OLD_CDN_BASE}/${remoteSubpath}`);
    }
    try {
      await uploadBuffer(remoteSubpath, buf, 'video/mp4');
      await uploadBuffer(`gigantera/${remoteSubpath}`, buf, 'video/mp4');
      const headStatus = await verifyHead(`${NEW_PULL_ZONE}/${remoteSubpath}`);
      console.log(`  ✓ ${filename.padEnd(36)} [${(buf.length/1024/1024).toFixed(2)} MB] -> CDN HTTP ${headStatus}`);
    } catch (e) {
      console.error(`  ✗ Erro em ${filename}:`, e.message);
    }
  }

  console.log('\n✨ [MIGRAÇÃO CONCLUÍDA COM SUCESSO]');
}

run().catch(console.error);
