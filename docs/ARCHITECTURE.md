# GIGANTERA — Arquitetura de Software & Engine 3D

> **Versão:** 3.0 (Outubro 2026)  
> **Domínio de Produção:** [https://gigantera.xyz](https://gigantera.xyz)  
> **CDN Pull Zone:** [https://gigantera-penumbra.b-cdn.net/gigantera-portfolio](https://gigantera-penumbra.b-cdn.net/gigantera-portfolio)  
> **Autoria:** Felipe Conceição ([Pelimotion](https://pelimotion.art))

---

## 1. Visão Geral da Pilha Tecnológica

| Camada | Tecnologia | Propósito |
| :--- | :--- | :--- |
| **Framework Core** | **React 19** | Gerenciamento de ciclo de vida da interface, HUDs e docks responsivos |
| **Renderizador 3D** | **Three.js** | Cenografia WebGL, shaders procedurais, iluminação física e partículas |
| **Linguagem** | **TypeScript 5.8** | Tipagem estrita com 0 erros de compilação em modo restrito |
| **Gerenciamento de Estado** | **Zustand 5** | Store reativa global desacoplada com seletores de performance |
| **Motor de Áudio** | **Tone.js + Web Audio API** | DSP de filtros DJ, espacialização estéreo e streaming em tempo real |
| **Animação & Easing** | **GSAP (GreenSock)** | Interpolações de transição de câmera, dobras e rotação de vitrines |
| **Bundler & Tooling** | **Vite 8** | Compilação de produção com code splitting e lazy loading modular |
| **Edge Storage & CDN** | **Bunny.net (Edge)** | Pull Zone com HTTP 206 (Byte-Range) para vídeos e áudio sem buffer |
| **Hospedagem & Deploy** | **Vercel** | CI/CD instantâneo atrelado à branch `main` do repositório GitHub |

---

## 2. Diagrama de Camadas da Aplicação

```
┌────────────────────────────────────────────────────────────────────────┐
│                        INTERFACES HUD / DOM (React 19)                 │
│  [GalleryHeader] [MissionHUD] [FloatingMiniPlayer] [MinimalBottomBar]  │
│  [MediaKitView]  [ControlsGuideModal] [ArtistBioModal] [ArchiveIndex]  │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ Assina seletores
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                     ESTADO GLOBAL (Zustand: store.ts)                  │
│  - cameraCurrentZ / targetZ       - cinemaArtwork (inspeção)           │
│  - activeSectorId                 - isHoldingCD / cdFlipped            │
│  - hoveredArtwork / hoveredTarget - currentAudioTrack / isAudioPlaying │
│  - isPointerLocked                - viewMode ('spatial' | 'archive')   │
└───────────────────▲────────────────────────────────▲───────────────────┘
                    │ Atualiza                       │ Despacha eventos
                    │ coordenadas                    │ e atalhos
┌───────────────────┴───────────────┐  ┌─────────────┴───────────────────┐
│     GalleryScene3D (Three.js)     │  │  PlayerController (Câmera FPS)  │
│ - Pavilhão Brutalista Modular     │  │ - Vetores de velocidade e atrito│
│ - 10 Vitrines de Vidro Físico PBR │  │ - Pointer Lock / Rotação Mouse  │
│ - Projeção Monumental de Fundo    │  │ - Joystick Virtual Mobile       │
│ - Escultura em Prata + Basalto    │  │ - Detecção de Colisão & Limites │
│ - Raycaster Físico Estrito        │  │ - Head Bobbing & Amortecimento  │
└───────────────────┬───────────────┘  └─────────────────────────────────┘
                    │
                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                      MOTOR DE ÁUDIO (soundEngine.ts)                   │
│  - Web Audio Context (Unlock seguro por primeiro gesto do usuário)     │
│  - BiquadFilterNode (Filtro DJ Passa-Baixa / Passa-Alta resonante)     │
│  - Catálogo de 17 Faixas Autorais com Live FFT Analyser Node           │
│  - Drone Acústico Proporcional ao WakeFactor do Espinhaço              │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Coordenadas Espaciais e Setorização do Pavilhão

O espaço do pavilhão foi mapeado longitudinalmente sobre o eixo **Z** (valores positivos na entrada e negativos em direção ao Santuário):

```
       [FOYER / CD]              [CORREDOR 10 VITRINES]             [UMBRAL]        [SANTUÁRIO]        [PROJEÇÃO FUNDO]
  Z = +22.0m  ──>  +14.0m   ──>    Z = +12.0m  ──>  -49.2m    ──>   Z = -52.0m  ──>  Z = -76.5m   ──>   Z = -93.94m
   (Pedestal do CD 3D)           (10 Obras Espaçadas a 6.8m)       (Placa Bronze)   (Espinha Prata)    (Painel 25.2m x 17m)
```

### Detalhamento dos Setores:
1. **Foyer de Entrada & Sala de Escuta (`entrance-audio`, Z = +22m a +14m)**:
   - Pedestal ripado canelado com Estação de CD Jewel Case 3D (17 faixas autorais) em `x = 2.8, z = 18.0`.
   - Paredes defletoras arquitetônicas (*baffles*) filtrando a luz zenital.
2. **Setor 1 — Tetrápode (`tetrapode`, Z = +12.0m a -1.6m)**:
   - Vitrines 01 e 02: *Concreto, pixel e tecnologia morta.*
3. **Setor 2 — No$talgia (`nostalgia`, Z = -1.6m a -8.4m)**:
   - Vitrine 03: *Monólito costeiro e herança caiçara.*
4. **Setor 3 — Espinhaço (`espinhaco`, Z = -8.4m a -35.6m)**:
   - Vitrines 04, 05, 06, 07 e 08: *Espinha, tainha e aço (estudos em tecido, mullets, matriz e TV).*
5. **Setor 4 — Cine Itajaí & Aparecida (`cine-itajai-aparecida`, Z = -35.6m a -49.2m)**:
   - Vitrines 09 e 10: *Molhes, interferências e rogai por nós brasileiros.*
6. **Umbral & Santuário do Espinhaço (`interactive`, Z = -52.0m a -93.94m)**:
   - Degradê de piso para basalto escuro com placa comemorativa em `Z = -52.2m`.
   - Escultura monumental em prata sólida com plinto de basalto em `Z = -76.5m`.
   - Instalação de projeção monumental de 25.2m cobrindo a parede de fundo em `Z = -93.94m`.

---

## 4. O Ciclo de Renderização e Culling Inteligente

Em `GalleryScene3D.tsx`, o loop de renderização executa otimizações estritas para sustentar 60 FPS estáveis mesmo em dispositivos intermediários:

### Otimizações no Render Loop:
1. **Distance-Based Video Culling**:
   - Elementos `<video>` das vitrines e da projeção monumental de fundo têm seu playback pausado quando a câmera se afasta além do raio de relevância acústica/visual (`camera.position.z > -20.0m` para a projeção de fundo).
2. **Refletor Planar com Resolução Adaptativa**:
   - O espelho d'água mineral do piso (`floorReflector`) utiliza textura de resolução reduzida (512px) associada a `roughnessMap`, gerando reflexo aveludado sem o custo proibitivo de raytracing nativo.
3. **Detecção Raycast Estrita (Zero False-Positives)**:
   - O raycaster filtra apenas camadas interativas registradas nos arrays de colisão (`interactiveMeshes`). Clicar no vazio ou em pisos/tetos jamais aciona modais ou chamadas de API.
