import { Artwork, AudioTrackInfo, SectorInfo, OutputCluster } from '../types/art';

export const SECTORS_CATALOG: SectorInfo[] = [
  {
    id: 'entrance-audio',
    sectorCode: '01',
    title: 'SOM // ESTAÇÃO DE CD',
    medium: 'sound',
    zRange: 'Z: +24m → +18m',
    description: 'Estação física de audição. Estojo de CD 3D com 17 faixas autorais e filtro bipolar DJ.',
    accentColor: '#FF6B4A'
  },
  {
    id: 'tetrapode',
    sectorCode: '02',
    title: 'TETRÁPODE // CONCRETO, PIXEL & MORTE',
    medium: 'video',
    zRange: 'Z: +12m → -2m',
    description: 'Monólitos marítimos de concreto sob impacto oceânico, litificação de circuitos eletrônicos e tecnologia morta.',
    accentColor: '#63E2B7'
  },
  {
    id: 'costa-critica',
    sectorCode: '03',
    title: 'TERRITÓRIO // NO$TALGIA, CINE & APARECIDA',
    medium: 'video',
    zRange: 'Z: -8m → -28m',
    description: 'Fumaça portuária sobre o espelho costeiro, telemetria LiDAR nos molhes de Itajaí e iconografia cívica de vigilância.',
    accentColor: '#E4C379'
  },
  {
    id: 'espinhaco-vitrines',
    sectorCode: '04',
    title: 'ESPINHAÇO // TAINHA, ESPINHA & AÇO',
    medium: 'video',
    zRange: 'Z: -35m → -50m',
    description: 'Macro-anatomia fóssil de tainhas, matrizes tipográficas estocásticas, projeção têxtil e nado abissal viscoso.',
    accentColor: '#38BDF8'
  },
  {
    id: 'interactive-sanctuary',
    sectorCode: '05',
    title: 'SANTUÁRIO // ESCULTURA & PROJEÇÃO MONUMENTAL',
    medium: 'interactive',
    zRange: 'Z: -52m → -94m',
    description: 'Escultura vertebral em liga de prata e aço usinado fundido sobre basalto escuro, com projeção monumental na parede de fundo.',
    accentColor: '#4DEEEA'
  }
];

export const BUNNY_CDN_GIGANTERA = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_BUNNY_PULL_ZONE_URL) ? `${import.meta.env.VITE_BUNNY_PULL_ZONE_URL}/gigantera-portfolio` : 'https://gigantera-penumbra.b-cdn.net/gigantera-portfolio';
export const base = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) || '/';
export const cleanBase = base.endsWith('/') ? base : base + '/';
export const getWorkAssetUrl = (subpath: string) => `${cleanBase}works/${subpath}`;

