# GIGANTERA — Arquitetura de Software & Engine 3D

> **Versão:** 2.0 (Outubro 2026)  
> **Domínio de Produção:** [https://gigantera.xyz](https://gigantera.xyz)  
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
│ - Vitrines de Vidro Físico PBR    │  │ - Pointer Lock / Rotação Mouse  │
│ - CD Jewel Case Viewmodel 3D      │  │ - Joystick Virtual Mobile       │
│ - Escultura Monumental Espinhaço  │  │ - Detecção de Colisão & Limites │
│ - Raycaster Físico Estrito        │  │ - Head Bobbing & Amortecimento  │
└───────────────────┬───────────────┘  └─────────────────────────────────┘
                    │
                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                      MOTOR DE ÁUDIO (soundEngine.ts)                   │
│  - Web Audio Context (Unlock seguro por primeiro gesto do usuário)     │
│  - BiquadFilterNode (Filtro DJ Passa-Baixa / Passa-Alta resonante)     │
│  - Catálogo de 17 Faixas Autorais com Live FFT Analyser Node           │
│  - Efeitos Sonoros Hápticos (Clique mecânico, tick de hover, vidro)    │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Coordenadas Espaciais e Setorização do Pavilhão

O espaço da galeria foi construído sobre o eixo longitudinal **Z** (onde valores positivos estão na entrada e negativos no fundo):

```
       [ENTRADA / CD]           [VÍDEOS]               [STILLS]           [SANTUÁRIO ESPINHAÇO]
  Z = +25.0m  ──>  +14.0m  ──>   -25.0m   ──>        -60.0m     ──>     -76.5m  ──>  -102.0m
  (Foyer do Álbum CD)   (Vitrines de Vídeo)   (Pranchetas Mate)    (Escultura 50k Partículas)
```

### Detalhamento dos Setores:
1. **Entrada & Sala de Escuta (`entrance-audio`, Z = +25m a +14m)**:
   - Pedestal de acrílico e concreto localizado em `x = 2.8, z = 18.0`.
   - Onde repousa o Álbum CD de 17 faixas autorais.
   - Paredes defletoras com caustics sutis e iluminação zenital.
2. **Corredor de Vídeo (`video`, Z = +14m a -25m)**:
   - Vitrines suspensas alternadas nas paredes esquerda e direita.
   - Texturas de vídeo dinâmicas sincronizadas via `<video>` elements com playback suave.
3. **Galeria de Stills (`still`, Z = -25m a -60m)**:
   - Obras fotográficas e renders 3D em papel mate giclée de alta densidade sob vidro museológico reflexivo.
   - Plaquinhas informativas 3D em latão/alumínio com identificação curatorial.
4. **Santuário do Espinhaço (`interactive`, Z = -60m a -102m)**:
   - Piso com degradê procedural de microcimento claro para ardósia/basalto mineral escuro.
   - Placa de identificação no umbral de transição ($Z \approx -52.2\text{m}$).
   - Escultura monumental de partículas vivas com mais de 8 metros de altura centrada em `Z = -76.5m`.

---

## 4. O Ciclo de Renderização (Dual Scene Architecture)

Em `GalleryScene3D.tsx`, o renderizador opera com técnica de **dupla cena** para evitar sobreposição de matrizes e z-fighting:

```ts
// Render Principal do Pavilhão
renderer.autoClear = false;
renderer.clear();
renderer.render(scene, camera);

// Se o modo Cinema de Inspeção de Obra estiver ativo:
if (currentCinemaArt && inspectionRig.visible) {
  renderer.clearDepth(); // Limpa profundidade mantendo o fundo desfocado
  renderer.render(inspectionScene, inspectionCam); // Renderiza a obra isolada em alta precisão
}
```

### Vantagens Desta Abordagem:
- **Inspeção sem Colisão com Cenário**: Quando o visitante clica para inspecionar uma obra, a peça entra no `inspectionScene` com câmera própria e controles de zoom (`targetInspZoom`) e rotação de exame, sem esbarrar nas paredes da galeria.
- **Transição Fluida**: O fundo continua visível com iluminação atenuada, mantendo o sentimento de presença espacial.

---

## 5. Gerenciamento de Estado (Zustand)

O estado em `src/core/store.ts` é desacoplado de componentes visuais, garantindo:
- **Zero re-renders desnecessários**: Componentes assinam apenas as chaves atômicas necessárias (ex.: `useAppStore(s => s.cinemaArtwork)`).
- **Consistência de Ações**:
  - `openCinema(art)`: Define a obra ativa, pausa ou chaveia áudio de vídeo, e reseta hovers residuais.
  - `closeCinema()`: Restaura áudio do CD se estava tocando, registra `lastActionCloseTime` (cooldown anti-clique fantasma) e limpa alvos da mira.
  - `warpToSector(sectorId)`: Desloca o jogador com glide cinemático para os pontos de observação predefinidos.

---

## 6. Práticas para Manutenção e Novos Módulos

Ao estender o sistema, respeite as seguintes diretrizes:
1. **Nunca use fallbacks de proximidade para abrir janelas modais ou cinema**: Toda interação por clique ou tecla `E` deve depender de colisão física e verificação de ângulo visual.
2. **Separe dados de lógica**: Novos dados curatoriais devem ser incluídos em `src/data/artworks.ts`. A engine lê dinamicamente as obras e projeta a geometria proceduralmente.
3. **Mantenha os limites de colisão**: Ao adicionar novas estruturas físicas na galeria, registre suas coordenadas e raios no array `playerController.obstacles` para manter a integridade arquitetural da locomoção.
