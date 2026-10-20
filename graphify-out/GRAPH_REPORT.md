# Graph Report - Gigantera Portfolio  (2026-10-20)

## Corpus Check
- 57 files · ~1,064,181 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 891 nodes · 1921 edges · 48 communities (42 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 10 edges (avg confidence: 0.74)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c8ebbefa`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- meshopt_decoder.module-BRCnBxle.js
- i
- copy
- ol
- ar-BmjaQ8en.js
- main-CZJ5Jm_E.js
- n
- getDependency
- f
- dependencies
- B
- gf
- ff
- configBridge.ts
- PlayerController
- qd
- load
- App.tsx
- constructor
- useAppStore
- SoundEngine
- dot
- compilerOptions
- applyMatrix4
- fromBufferAttribute
- CDViewmodel3D
- store.ts
- _fromTexture
- W
- CameraManager
- pl
- k
- scale
- computeBoundingSphere
- hh
- multiplyScalar
- main.ts
- UIManager
- toJSON
- br
- g
- ARParticleSystem
- EspinhacoARApp
- AuthManager
- Espinhaço 3D Interactive Totem
- vite-env.d.ts

## God Nodes (most connected - your core abstractions)
1. `PenumbraMidiHub` - 72 edges
2. `SoundEngine` - 39 edges
3. `useAppStore` - 37 edges
4. `showMacroToast()` - 36 edges
5. `setupEvents()` - 36 edges
6. `GalleryScene3D()` - 36 edges
7. `bootstrapApp()` - 32 edges
8. `PlayerController` - 29 edges
9. `renderMediaCards()` - 27 edges
10. `updateUI()` - 26 edges

## Surprising Connections (you probably didn't know these)
- `CDJewelCasePOV()` --references--> `react`  [EXTRACTED]
  src/components/audio/CDJewelCasePOV.tsx → package.json
- `ArchiveIndex()` --references--> `react`  [EXTRACTED]
  src/components/layout/ArchiveIndex.tsx → package.json
- `MinimalBottomBar()` --references--> `react`  [EXTRACTED]
  src/components/layout/MinimalBottomBar.tsx → package.json
- `Session Handoff & Roadmap` --tracks--> `Espinhaço 3D Interactive Totem`  [EXTRACTED]
  HANDOVER_NEXT_SESSION.md → README.md
- `WebAR Spatial Module` --projects--> `Espinhaço 3D Interactive Totem`  [EXTRACTED]
  ar/index.html → README.md

## Import Cycles
- None detected.

## Communities (48 total, 6 thin omitted)

### Community 0 - "meshopt_decoder.module-BRCnBxle.js"
Cohesion: 0.02
Nodes (88): activeDownloadJobs, allClips, allMattes, appState, audioCuePlayer, badgeBar, badgeBpm, badgeState (+80 more)

### Community 1 - "i"
Cohesion: 0.08
Nodes (4): onMove(), onUp(), PenumbraMidiHub, update()

### Community 2 - "copy"
Cohesion: 0.11
Nodes (27): adaptAutopilotToForcedState(), applyFxAutopilotPreset(), applyMacroPreset(), getActiveMacroPreset(), getStateColor(), loadPluginPreset(), refreshMacroStateBadges(), renderMacroPresetsMatrix() (+19 more)

### Community 3 - "ol"
Cohesion: 0.14
Nodes (26): bootstrapApp(), closeStudioLauncher(), HARS, initDockViewModes(), initLibrarySidebarSplitter(), initWorkspaceSplitter(), loadCustomClipsFromStorage(), loadMattesCatalog() (+18 more)

### Community 4 - "ar-BmjaQ8en.js"
Cohesion: 0.13
Nodes (23): centerClipPosition(), centerMattePosition(), getClipTonal(), getClipTransform(), getMatteConfig(), getMatteName(), nudgeClipPosition(), nudgeMattePosition() (+15 more)

### Community 5 - "main-CZJ5Jm_E.js"
Cohesion: 0.11
Nodes (23): drawBusToProgram(), drawDeformedMatte(), drawFittedImage(), drawProceduralMatteOverlay(), drawProceduralVignette(), drawSobelContours(), getAspectRatioDimensions(), getCanvasCompositeOp() (+15 more)

### Community 6 - "n"
Cohesion: 0.13
Nodes (22): applyTonalPreset(), assignMatteToLayer(), clearCurrentTargetMatte(), evolveMatteHarmoniously(), onLayerBlendChange(), onLayerMatteChange(), onLayerOpacityChange(), renderMattesCards() (+14 more)

### Community 7 - "getDependency"
Cohesion: 0.14
Nodes (21): advanceSmartQueue(), closeSettingsModal(), closeShortcutsModal(), closeTheater(), executeHardCut(), executeTakeCommit(), initKeyboardShortcuts(), initRichTooltips() (+13 more)

### Community 8 - "f"
Cohesion: 0.27
Nodes (17): clearMediaSearch(), getAllAvailableFolders(), getClipFolder(), isClipEligibleForAutopilot(), renderAutopilotFoldersSettings(), renderFolderPills(), renderLibraryBreadcrumbs(), renderMediaCards() (+9 more)

### Community 9 - "dependencies"
Cohesion: 0.04
Nodes (45): gsap, @gsap/react, lenis, lucide-react, motion, ogl, dependencies, gsap (+37 more)

### Community 10 - "B"
Cohesion: 0.12
Nodes (17): createDefault3DConfig(), generateProceduralSpine(), getActive3DConfig(), getPlexusPaletteColors(), getPlexusSpineCanvas(), loadSpinePoints(), renderSceneBiomorphicFlora(), renderSceneBlackHole() (+9 more)

### Community 11 - "gf"
Cohesion: 0.17
Nodes (15): attachPlayerErrorHandler(), createFxCardForLibrary(), createPresetCardForLibrary(), editFxParameters(), editPresetParameters(), openMatteLibraryForLayer(), openQuickInspector(), setGlobalMatteAsset() (+7 more)

### Community 12 - "ff"
Cohesion: 0.14
Nodes (13): 1.1 LOD (Level of Detail) Dinâmico nas Vitrines, 1.2 Frustum Culling e Pausa Inteligente de Vídeos, 1. Otimizações de Performance & Escalabilidade (Alta Prioridade), 2.1 Panning Binaural 3D com HRTF (PositionalAudio), 2.2 Reatividade de Frequências nas Luzes do Corredor, 2. Experiência Sonora & Áudio Espacial (Média Prioridade), 3.1 Pipeline de Pós-Processamento Opcional, 3.2 Iluminação Zenital Dinâmica (Ciclo Dia / Noite) (+5 more)

### Community 13 - "configBridge.ts"
Cohesion: 0.20
Nodes (18): MediaKitView(), DEFAULT_SITE_CONFIG, getMergedArtistInfo(), getMergedArtworks(), getMergedCuratorialStatements(), getMergedPressKitAssets(), GiganteraCustomConfig, loadCustomConfig() (+10 more)

### Community 14 - "PlayerController"
Cohesion: 0.17
Nodes (13): centerLayerPosition(), editClipTonalParameters(), editMatteParameters(), initTimelineCanvasInteraction(), nudgeLayerPosition(), openClipTransformModal(), openPreviewClipTransform(), openStudioInspector() (+5 more)

### Community 15 - "qd"
Cohesion: 0.28
Nodes (13): createMediaCardElement(), cueNextFromQueue(), cueQueuedClipByIndex(), initWebSocket(), routeClipToBus(), routeClipToLayer(), setDefaultFitMode(), swapBuses() (+5 more)

### Community 16 - "load"
Cohesion: 0.17
Nodes (11): 1. O Catálogo de Obras (`src/data/artworks.ts`), 2. Como Adicionar ou Modificar uma Obra no Acervo, 3. O Motor Expográfico Procedural (`src/core/modularGallery.ts`), 4. As Vitrines Físicas Museológicas (PBR Glass), 5. A Escultura Interativa Monumental: "Espinhaço", Diretriz Curatorial e Editorial:, Especificações Técnicas:, Estrutura do Tipo `Artwork` (`src/types/art.ts`): (+3 more)

### Community 17 - "App.tsx"
Cohesion: 0.13
Nodes (20): react, react, App(), CDJewelCasePOV(), ArchiveIndex(), GalleryHeader(), MinimalBottomBar(), MobileBottomDock() (+12 more)

### Community 18 - "constructor"
Cohesion: 0.21
Nodes (11): AUDIO_TRACKS, downloadBuffer(), fs, https, LOCAL_WORKS_DIR, path, run(), STILLS (+3 more)

### Community 19 - "useAppStore"
Cohesion: 0.15
Nodes (11): CDVisualizerField(), CDVisualizerFieldProps, VisualizerTheme, DJFilterKnob(), DJFilterKnobProps, FloatingMiniPlayer(), FloatingMiniPlayerProps, BIOMES (+3 more)

### Community 21 - "dot"
Cohesion: 0.18
Nodes (10): 1. Visão Geral do Sistema de Locomoção & Câmera, 2. Máquina de Estados da Câmera (Desktop), 3. Matemática de Rotação e Movimento (PlayerController), 4. Pipeline de Raycasting & Interação Física, 5. Mobile & Touch Engine (Padrão AAA), 6. Como Adicionar Novos Objetos Interativos com Segurança, Distâncias Máximas de Interação:, GIGANTERA — Sistema de Controles, Câmera & Interação (+2 more)

### Community 22 - "compilerOptions"
Cohesion: 0.09
Nodes (21): DOM, DOM.Iterable, ES2022, src, compilerOptions, allowImportingTsExtensions, isolatedModules, jsx (+13 more)

### Community 23 - "applyMatrix4"
Cohesion: 0.24
Nodes (11): applyBadTv(), applyFXEngine(), applyModulationMatrix(), applyPixelSorter(), applyPixelStretch(), applyRxxr(), getExpandedBuffer(), getFxBuffers() (+3 more)

### Community 24 - "fromBufferAttribute"
Cohesion: 0.25
Nodes (11): checkSavedDirectoryHandle(), createDirectStreamClip(), extractYouTubeId(), getClipSource(), ingestStreamMedia(), isYouTubeUrl(), normalizeMediaFilename(), PenumbraIDB (+3 more)

### Community 25 - "CDViewmodel3D"
Cohesion: 0.05
Nodes (19): CDViewmodel3D, createFloorNormalTexture(), createFloorTexture(), createGlassRoughnessTexture(), createPedestalFurnitureTexture(), createPedestalPlaqueTexture(), createPlaqueTexture(), createSanctuaryFloorTexture() (+11 more)

### Community 26 - "store.ts"
Cohesion: 0.16
Nodes (19): AudioVisualizerProps, computeModularGalleryLayout(), getGalleryOrderedArtworks(), ModularGalleryLayout, SpeakerPlacement, AppState, ARTWORKS_CATALOG, AUTHORIAL_TRACKS_CATALOG (+11 more)

### Community 27 - "_fromTexture"
Cohesion: 0.20
Nodes (9): 1. Visão Geral da Pilha Tecnológica, 2. Diagrama de Camadas da Aplicação, 3. Coordenadas Espaciais e Setorização do Pavilhão, 4. O Ciclo de Renderização (Dual Scene Architecture), 5. Gerenciamento de Estado (Zustand), 6. Práticas para Manutenção e Novos Módulos, Detalhamento dos Setores:, GIGANTERA — Arquitetura de Software & Engine 3D (+1 more)

### Community 28 - "W"
Cohesion: 0.22
Nodes (8): 1. Comandos de Operação e Ciclo de Vida, 2. Infraestrutura de Hospedagem & Vercel Edge, 3. Arquitetura de CDN & Edge Storage (Bunny.net), 4. Variáveis de Ambiente (`.env`), 5. Rotina Recomendada para Novas Releases / Atualizações, Arquivo `vercel.json`:, GIGANTERA — Operações, Infraestrutura & Deploy Contínuo, Script de Sincronização Automática (`scripts/sync_bunny_cdn.cjs`):

### Community 29 - "CameraManager"
Cohesion: 0.15
Nodes (6): CameraManager, computeDeviceOrientationQuaternion(), _euler, _q0, _q1, _zee

### Community 30 - "pl"
Cohesion: 0.25
Nodes (7): 1. Arquitetura Geral do Motor de Som, 2. Destravamento Seguro de Áudio (AudioContext Autoplay Policy), 3. Catálogo das 17 Faixas Autorais, 4. O Estojo do CD 3D (`CDViewmodel3D.ts`), 5. Filtro DJ DSP em Tempo Real (Low-Pass / High-Pass), 6. Visualizadores de Espectro FFT, GIGANTERA — Sistema de Áudio, DSP & Álbum CD 3D

### Community 31 - "k"
Cohesion: 0.32
Nodes (8): handleLocalAudioFileUpload(), initWebAudioAnalyser(), PenumbraWebAudio, playOnlineTestTrack(), setAudioSource(), startWebAudioVisualizerLoop(), switchAudioSource(), updateAudioSourceUI()

### Community 33 - "computeBoundingSphere"
Cohesion: 0.29
Nodes (6): buildCommand, framework, headers, outputDirectory, redirects, rewrites

### Community 34 - "hh"
Cohesion: 0.50
Nodes (5): cdnAssetUrl(), createMatteCardForLibrary(), escapeHTML(), getMatteThumbUrl(), safeManifestPath()

### Community 35 - "multiplyScalar"
Cohesion: 0.40
Nodes (5): handleTapTempo(), multiplyBpm(), nudgeBpm(), setManualBpm(), updateAllBpmDisplays()

### Community 36 - "main.ts"
Cohesion: 0.26
Nodes (6): AudioMetrics, AudioReactor, BIOMES, BiomeTheme, loadEspinhacoParticles(), sampleFromGLB()

### Community 37 - "UIManager"
Cohesion: 0.21
Nodes (3): UIEventCallbacks, UIManager, AudioVisualizer()

### Community 38 - "toJSON"
Cohesion: 0.67
Nodes (3): clearPreferencesSearch(), filterPreferencesSearch(), setSettingsTab()

### Community 39 - "br"
Cohesion: 0.67
Nodes (3): setMasterLockedMatte(), toggleMasterLockedMatte(), updateMasterLockedMatteUI()

### Community 56 - "Espinhaço 3D Interactive Totem"
Cohesion: 0.40
Nodes (5): Espinhaço 3D Interactive Totem, Session Handoff & Roadmap, Gigantera Architecture Guide, Wake-on-Interaction State Machine, WebAR Spatial Module

### Community 59 - "vite-env.d.ts"
Cohesion: 0.50
Nodes (3): *.frag, *.glsl, *.vert

## Knowledge Gaps
- **214 isolated node(s):** `name`, `version`, `private`, `type`, `description` (+209 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `GalleryScene3D()` connect `CDViewmodel3D` to `App.tsx`, `store.ts`, `EspinhacoARApp`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._
- **Why does `EspinhacoARApp` connect `EspinhacoARApp` to `main.ts`, `UIManager`, `ARParticleSystem`, `AuthManager`, `CameraManager`?**
  _High betweenness centrality (0.034) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `App.tsx`?**
  _High betweenness centrality (0.032) - this node is a cross-community bridge._
- **What connects `name`, `version`, `private` to the rest of the system?**
  _214 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `meshopt_decoder.module-BRCnBxle.js` be split into smaller, more focused modules?**
  _Cohesion score 0.017857142857142856 - nodes in this community are weakly interconnected._
- **Should `i` be split into smaller, more focused modules?**
  _Cohesion score 0.07684210526315789 - nodes in this community are weakly interconnected._
- **Should `copy` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._