export const AUTHORIAL_TRACKS_CATALOG: AudioTrackInfo[] = [
  {
    id: 'track-01-automar',
    trackNumber: '01',
    title: 'Automar',
    series: 'Automotaço / Pelimotion',
    genre: 'DEEP DUB TECHNO',
    bpm: 124,
    duration: '04:15',
    previewSrc: `${BUNNY_CDN_GIGANTERA}/audio/previews/preview-01-automar.mp3`,
    fullSrc: `${BUNNY_CDN_GIGANTERA}/audio/full/full-01-automar.mp3`,
    coverImage: `${BUNNY_CDN_GIGANTERA}/stills/espinhaco-registro-abissal.jpg`,
    year: 2026,
    description: 'Linha de baixo subaquática profunda e texturas analógicas densas com compressão harmônica de fita.'
  },
  {
    id: 'track-02-danse',
    trackNumber: '02',
    title: 'Danse',
    series: 'Gigantera Acoustic Loops',
    genre: 'MODULAR TECHNO',
    bpm: 128,
    duration: '05:32',
    previewSrc: `${BUNNY_CDN_GIGANTERA}/audio/previews/preview-02-danse.mp3`,
    fullSrc: `${BUNNY_CDN_GIGANTERA}/audio/full/full-02-danse.mp3`,
    coverImage: `${BUNNY_CDN_GIGANTERA}/stills/espinhaco-cinetica-prata.jpg`,
    year: 2026,
    description: 'Percussão mecânica agressiva e osciladores FM modulados simulando cinemática de biomotores.'
  },
  {
    id: 'track-03-apenas',
    trackNumber: '03',
    title: 'Apenas',
    series: 'Gigantera Acoustic Loops',
    genre: 'AMBIENT MODULAR',
    bpm: 118,
    duration: '01:52',
    previewSrc: `${BUNNY_CDN_GIGANTERA}/audio/previews/preview-03-apenas.mp3`,
    fullSrc: `${BUNNY_CDN_GIGANTERA}/audio/full/full-03-apenas.mp3`,
    coverImage: `${BUNNY_CDN_GIGANTERA}/stills/zimbro-estudo-espectral.jpg`,
    year: 2026,
    description: 'Harmonias aveludadas flutuantes no campo estéreo com ecos analógicos de fita.'
  },
  {
    id: 'track-04-giant-mullets',
    trackNumber: '04',
    title: 'Giant Mullets',
    series: 'Giant Mullets Project',
    genre: 'SUB-BASS EXPERIMENTAL',
    bpm: 122,
    duration: '04:48',
    previewSrc: `${BUNNY_CDN_GIGANTERA}/audio/previews/preview-04-giant-mullets.mp3`,
    fullSrc: `${BUNNY_CDN_GIGANTERA}/audio/full/full-04-giant-mullets.mp3`,
    coverImage: `${BUNNY_CDN_GIGANTERA}/stills/sedimento-litificacao-final.jpg`,
    year: 2026,
    description: 'Síntese granular de sub-graves pesados que modulam a intensidade das luzes da galeria.'
  },
  {
    id: 'track-05-notalgia',
    trackNumber: '05',
    title: 'Notalgia',
    series: 'Notalgia Audio Research',
    genre: 'MINIMAL DOWNTEMPO',
    bpm: 115,
    duration: '03:40',
    previewSrc: `${BUNNY_CDN_GIGANTERA}/audio/previews/preview-05-notalgia.mp3`,
    fullSrc: `${BUNNY_CDN_GIGANTERA}/audio/full/full-05-notalgia.mp3`,
    coverImage: `${BUNNY_CDN_GIGANTERA}/stills/notalgia-monolito-costeiro.jpg`,
    year: 2026,
    description: 'Paisagem acústica melancólica inspirada na transição entre arquitetura bruta e horizonte costeiro.'
  },
  {
    id: 'track-06-un-disney',
    trackNumber: '06',
    title: 'Un-disney',
    series: 'Un-disney Explorations',
    genre: 'DARK ELECTRONIC',
    bpm: 126,
    duration: '03:15',
    previewSrc: `${BUNNY_CDN_GIGANTERA}/audio/previews/preview-06-un-disney.mp3`,
    fullSrc: `${BUNNY_CDN_GIGANTERA}/audio/full/full-06-un-disney.mp3`,
    coverImage: `${BUNNY_CDN_GIGANTERA}/stills/espinhaco-vitrine-aquario.jpg`,
    year: 2026,
    description: 'Rupturas rítmicas e sintetizadores ásperos desconstruindo melodias tradicionais.'
  },
  {
    id: 'track-07-sintetic-olive',
    trackNumber: '07',
    title: 'Sintetic Olive',
    series: 'Palestine Sessions',
    genre: 'JAZZY DEEP HOUSE',
    bpm: 120,
    duration: '03:25',
    previewSrc: `${BUNNY_CDN_GIGANTERA}/audio/previews/preview-07-sintetic-olive.mp3`,
    fullSrc: `${BUNNY_CDN_GIGANTERA}/audio/full/full-07-sintetic-olive.mp3`,
    coverImage: `${BUNNY_CDN_GIGANTERA}/stills/zimbro-rastreamento-vetorial.jpg`,
    year: 2026,
    description: 'Teclados Rhodes elétricos entrelaçados com batidas minimalistas e sub-graves quentes.'
  },
  {
    id: 'track-08-fisherman',
    trackNumber: '08',
    title: 'Fisherman',
    series: 'Fisherman Project',
    genre: 'BRAZILIAN SLAP MINIMAL',
    bpm: 125,
    duration: '04:10',
    previewSrc: `${BUNNY_CDN_GIGANTERA}/audio/previews/preview-08-fisherman.mp3`,
    fullSrc: `${BUNNY_CDN_GIGANTERA}/audio/full/full-08-fisherman.mp3`,
    coverImage: `${BUNNY_CDN_GIGANTERA}/stills/espinhaco-relevo-neotribal.jpg`,
    year: 2026,
    description: 'Vocais processados e slap bass orgânico com transientes nítidos de caixa.'
  },
  {
    id: 'track-09-talking-peoplr',
    trackNumber: '09',
    title: 'Talking Peoplr',
    series: 'Talking Peoplr Sessions',
    genre: 'VOCAL MICROHOUSE',
    bpm: 122,
    duration: '01:45',
    previewSrc: `${BUNNY_CDN_GIGANTERA}/audio/previews/preview-09-talking-peoplr.mp3`,
    fullSrc: `${BUNNY_CDN_GIGANTERA}/audio/full/full-09-talking-peoplr.mp3`,
    coverImage: `${BUNNY_CDN_GIGANTERA}/stills/espinhaco-descida-crepuscular.jpg`,
    year: 2026,
    description: 'Fragmentos de fala humana fatiados em micro-loops e síncopes percussivas.'
  },
  {
    id: 'track-10-feed-your-soul',
    trackNumber: '10',
    title: 'Feed Your Soul',
    series: 'Soul Vision',
    genre: 'ORGANIC DEEP GROOVE',
    bpm: 120,
    duration: '03:52',
    previewSrc: `${BUNNY_CDN_GIGANTERA}/audio/previews/preview-10-feed-your-soul.mp3`,
    fullSrc: `${BUNNY_CDN_GIGANTERA}/audio/full/full-10-feed-your-soul.mp3`,
    coverImage: `${BUNNY_CDN_GIGANTERA}/stills/espinhaco-cinetica-prata.jpg`,
    year: 2025,
    description: 'Batida aveludada com percussões acústicas gravadas e modulação sutil de filtro.'
  },
  {
    id: 'track-11-assuviu',
    trackNumber: '11',
    title: 'Assuviu',
    series: 'Assuviu Research',
    genre: 'EXPERIMENTAL TECH',
    bpm: 124,
    duration: '02:40',
    previewSrc: `${BUNNY_CDN_GIGANTERA}/audio/previews/preview-11-assuviu.mp3`,
    fullSrc: `${BUNNY_CDN_GIGANTERA}/audio/full/full-11-assuviu.mp3`,
    coverImage: `${BUNNY_CDN_GIGANTERA}/stills/zimbro-estudo-espectral.jpg`,
    year: 2025,
    description: 'Timbres agudos modulados por ressonância senoidal sobrepondo-se a graves secos.'
  },
  {
    id: 'track-12-bicho-malandro',
    trackNumber: '12',
    title: 'Bicho Malandro',
    series: 'Pelichakk Productions',
    genre: 'NEO-SAMBA BASS',
    bpm: 126,
    duration: '04:30',
    previewSrc: `${BUNNY_CDN_GIGANTERA}/audio/previews/preview-12-bicho-malandro.mp3`,
    fullSrc: `${BUNNY_CDN_GIGANTERA}/audio/full/full-12-bicho-malandro.mp3`,
    coverImage: `${BUNNY_CDN_GIGANTERA}/stills/sedimento-litificacao-final.jpg`,
    year: 2025,
    description: 'Fusão de rítmica brasileira tradicional com sintetizadores de alta potência.'
  },
  {
    id: 'track-13-calmaria',
    trackNumber: '13',
    title: 'Calmaria',
    series: 'Calmaria Tape Loops',
    genre: 'CHILLOUT ELECTRONIC',
    bpm: 110,
    duration: '03:10',
    previewSrc: `${BUNNY_CDN_GIGANTERA}/audio/previews/preview-13-calmaria.mp3`,
    fullSrc: `${BUNNY_CDN_GIGANTERA}/audio/full/full-13-calmaria.mp3`,
    coverImage: `${BUNNY_CDN_GIGANTERA}/stills/espinhaco-vitrine-aquario.jpg`,
    year: 2025,
    description: 'Repouso dinâmico com ambiência fluida, ideal para contemplação prolongada.'
  },
  {
    id: 'track-14-todas-linguas',
    trackNumber: '14',
    title: 'Todas Línguas',
    series: 'Languages Project',
    genre: 'POLYRHYTHMIC TECHNO',
    bpm: 127,
    duration: '04:20',
    previewSrc: `${BUNNY_CDN_GIGANTERA}/audio/previews/preview-14-todas-linguas.mp3`,
    fullSrc: `${BUNNY_CDN_GIGANTERA}/audio/full/full-14-todas-linguas.mp3`,
    coverImage: `${BUNNY_CDN_GIGANTERA}/stills/notalgia-monolito-costeiro.jpg`,
    year: 2025,
    description: 'Camadas de percussões de diferentes culturas sintetizadas em pulsação unificada.'
  },
  {
    id: 'track-15-tranca',
    trackNumber: '15',
    title: 'Trança',
    series: 'Trança Modular',
    genre: 'MICRO MODULAR LOOP',
    bpm: 122,
    duration: '01:10',
    previewSrc: `${BUNNY_CDN_GIGANTERA}/audio/previews/preview-15-tranca.mp3`,
    fullSrc: `${BUNNY_CDN_GIGANTERA}/audio/full/full-15-tranca.mp3`,
    coverImage: `${BUNNY_CDN_GIGANTERA}/stills/espinhaco-relevo-neotribal.jpg`,
    year: 2025,
    description: 'Loop percussivo cruzado com envelopes estritos de decaimento.'
  },
  {
    id: 'track-16-techno-1',
    trackNumber: '16',
    title: 'Techno 1',
    series: 'Cumbia Tech Studies',
    genre: 'HYPNOTIC CUMBIA TECHNO',
    bpm: 126,
    duration: '01:50',
    previewSrc: `${BUNNY_CDN_GIGANTERA}/audio/previews/preview-16-techno-1.mp3`,
    fullSrc: `${BUNNY_CDN_GIGANTERA}/audio/full/full-16-techno-1.mp3`,
    coverImage: `${BUNNY_CDN_GIGANTERA}/stills/zimbro-rastreamento-vetorial.jpg`,
    year: 2025,
    description: 'Balanço latino subterrâneo fundido com bumbo 4x4 rígido e palmas industriais.'
  },
  {
    id: 'track-17-sobnome',
    trackNumber: '17',
    title: 'Sobnome',
    series: 'Sobnome Sketches',
    genre: 'AMBIENT TECHNO',
    bpm: 119,
    duration: '01:40',
    previewSrc: `${BUNNY_CDN_GIGANTERA}/audio/previews/preview-17-sobnome.mp3`,
    fullSrc: `${BUNNY_CDN_GIGANTERA}/audio/full/full-17-sobnome.mp3`,
    coverImage: `${BUNNY_CDN_GIGANTERA}/stills/espinhaco-descida-crepuscular.jpg`,
    year: 2025,
    description: 'Variação espectral contemplativa com ecos sutis de sintetizador polifônico.'
  }
];

