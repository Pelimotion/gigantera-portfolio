const https = require('https');
const fs = require('fs');
const path = require('path');

const BUNNY_STORAGE_ZONE = 'gigantera';
const BUNNY_STORAGE_PASSWORD = '9b382c1a-23ac-4fa6-b93ce53458c7-e946-40b8';
const BUNNY_ENDPOINT = 'br.storage.bunnycdn.com';
const TARGET_FOLDER = 'gigantera-portfolio';
const PULL_ZONE = 'https://gigantera-penumbra.b-cdn.net';

const PUBLIC_WORKS = path.join(__dirname, '../public/works');

function uploadFileStream(localFilePath, remotePath, contentType) {
  return new Promise((resolve, reject) => {
    const stats = fs.statSync(localFilePath);
    const encodedPath = '/' + BUNNY_STORAGE_ZONE + '/' + remotePath.split('/').map(encodeURIComponent).join('/');
    
    const req = https.request({
      hostname: BUNNY_ENDPOINT,
      path: encodedPath,
      method: 'PUT',
      headers: {
        'AccessKey': BUNNY_STORAGE_PASSWORD,
        'Content-Length': stats.size,
        'Content-Type': contentType || 'application/octet-stream'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200 || res.statusCode === 201) {
          resolve({ status: res.statusCode, remote: remotePath, size: stats.size });
        } else {
          reject(new Error(`Deploy failed for ${remotePath}: HTTP ${res.statusCode} - ${data}`));
        }
      });
    });

    req.on('error', reject);
    const fileStream = fs.createReadStream(localFilePath);
    fileStream.pipe(req);
  });
}

function verifyHead(url) {
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'HEAD' }, (res) => {
      resolve(res.statusCode);
    });
    req.on('error', () => resolve(500));
    req.end();
  });
}

async function uploadFolder(localDir, remoteSubfolder, defaultMime) {
  if (!fs.existsSync(localDir)) return;
  const files = fs.readdirSync(localDir);
  for (const f of files) {
    if (f.startsWith('.')) continue;
    const localPath = path.join(localDir, f);
    if (!fs.statSync(localPath).isFile()) continue;

    let mime = defaultMime;
    if (f.endsWith('.webp')) mime = 'image/webp';
    else if (f.endsWith('.jpg') || f.endsWith('.jpeg')) mime = 'image/jpeg';
    else if (f.endsWith('.mp4')) mime = 'video/mp4';

    const remotePath = `${TARGET_FOLDER}/${remoteSubfolder}/${f}`;
    const sizeMb = (fs.statSync(localPath).size / (1024 * 1024)).toFixed(2);
    process.stdout.write(`  Uploading ${f.padEnd(45)} [${sizeMb} MB]... `);
    try {
      await uploadFileStream(localPath, remotePath, mime);
      const head = await verifyHead(`${PULL_ZONE}/${remotePath}`);
      console.log(`✓ (CDN ${head})`);
    } catch (e) {
      console.log(`✗ Error: ${e.message}`);
    }
  }
}

async function main() {
  console.log('🚀 [BUNNY CDN ASSET SYNC] Enviando novos acervos otimizados para Bunny Edge...');
  console.log(`Pull Zone: ${PULL_ZONE}/${TARGET_FOLDER}/\n`);

  console.log('🖼️ 1. Posters em Alta Resolução (WebP & JPG)');
  await uploadFolder(path.join(PUBLIC_WORKS, 'posters'), 'posters', 'image/webp');

  console.log('\n🎞️ 2. Previews de Vitrine 3D (Loop leve)');
  await uploadFolder(path.join(PUBLIC_WORKS, 'video'), 'previews', 'video/mp4');

  console.log('\n🎬 3. Vídeos Master Streaming (CinemaView)');
  await uploadFolder(path.join(PUBLIC_WORKS, 'full'), 'videos', 'video/mp4');

  console.log('\n🏛️ 4. Projeção Santuário de Fundo');
  await uploadFolder(path.join(PUBLIC_WORKS, 'projections'), 'projections', 'video/mp4');

  console.log('\n🗿 5. Modelos 3D (GLB & Points Bin)');
  await uploadFolder(path.join(__dirname, '../public/models'), 'models', 'model/gltf-binary');

  console.log('\n✨ [SINCRONIZAÇÃO BUNNY CDN FINALIZADA COM SUCESSO]');
}

main().catch(console.error);
