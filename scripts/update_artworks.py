#!/usr/bin/env python3
import re

with open('src/data/artworks.ts', 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = 'export const ARTWORKS_CATALOG: Artwork[] = ['
end_marker = 'export const PIPELINE_CLUSTERS: OutputCluster[] = ['

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print('Error: Markers not found!', start_idx, end_idx)
    exit(1)

new_catalog = '''export const ARTWORKS_CATALOG: Artwork[] = [
  // ==========================================
  // SANTUÁRIO CLÍMAX: ESCULTURA MONUMENTAL INTERATIVA (Z ≈ -76.5m)
  // ==========================================
  {
    id: 'espinhaco-interactive-root',
    title: 'ESPINHAÇO',
    series: 'Espinhaço',
    medium: 'interactive',
    categoryLabel: 'ESCULTURA MONUMENTAL // INTERATIVA',
    year: 2026,
    materials: 'Liga fundida de prata e aço usinado, shaders GLSL de reflexão física, cinemática biomecânica vertebral',
    description: 'Coluna vertebral articulada fundida em liga metálica prateada. Cinemática orgânica de nado transmitida entre vértebras sob meio viscoso, com controle por teclado e órbita 360°.',
    imageSrc: `${BUNNY_CDN_GIGANTERA}/posters/espinhaco-giant-mullets.webp`,
    aspectRatio: '9 / 16',
    aspectRatioNum: 1080 / 1920,
    spatialCoords: { x: 0, y: 0.0, z: -76.5, rotY: 0 },
    curatorialNotes: 'Escultura computacional monumental. A biomecânica fóssil como interface cinemática física e sensorial.',
    interactiveExperience: 'espinhaco'
  },

  // ==========================================
  // SETOR 01: TETRÁPODE (Concreto, Pixel e Tecnologia Morta)
  // ==========================================
  {
    id: 'tetrapode-concreto-pixel',
    title: 'TETRÁPODE I // CONCRETO & MARÉ',
    series: 'Tetrapode',
    medium: 'video',
    categoryLabel: 'VIDEOARTE MONOCANAL // SIMULAÇÃO MARINHA',
    year: 2026,
    materials: 'Vitrine de vidro reflexivo, simulação hidrodinâmica oceânica, fotogrametria brutalista e névoa volumétrica',
    description: 'Monólito de concreto de quatro pontas isolado sob mar revolto. O choque contínuo de ondas salinas como teste de dissipação cinética.',
    imageSrc: `${BUNNY_CDN_GIGANTERA}/posters/tetrapode-concreto-pixel.webp`,
    previewSrc: `${BUNNY_CDN_GIGANTERA}/previews/tetrapode-concreto-pixel_loop.mp4`,
    videoSrc: `${BUNNY_CDN_GIGANTERA}/videos/tetrapode-concreto-pixel_full.mp4`,
    duration: '00:59 (Loop Contínuo)',
    aspectRatio: '9 / 16',
    aspectRatioNum: 1080 / 1920,
    spatialCoords: { x: -3.8, y: 0.0, z: 12.0, rotY: 0.12 },
    curatorialNotes: 'Estudo da contenção física costeira frente à entropia marinha. A geometria bruta do quebra-mar contra a maré alta.',
    hasAudio: true,
    availableInMediaKit: true,
    masterFormat: 'Master H.264 / AAC 24fps',
    dimensionsOrDuration: '1080 × 1920 px · 00:59'
  },
  {
    id: 'tetrapode-tecnologia-morta',
    title: 'TETRÁPODE II // TECNOLOGIA MORTA',
    series: 'Tetrapode',
    medium: 'video',
    categoryLabel: 'ESCULTURA DIGITAL // FÓSSIL TECNOLÓGICO',
    year: 2026,
    materials: 'Vitrine de vidro reflexivo, fotogrametria de concreto poroso, circuitos integrados analógicos e displays LCD obsoletos',
    description: 'Estrutura de concreto brutalista incrustada de placas de circuito, calculadoras solares e crustáceos marinhos. A litificação do lixo eletrônico na infraestrutura portuária.',
    imageSrc: `${BUNNY_CDN_GIGANTERA}/posters/tetrapode-tecnologia-morta.webp`,
    previewSrc: `${BUNNY_CDN_GIGANTERA}/previews/tetrapode-tecnologia-morta_loop.mp4`,
    videoSrc: `${BUNNY_CDN_GIGANTERA}/videos/tetrapode-tecnologia-morta_full.mp4`,
    duration: '00:56 (Loop Contínuo)',
    aspectRatio: '9 / 16',
    aspectRatioNum: 1080 / 1920,
    spatialCoords: { x: 3.8, y: 0.0, z: 5.2, rotY: -0.15 },
    curatorialNotes: 'Concreto, silício e salitre. A tecnologia obsoleta cimentada como sedimento geológico nos molhes do litoral.',
    hasAudio: true,
    availableInMediaKit: true,
    masterFormat: 'Master H.264 / AAC 24fps',
    dimensionsOrDuration: '1080 × 1920 px · 00:56'
  },

  // ==========================================
  // SETOR 02: TERRITÓRIO CRÍTICO (No$talgia, Cine Itajaí & Aparecida)
  // ==========================================
  {
    id: 'nostalgia-monolito-costeiro',
    title: 'NO$TALGIA // PORTAL COSTEIRO',
    series: 'Nostalgia',
    medium: 'video',
    categoryLabel: 'COMPOSIÇÃO VOLUMÉTRICA // PAISAGEM CRÍTICA',
    year: 2026,
    materials: 'Vitrine de vidro reflexivo, dinâmica de fluidos costeira, espelho dielétrico flutuante e colunas de fumaça portuária',
    description: 'Eixo longitudinal dos molhes sob ressaca. Entre os guindastes industriais e o templo urbano em chamas, uma lâmina espelhada suspende o poente marítimo.',
    imageSrc: `${BUNNY_CDN_GIGANTERA}/posters/nostalgia-monolito-costeiro.webp`,
    previewSrc: `${BUNNY_CDN_GIGANTERA}/previews/nostalgia-monolito-costeiro_loop.mp4`,
    videoSrc: `${BUNNY_CDN_GIGANTERA}/videos/nostalgia-monolito-costeiro_full.mp4`,
    duration: '00:50 (Loop Contínuo)',
    aspectRatio: '9 / 16',
    aspectRatioNum: 1080 / 1920,
    spatialCoords: { x: -3.8, y: 0.0, z: -1.6, rotY: 0.14 },
    curatorialNotes: 'Tensão entre capital portuário, fé e colapso ambiental. O espelho flutuante funciona como corte óptico entre a memória e a fumaça industrial.',
    hasAudio: true,
    availableInMediaKit: true,
    masterFormat: 'Master H.264 / AAC 24fps',
    dimensionsOrDuration: '1080 × 1920 px · 00:50'
  },
  {
    id: 'cine-itajai-molhes',
    title: 'CINE ITAJAÍ // MOLHES & INTERFERÊNCIAS',
    series: 'Cine Itajaí',
    medium: 'video',
    categoryLabel: 'TELEMETRIA LIDAR // VISÃO COMPUTACIONAL',
    year: 2026,
    materials: 'Vitrine de vidro reflexivo, rastreamento vetorial em tempo real, nuvem esparsa de pontos de dispersão e névoa advectiva',
    description: 'O caminho de asfalto rachado até o farol da barra envolto em nevoeiro denso. Matriz de coordenadas biométricas e rastros de varredura topográfica cobrem as pedras do quebra-mar.',
    imageSrc: `${BUNNY_CDN_GIGANTERA}/posters/cine-itajai-molhes.webp`,
    previewSrc: `${BUNNY_CDN_GIGANTERA}/previews/cine-itajai-molhes_loop.mp4`,
    videoSrc: `${BUNNY_CDN_GIGANTERA}/videos/cine-itajai-molhes_full.mp4`,
    duration: '00:30 (Loop Contínuo)',
    aspectRatio: '9 / 16',
    aspectRatioNum: 1080 / 1920,
    spatialCoords: { x: 3.8, y: 0.0, z: -8.4, rotY: -0.12 },
    curatorialNotes: 'Molhes, capivaras, chiaços de rádio VHF e interferências digitais. A foz do rio Itajaí-Açu sob o olhar da visão computacional militarizada.',
    hasAudio: true,
    availableInMediaKit: true,
    masterFormat: 'Master H.264 / AAC 24fps',
    dimensionsOrDuration: '1080 × 1920 px · 00:30'
  },
  {
    id: 'aparecida-rogai-por-nos',
    title: 'APARECIDA // ROGAI POR NÓS',
    series: 'Bolsomaster',
    medium: 'video',
    categoryLabel: 'ARTE POLÍTICA // ESCULTURA BIOMÓRFICA',
    year: 2026,
    materials: 'Vitrine de vidro reflexivo, manto em exoesqueleto cromo-níquel, caixas delimitadoras de detecção neural e geometria cívica',
    description: 'A padroeira sob manto de prata orgânica vazada em malha óssea. Caixas de classificação algorítmica escaneiam o corpo sagrado sobre o losango nacional esmaecido.',
    imageSrc: `${BUNNY_CDN_GIGANTERA}/posters/aparecida-rogai-por-nos.webp`,
    previewSrc: `${BUNNY_CDN_GIGANTERA}/previews/aparecida-rogai-por-nos_loop.mp4`,
    videoSrc: `${BUNNY_CDN_GIGANTERA}/videos/aparecida-rogai-por-nos_full.mp4`,
    duration: '00:22 (Loop Contínuo)',
    aspectRatio: '9 / 16',
    aspectRatioNum: 1080 / 1920,
    spatialCoords: { x: -3.8, y: 0.0, z: -15.2, rotY: 0.12 },
    curatorialNotes: 'Rogai por nós, brasileiros. Análise crítica da apropriação iconográfica e da vigilância teocrática no imaginário nacional.',
    hasAudio: true,
    availableInMediaKit: true,
    masterFormat: 'Master H.264 / AAC 24fps',
    dimensionsOrDuration: '1080 × 1920 px · 00:22'
  },

  // ==========================================
  // SETOR 03: ESPINHAÇO (Espinha, Tainha e Aço)
  // ==========================================
  {
    id: 'espinhaco-projecao-tecido',
    title: 'ESPINHAÇO // PROJEÇÃO TÊXTIL',
    series: 'Espinhaço',
    medium: 'video',
    categoryLabel: 'INSTALAÇÃO DIGITAL // VETOR VERTICAL',
    year: 2026,
    materials: 'Vitrine de vidro reflexivo, simulação de tecido fragmentado, coordenadas anatômicas e transmissão de torque biomotor',
    description: 'Projeção da coluna vertebral em tiras verticais de tecido suspenso. A imagem oscila com a física do ar e números de telemetria médica.',
    imageSrc: `${BUNNY_CDN_GIGANTERA}/posters/espinhaco-projecao-tecido.webp`,
    previewSrc: `${BUNNY_CDN_GIGANTERA}/previews/espinhaco-projecao-tecido_loop.mp4`,
    videoSrc: `${BUNNY_CDN_GIGANTERA}/videos/espinhaco-projecao-tecido_full.mp4`,
    duration: '00:55 (Loop Contínuo)',
    aspectRatio: '9 / 16',
    aspectRatioNum: 1080 / 1920,
    spatialCoords: { x: 3.8, y: 0.0, z: -22.0, rotY: -0.14 },
    curatorialNotes: 'A espinha dorsal decomposta em cortinas tácteis. A fragilidade têxtil versus a rigidez óssea.',
    hasAudio: true,
    availableInMediaKit: true,
    masterFormat: 'Master H.264 / AAC 24fps',
    dimensionsOrDuration: '1080 × 1920 px · 00:55'
  },
  {
    id: 'espinhaco-giant-mullets',
    title: 'ESPINHAÇO // GIANT MULLETS',
    series: 'Espinhaço',
    medium: 'video',
    categoryLabel: 'ANATOMIA FÓSSIL // MACRO CROMO',
    year: 2026,
    materials: 'Vitrine de vidro reflexivo, macro-render de liga metálica fundida, botânica estuarina e malha esquelética de tainha gigante',
    description: 'Planos de detalhe extremo das costelas e vértebras da Mugil liza (tainha) fundidas em aço inoxidável e prata bruta.',
    imageSrc: `${BUNNY_CDN_GIGANTERA}/posters/espinhaco-giant-mullets.webp`,
    previewSrc: `${BUNNY_CDN_GIGANTERA}/previews/espinhaco-giant-mullets_loop.mp4`,
    videoSrc: `${BUNNY_CDN_GIGANTERA}/videos/espinhaco-giant-mullets_full.mp4`,
    duration: '00:20 (Loop Contínuo)',
    aspectRatio: '9 / 16',
    aspectRatioNum: 1080 / 1920,
    spatialCoords: { x: -3.8, y: 0.0, z: -28.8, rotY: 0.12 },
    curatorialNotes: 'Espinha, tainha e aço. A ictiofauna costeira catarinense convertida em mecanismo industrial de alta densidade.',
    hasAudio: true,
    availableInMediaKit: true,
    masterFormat: 'Master H.264 / AAC 24fps',
    dimensionsOrDuration: '1080 × 1920 px · 00:20'
  },
  {
    id: 'espinhaco-matriz-pontos',
    title: 'ESPINHAÇO // MATRIZ ESTOCÁSTICA',
    series: 'Espinhaço',
    medium: 'video',
    categoryLabel: 'SIMULAÇÃO PROCEDURAL // ASCII GLSL',
    year: 2026,
    materials: 'Vitrine de vidro reflexivo, nuvem de partículas glifadas, tipografia monospaçada e cinemática vertebral em vácuo escuro',
    description: 'Decomposição total da coluna em caracteres tipográficos ASCII e pontos brilhantes que dispersam com a gravidade zero.',
    imageSrc: `${BUNNY_CDN_GIGANTERA}/posters/espinhaco-matriz-pontos.webp`,
    previewSrc: `${BUNNY_CDN_GIGANTERA}/previews/espinhaco-matriz-pontos_loop.mp4`,
    videoSrc: `${BUNNY_CDN_GIGANTERA}/videos/espinhaco-matriz-pontos_full.mp4`,
    duration: '00:45 (Loop Contínuo)',
    aspectRatio: '9 / 16',
    aspectRatioNum: 1080 / 1920,
    spatialCoords: { x: 3.8, y: 0.0, z: -35.6, rotY: -0.15 },
    curatorialNotes: 'A anatomia transmutada em código binário e densidade de caracteres. Deslocamento do corpo biológico para o fluxo de dados.',
    hasAudio: true,
    availableInMediaKit: true,
    masterFormat: 'Master H.264 / AAC 24fps',
    dimensionsOrDuration: '1080 × 1920 px · 00:45'
  },
  {
    id: 'espinhaco-abissal-tracao',
    title: 'ESPINHAÇO // TRAÇÃO ABISSAL',
    series: 'Espinhaço',
    medium: 'video',
    categoryLabel: 'SIMULAÇÃO HIDRODINÂMICA // LIGA METÁLICA',
    year: 2026,
    materials: 'Vitrine de vidro reflexivo, câmera volumétrica abissal, prata líquida, marcadores numéricos de telemetria submarina e partículas marinhas',
    description: 'Nado ondulatório diagonal da espinha vertebral prateada cruzando a coluna de água escura sob coordenadas de rastreamento contínuo.',
    imageSrc: `${BUNNY_CDN_GIGANTERA}/posters/espinhaco-abissal-tracao.webp`,
    previewSrc: `${BUNNY_CDN_GIGANTERA}/previews/espinhaco-abissal-tracao_loop.mp4`,
    videoSrc: `${BUNNY_CDN_GIGANTERA}/videos/espinhaco-abissal-tracao_full.mp4`,
    duration: '00:55 (Loop Contínuo)',
    aspectRatio: '9 / 16',
    aspectRatioNum: 1080 / 1920,
    spatialCoords: { x: -3.8, y: 0.0, z: -42.4, rotY: 0.14 },
    curatorialNotes: 'Propulsão biomecânica em fluido denso. A coluna fóssil ganha mobilidade autônoma através de equações de Navier-Stokes.',
    hasAudio: true,
    availableInMediaKit: true,
    masterFormat: 'Master H.264 / AAC 24fps',
    dimensionsOrDuration: '1080 × 1920 px · 00:55'
  },
  {
    id: 'espinhaco-mockup-tv',
    title: 'ESPINHAÇO // REGISTRO CATÓDICO',
    series: 'Espinhaço',
    medium: 'video',
    categoryLabel: 'VÍDEO-ESCULTURA // CRT & NATUREZA',
    year: 2026,
    materials: 'Vitrine de vidro reflexivo, monitor de fósforo com tubo de raios catódicos, águas fluviais de montanha e reflexo vítreo arranhado',
    description: 'Coluna vertebral nadando em leito de pedras fluviais cristalinas, exibida através de tela de vidro analógica com reflexos do ambiente.',
    imageSrc: `${BUNNY_CDN_GIGANTERA}/posters/espinhaco-mockup-tv.webp`,
    previewSrc: `${BUNNY_CDN_GIGANTERA}/previews/espinhaco-mockup-tv_loop.mp4`,
    videoSrc: `${BUNNY_CDN_GIGANTERA}/videos/espinhaco-mockup-tv_full.mp4`,
    duration: '00:25 (Loop Contínuo)',
    aspectRatio: '9 / 16',
    aspectRatioNum: 1080 / 1920,
    spatialCoords: { x: 3.8, y: 0.0, z: -49.2, rotY: -0.12 },
    curatorialNotes: 'O espécime digital confinado na materialidade do tubo de imagem. Tensão entre águas puras e a tela pesada de fósforo.',
    hasAudio: true,
    availableInMediaKit: true,
    masterFormat: 'Master H.264 / AAC 24fps',
    dimensionsOrDuration: '1080 × 1920 px · 00:25'
  }
];\n\n'''

updated = content[:start_idx] + new_catalog + content[end_idx:]

with open('src/data/artworks.ts', 'w', encoding='utf-8') as f:
    f.write(updated)

print('Updated artworks.ts cleanly with python!')