export const ARTWORKS_CATALOG: Artwork[] = [
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
];

export const PIPELINE_CLUSTERS: OutputCluster[] = [
  {
    id: 'cluster-tarrafa-zimbro',
    clusterName: 'Tarrafa & Zimbro // A Pesca Monumental',
    series: 'Espinhaço',
    sourceDir: 'Pipeline Gigantera/Espinhaço/3. Out',
    concept: 'A tradição da tainha e a pesca monumental caiçara transmutada em biologia mecânica fóssil.',
    items: [
      {
        id: 'out-01-master',
        filename: 'GIGANTERA_GIANT_MULLETS.mov',
        proposedTitle: 'Tarrafa Cega (Master)',
        format: 'MOV ProRes',
        sizeApprox: '39.7 MB',
        type: 'master',
        notes: 'Master da animação biomecânica da coluna fóssil da tainha',
        sourceDir: 'Espinhaço/3. Out'
      },
      {
        id: 'out-01-study',
        filename: 'Gigantera - giant mullets v1.mp4',
        proposedTitle: 'Tarrafa Cega (Estudo)',
        format: 'MP4 H.264',
        sizeApprox: '4.9 MB',
        type: 'study',
        notes: 'Estudo inicial de cinética vertebral',
        sourceDir: 'Espinhaço/3. Out'
      },
      {
        id: 'out-02-zimbro',
        filename: 'GIGANTERA_ZIMBRO_01.mp4',
        proposedTitle: 'Cardume Noturno',
        format: 'MP4 4K',
        sizeApprox: '183.1 MB',
        type: 'master',
        notes: 'Renderização pesada da simulação hidrodinâmica completa de Zimbro',
        sourceDir: 'Espinhaço/3. Out'
      },
      {
        id: 'out-03-rede',
        filename: 'criativo 04.mp4',
        proposedTitle: 'Tração da Rede',
        format: 'MP4 1080p',
        sizeApprox: '47.7 MB',
        type: 'master',
        notes: 'Tensão de arrasto e flexão vertebral sob carga',
        sourceDir: 'Espinhaço/3. Out'
      },
      {
        id: 'out-04-arraste',
        filename: 'criativo 09.mp4',
        proposedTitle: 'Arraste Profundo',
        format: 'MP4 High-Bitrate',
        sizeApprox: '266.8 MB',
        type: 'master',
        notes: 'Variações 09_1 e 09_2 com detalhamento volumétrico abissal',
        sourceDir: 'Espinhaço/3. Out'
      },
      {
        id: 'out-05-styleframes',
        filename: 'Gigantera - Zimbro Styleframes.png',
        proposedTitle: 'Inventário / Pranchas de Ateliê',
        format: 'PNG 300DPI',
        sizeApprox: '4.3 MB',
        type: 'still',
        notes: 'Prancha de documentação curatorial e fotogramétrica de ateliê',
        sourceDir: 'Espinhaço/3. Out/STILL'
      },
      {
        id: 'out-06-still-vertebra',
        filename: 'Gigantera - Zimbro 2_criativo 09_2026-08-12_18.01.24.png',
        proposedTitle: 'Vértebra Flutuante',
        format: 'PNG Giclée',
        sizeApprox: '3.8 MB',
        type: 'still',
        notes: 'Isolamento de nódulo biomecânico em fundo neutro',
        sourceDir: 'Espinhaço/3. Out/STILL'
      },
      {
        id: 'out-07-still-costela',
        filename: 'Gigantera - Zimbro 2_criativo 10_2026-08-12_18.01.17.png',
        proposedTitle: 'Costela Fóssil',
        format: 'PNG Giclée',
        sizeApprox: '3.9 MB',
        type: 'still',
        notes: 'Estudo de calcificação e textura ictiológica',
        sourceDir: 'Espinhaço/3. Out/STILL'
      }
    ]
  },
  {
    id: 'cluster-grade-ruido',
    clusterName: 'Grade & Ruído // Matriz Estocástica',
    series: 'Espinhaço',
    sourceDir: 'Pipeline Gigantera/Espinhaço/3. Out (Série Criativo 08)',
    concept: 'A decomposição da imagem fotográfica em código, ruído e matriz vetorial.',
    items: [
      {
        id: 'out-08-matrix',
        filename: 'criativo 08 - matrix.mp4',
        proposedTitle: 'Sumud // Grade Estocástica',
        format: 'MP4',
        sizeApprox: '35.9 MB',
        type: 'master',
        notes: 'Matriz estocástica e varredura de pontos em tempo real',
        sourceDir: 'Espinhaço/3. Out'
      },
      {
        id: 'out-08-var-1',
        filename: 'criativo 08_1.mp4',
        proposedTitle: 'Trama Seca',
        format: 'MP4',
        sizeApprox: '50.9 MB',
        type: 'study',
        notes: 'Densidade alta de partículas sem atenuação',
        sourceDir: 'Espinhaço/3. Out'
      },
      {
        id: 'out-08-var-3',
        filename: 'criativo 08_3.mp4',
        proposedTitle: 'Frequência Oculta',
        format: 'MP4',
        sizeApprox: '50.9 MB',
        type: 'study',
        notes: 'Interferência harmônica na distribuição de pontos',
        sourceDir: 'Espinhaço/3. Out'
      },
      {
        id: 'out-08-var-5',
        filename: 'criativo 08_5.mp4',
        proposedTitle: 'Ruído de Fundo',
        format: 'MP4',
        sizeApprox: '51.6 MB',
        type: 'study',
        notes: 'Dissolução estocástica em meio líquido',
        sourceDir: 'Espinhaço/3. Out'
      }
    ]
  },
  {
    id: 'cluster-dispositivos-cenicos',
    clusterName: 'Dispositivos Cênicos // Vitrines & Mockups',
    series: 'Espinhaço',
    sourceDir: 'Pipeline Gigantera/Espinhaço/3. Out (Mockups Teatro & TV)',
    concept: 'A obra confrontando o espaço cênico brutalista e a tela preta de transmissão.',
    items: [
      {
        id: 'out-mock-teatro-06',
        filename: 'criativo 06 - mockup teatro.mp4',
        proposedTitle: 'Câmara Escura',
        format: 'MP4',
        sizeApprox: '13.6 MB',
        type: 'mockup',
        notes: 'Projeção imersiva simulada em palco escuro teatral',
        sourceDir: 'Espinhaço/3. Out'
      },
      {
        id: 'out-mock-tv-06',
        filename: 'criativo 06 - mockup tv.mp4',
        proposedTitle: 'Transmissão Fria',
        format: 'MP4',
        sizeApprox: '46.4 MB',
        type: 'mockup',
        notes: 'Monitor CRT brutalista exibindo loop da obra',
        sourceDir: 'Espinhaço/3. Out'
      },
      {
        id: 'out-mock-teatro-07',
        filename: 'criativo 07 - mockup teatro.mp4',
        proposedTitle: 'Palco Mudo',
        format: 'MP4',
        sizeApprox: '13.5 MB',
        type: 'mockup',
        notes: 'Composição espacial entre iluminação cênica e monolito',
        sourceDir: 'Espinhaço/3. Out'
      },
      {
        id: 'out-mock-vitrine-09',
        filename: 'mockup criativo 09_2.mp4',
        proposedTitle: 'Vitrine Suspensa',
        format: 'MP4',
        sizeApprox: '101.7 MB',
        type: 'mockup',
        notes: 'Câmara de acrílico flutuante em museu contemporâneo',
        sourceDir: 'Espinhaço/3. Out'
      }
    ]
  },
  {
    id: 'cluster-pulso-frequencia',
    clusterName: 'Pulso & Frequência // Cinética Dinâmica',
    series: 'Espinhaço',
    sourceDir: 'Pipeline Gigantera/Espinhaço/3. Out (Criativos 13, 03, 05)',
    concept: 'Ondulações de torque, atrito hidrodinâmico e aceleração contínua de biomotores.',
    items: [
      {
        id: 'out-13b',
        filename: 'criativo 13b.mp4',
        proposedTitle: 'Tração 13b',
        format: 'MP4 60fps',
        sizeApprox: '82.2 MB',
        type: 'master',
        notes: 'Sequência de deformação rápida sob campo de força',
        sourceDir: 'Espinhaço/3. Out'
      },
      {
        id: 'out-13c',
        filename: 'criativo 13c.mp4',
        proposedTitle: 'Torque Seco',
        format: 'MP4 60fps',
        sizeApprox: '82.3 MB',
        type: 'master',
        notes: 'Parada súbita com inércia viscoelástica',
        sourceDir: 'Espinhaço/3. Out'
      },
      {
        id: 'out-13d',
        filename: 'criativo 13d.mp4',
        proposedTitle: 'Envergadura',
        format: 'MP4 60fps',
        sizeApprox: '82.1 MB',
        type: 'master',
        notes: 'Extensão máxima dos filamentos de titânio',
        sourceDir: 'Espinhaço/3. Out'
      },
      {
        id: 'out-03-2',
        filename: 'criativo 03_2.mp4',
        proposedTitle: 'Fissura Linear',
        format: 'MP4',
        sizeApprox: '35.7 MB',
        type: 'study',
        notes: 'Micro-rupturas estruturais em tempo real',
        sourceDir: 'Espinhaço/3. Out'
      },
      {
        id: 'out-05-2',
        filename: 'criativo 05_2.mov',
        proposedTitle: 'Atrito Hidrodinâmico',
        format: 'MOV ProRes',
        sizeApprox: '172.5 MB',
        type: 'master',
        notes: 'Render não-comprimido da passagem do fluxo líquido',
        sourceDir: 'Espinhaço/3. Out'
      }
    ]
  },
  {
    id: 'cluster-litoral-erosao',
    clusterName: 'Litoral & Erosão // Broken Marvel Beach',
    series: 'Notalgia',
    sourceDir: 'Pipeline Gigantera/Notalgia/3. Out',
    concept: 'A memória geológica costeira em colapso: resíduo industrial e salitre sobre pedra basáltica.',
    items: [
      {
        id: 'out-broken-beach-mov',
        filename: 'Broken Marvel Beach.mov',
        proposedTitle: 'Praia Partida (Master)',
        format: 'MOV ProRes',
        sizeApprox: '142.0 MB',
        type: 'master',
        notes: 'Master da paisagem costeira desconstruída',
        sourceDir: 'Notalgia/3. Out'
      },
      {
        id: 'out-broken-beach-3',
        filename: 'Broken Marvel Beach 3.mp4',
        proposedTitle: 'Sedimento e Espuma',
        format: 'MP4',
        sizeApprox: '48.2 MB',
        type: 'study',
        notes: 'Estudo de quebra de onda sobre monolito mineral',
        sourceDir: 'Notalgia/3. Out'
      },
      {
        id: 'out-notalgia-cr01',
        filename: 'criativo 01.mov',
        proposedTitle: 'Farol Mudo // Horizonte',
        format: 'MOV',
        sizeApprox: '68.4 MB',
        type: 'master',
        notes: 'Plano contemplativo com névoa salina',
        sourceDir: 'Notalgia/3. Out'
      },
      {
        id: 'out-notalgia-cr04',
        filename: 'criativo 04.mp4',
        proposedTitle: 'Costa Rasa',
        format: 'MP4',
        sizeApprox: '38.6 MB',
        type: 'study',
        notes: 'Reflexos crepusculares em maré baixa',
        sourceDir: 'Notalgia/3. Out'
      }
    ]
  },
  {
    id: 'cluster-abissal-lidar',
    clusterName: 'Abissal & Lidar // TouchDesigner GPU',
    series: 'TD First View',
    sourceDir: 'Pipeline Gigantera/TD First View/exports/videos',
    concept: 'Nuvens de pontos em tempo real, varredura a laser e bioluminescência sintética calculada por GPU.',
    items: [
      {
        id: 'out-td-vortex',
        filename: 'sim_round_228_abyssal_particle_vortex_10s.mp4',
        proposedTitle: 'Vórtice Abissal',
        format: 'MP4 60fps',
        sizeApprox: '95.0 MB',
        type: 'simulation',
        notes: 'Loop de 10 segundos com 500.000 partículas GPU aceleradas',
        sourceDir: 'TD First View/exports/videos'
      },
      {
        id: 'out-td-sunbeam',
        filename: 'sim_round_156_monumental_obsidian_sunbeam.mp4',
        proposedTitle: 'Feixe de Obsidiana',
        format: 'MP4 60fps',
        sizeApprox: '110.4 MB',
        type: 'simulation',
        notes: 'Feixe de luz volumétrica atravessando prisma de pedra vulcânica',
        sourceDir: 'TD First View/exports/videos'
      },
      {
        id: 'out-td-lidar',
        filename: 'sim_round_205_hud_cyber_lidar_10s.mp4',
        proposedTitle: 'Varredura Lidar',
        format: 'MP4 60fps',
        sizeApprox: '88.1 MB',
        type: 'simulation',
        notes: 'Telemetria espacial e nuvem topográfica marinha',
        sourceDir: 'TD First View/exports/videos'
      },
      {
        id: 'out-td-biolum',
        filename: 'sim_round_105_bioluminescent_night_swarm.mp4',
        proposedTitle: 'Enxame Noturno',
        format: 'MP4 60fps',
        sizeApprox: '79.3 MB',
        type: 'simulation',
        notes: 'Pulsos luminescentes orgânicos inspirados na fauna das fossas abissais',
        sourceDir: 'TD First View/exports/videos'
      }
    ]
  },
  {
    id: 'cluster-memoria-ancestral',
    clusterName: 'Memória Ancestral // Vô David & Raízes',
    series: 'Origem',
    sourceDir: 'Pipeline Gigantera/Vo David & Fisherman',
    concept: 'A memória oral do pescador artesanal, monitores de tubo de raios catódicos e a fundação humana do pavilhão.',
    items: [
      {
        id: 'out-fish-v1',
        filename: 'fishermanv1.mp4',
        proposedTitle: 'O Velho e a Rede',
        format: 'MP4',
        sizeApprox: '24.5 MB',
        type: 'master',
        notes: 'Gesto ancestral do lançamento da tarrafa em câmara lenta',
        sourceDir: 'Fisherman'
      },
      {
        id: 'out-david-monitors',
        filename: 'recrie_de_forma_realista_com_202605031554.jpeg',
        proposedTitle: 'Monitor de Memória',
        format: 'JPEG Archival',
        sizeApprox: '3.2 MB',
        type: 'still',
        notes: 'Instalação de monitores industriais analógicos exibindo arquivo vivo de pesca',
        sourceDir: 'Vo David/1. In'
      },
      {
        id: 'out-fish-drink',
        filename: 'DRINK_ COPO_HORTELA.mp4',
        proposedTitle: 'Respiro de Terra',
        format: 'MP4',
        sizeApprox: '18.1 MB',
        type: 'study',
        notes: 'Pausa contemplativa entre as jornadas de mar',
        sourceDir: 'Fisherman'
      }
    ]
  }
];

