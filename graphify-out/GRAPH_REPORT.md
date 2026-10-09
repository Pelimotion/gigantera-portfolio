# Graph Report - gigantera  (2026-09-20)

## Corpus Check
- 47 files · ~727,181 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1514 nodes · 4433 edges · 70 communities (58 shown, 12 thin omitted)
- Extraction: 87% EXTRACTED · 13% INFERRED · 0% AMBIGUOUS · INFERRED: 569 edges (avg confidence: 0.63)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `34f90115`
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
- renderBackCover
- rotateOnAxis
- getNormal
- ARParticleSystem
- xe
- EspinhacoARApp
- translateOnAxis
- AuthManager
- s
- .renderBufferDirect
- interpolate_
- mh
- init
- setHSL
- Ka
- Espinhaço 3D Interactive Totem
- setIndex
- mf
- vite-env.d.ts
- getFrequencyData
- es
- triggerHaptic
- getFilmHeight
- _getShaderStage
- mt
- hf
- setVolume

## God Nodes (most connected - your core abstractions)
1. `i()` - 114 edges
2. `constructor()` - 78 edges
3. `r()` - 68 edges
4. `a()` - 59 edges
5. `n()` - 53 edges
6. `t()` - 50 edges
7. `copy()` - 43 edges
8. `al()` - 40 edges
9. `applyMatrix4()` - 40 edges
10. `n()` - 39 edges

## Surprising Connections (you probably didn't know these)
- `GalleryScene3D()` --indirect_call--> `w()`  [INFERRED]
  src/components/canvas/GalleryScene3D.tsx → assets/main-wGVznYgP.js
- `EspinhacoInteractive()` --indirect_call--> `w()`  [INFERRED]
  src/components/works/EspinhacoInteractive.tsx → assets/main-wGVznYgP.js
- `CDVisualizerField()` --indirect_call--> `i()`  [INFERRED]
  src/components/audio/CDVisualizerField.tsx → assets/main-wGVznYgP.js
- `GalleryScene3D()` --indirect_call--> `i()`  [INFERRED]
  src/components/canvas/GalleryScene3D.tsx → assets/main-wGVznYgP.js
- `MediaKitView()` --indirect_call--> `a()`  [INFERRED]
  src/components/layout/MediaKitView.tsx → assets/main-wGVznYgP.js

## Import Cycles
- None detected.

## Communities (70 total, 12 thin omitted)

### Community 0 - "meshopt_decoder.module-BRCnBxle.js"
Cohesion: 0.01
Nodes (4): bt(), rs(), setMorphAt(), Vs()

### Community 1 - "i"
Cohesion: 0.05
Nodes (78): update(), be(), he(), mf(), oe(), Ve(), _addNodeRef(), assignFinalMaterial() (+70 more)

### Community 2 - "copy"
Cohesion: 0.07
Nodes (41): Pr(), Yn(), addScaledVector(), angleTo(), ar(), at(), clamp(), clampPoint() (+33 more)

### Community 3 - "ol"
Cohesion: 0.09
Nodes (54): add(), applyBoneTransform(), attach(), calculateInverses(), clear(), clearViewOffset(), connect(), copy() (+46 more)

### Community 4 - "ar-BmjaQ8en.js"
Cohesion: 0.08
Nodes (60): an(), Au(), bl(), bu(), ci(), co(), Cp(), ct() (+52 more)

### Community 5 - "main-CZJ5Jm_E.js"
Cohesion: 0.13
Nodes (43): a(), af(), buildJewelCase(), buildWireframeCyberHand(), c(), Ca(), cf(), cn() (+35 more)

### Community 6 - "n"
Cohesion: 0.07
Nodes (45): am(), bindEvents(), bm(), Bp(), cm(), dc(), dispose(), dm() (+37 more)

### Community 7 - "getDependency"
Cohesion: 0.05
Nodes (51): bindGestures(), Ze(), _a(), Aa(), Cl(), clampScalar(), clone(), CreateClipsFromMorphTargetSequences() (+43 more)

### Community 8 - "f"
Cohesion: 0.05
Nodes (79): br(), gi(), ji(), jn(), oi(), Si(), Xr(), addVectors() (+71 more)

### Community 9 - "dependencies"
Cohesion: 0.04
Nodes (44): gsap, @gsap/react, lenis, lucide-react, motion, ogl, dependencies, gsap (+36 more)

### Community 10 - "B"
Cohesion: 0.05
Nodes (26): ap(), at(), ce(), ch(), fadeIn(), fadeOut(), getLockTarget(), glideTo() (+18 more)

### Community 11 - "gf"
Cohesion: 0.10
Nodes (7): bindGyroEvents(), initGyro(), k(), lockSpatialAnchor(), requestWakeLock(), startMedia(), updateOrientation()

### Community 12 - "ff"
Cohesion: 0.17
Nodes (16): Bf(), cr(), cu(), fr(), gf(), Gr(), hr(), kn() (+8 more)

### Community 13 - "configBridge.ts"
Cohesion: 0.18
Nodes (20): MediaKitView(), IntroSequence(), DEFAULT_SITE_CONFIG, getMergedArtistInfo(), getMergedArtworks(), getMergedCuratorialStatements(), getMergedPressKitAssets(), getMergedSiteConfig() (+12 more)

### Community 15 - "qd"
Cohesion: 0.09
Nodes (46): Ad(), ae(), as(), b(), bs(), cs(), D(), ds() (+38 more)

### Community 16 - "load"
Cohesion: 0.06
Nodes (34): te(), bind(), constructor(), findNode(), floor(), getBoneByName(), getDepthTexture(), getGripSpace() (+26 more)

### Community 17 - "App.tsx"
Cohesion: 0.15
Nodes (14): react, react, App(), ArchiveIndex(), MinimalBottomBar(), ArtistBioModal(), ControlsGuideModal(), rootElement (+6 more)

### Community 18 - "constructor"
Cohesion: 0.13
Nodes (32): Bd(), cl(), De(), Ei(), Fd(), fl(), Gd(), Hd() (+24 more)

### Community 19 - "useAppStore"
Cohesion: 0.11
Nodes (22): angle(), count(), CDJewelCasePOV(), CDVisualizerField(), CDVisualizerFieldProps, VisualizerTheme, AudioVisualizer(), AudioVisualizerProps (+14 more)

### Community 21 - "dot"
Cohesion: 0.09
Nodes (30): addEventListener(), addGroup(), conjugate(), Dn(), fromJSON(), getHSL(), init(), Ke() (+22 more)

### Community 22 - "compilerOptions"
Cohesion: 0.09
Nodes (21): DOM, DOM.Iterable, ES2022, src, compilerOptions, allowImportingTsExtensions, isolatedModules, jsx (+13 more)

### Community 23 - "applyMatrix4"
Cohesion: 0.05
Nodes (84): aa(), ac(), Ai(), al(), ao(), bc(), bi(), bo() (+76 more)

### Community 24 - "fromBufferAttribute"
Cohesion: 0.21
Nodes (12): determinantAffine(), extractBasis(), extractRotation(), fromArray(), getArea(), getColorAt(), identity(), length() (+4 more)

### Community 25 - "CDViewmodel3D"
Cohesion: 0.10
Nodes (16): Bt(), depth(), height(), Rt(), width(), CDViewmodel3D, createFloorTexture(), createGlassRoughnessTexture() (+8 more)

### Community 26 - "store.ts"
Cohesion: 0.16
Nodes (18): MobileBottomDock(), ModularGalleryLayout, SpeakerPlacement, ViewingSpotInfo, AppState, ARTWORKS_CATALOG, AUTHORIAL_TRACKS_CATALOG, PIPELINE_CLUSTERS (+10 more)

### Community 27 - "_fromTexture"
Cohesion: 0.18
Nodes (11): exitLock(), nextTrack(), playActiveTrack(), prevTrack(), renderBackCover(), selectTrackByIndex(), setActiveTrack(), setHoveredTrack() (+3 more)

### Community 28 - "W"
Cohesion: 0.13
Nodes (18): sn(), vr(), applyAxisAngle(), applyEuler(), applyQuaternion(), makeRotationX(), makeRotationY(), makeRotationZ() (+10 more)

### Community 29 - "CameraManager"
Cohesion: 0.15
Nodes (6): CameraManager, computeDeviceOrientationQuaternion(), _euler, _q0, _q1, _zee

### Community 30 - "pl"
Cohesion: 0.13
Nodes (16): al(), convertLinearToSRGB(), copyLinearToSRGB(), dt(), fs(), getParameter(), gt(), ht() (+8 more)

### Community 31 - "k"
Cohesion: 0.15
Nodes (17): _allocateTargets(), _applyGGXFilter(), _applyPMREM(), As(), _blur(), _blurPass(), _cleanup(), compileCubemapShader() (+9 more)

### Community 32 - "scale"
Cohesion: 0.29
Nodes (7): bindEvents(), hideLockScreen(), hidePermScreen(), lockProjection(), showPermScreen(), triggerHaptic(), unlockProjection()

### Community 33 - "computeBoundingSphere"
Cohesion: 0.17
Nodes (21): ac(), bc(), _c(), cc(), dc(), Ec(), hc(), ic() (+13 more)

### Community 34 - "hh"
Cohesion: 0.29
Nodes (7): buildGeometry(), buildMaterial(), checkInitialAccess(), constructor(), grantAccess(), render(), validatePasscode()

### Community 35 - "multiplyScalar"
Cohesion: 0.29
Nodes (7): init(), playCaseSnapSound(), playFootstepSound(), playFullDirectly(), playGlassPassSound(), playTactileHoverTick(), playTrackPreview()

### Community 36 - "main.ts"
Cohesion: 0.24
Nodes (6): AudioMetrics, AudioReactor, BIOMES, BiomeTheme, loadEspinhacoParticles(), sampleFromGLB()

### Community 38 - "toJSON"
Cohesion: 0.33
Nodes (6): animate(), init(), initThree(), onResize(), resetAnchor(), startExperience()

### Community 39 - "br"
Cohesion: 0.33
Nodes (6): ah(), Ih(), nh(), oh(), rh(), th()

### Community 40 - "g"
Cohesion: 0.22
Nodes (9): G(), manhattanLength(), normalizeSkinWeights(), setComponent(), setW(), setX(), setXYZW(), setY() (+1 more)

### Community 41 - "renderBackCover"
Cohesion: 0.18
Nodes (11): Ge(), getValueSize(), il(), InterpolantFactoryMethodBezier(), InterpolantFactoryMethodDiscrete(), InterpolantFactoryMethodLinear(), InterpolantFactoryMethodSmooth(), optimize() (+3 more)

### Community 42 - "rotateOnAxis"
Cohesion: 0.22
Nodes (9): B(), _binarySearch(), build(), dispose(), preloadParticles(), sample(), _sampleFace(), _sampleFaceIndex() (+1 more)

### Community 43 - "getNormal"
Cohesion: 0.40
Nodes (6): bh(), dr(), Er(), hn(), lr(), Tr()

### Community 45 - "xe"
Cohesion: 0.32
Nodes (8): Ba(), copySampleValue_(), evaluate(), getSettings_(), interpolate_(), intervalChanged_(), Ra(), za()

### Community 47 - "translateOnAxis"
Cohesion: 0.29
Nodes (7): Ar(), kr(), Or(), yr(), Yt(), compose(), makeRotationFromQuaternion()

### Community 49 - "s"
Cohesion: 0.43
Nodes (7): Id(), it(), lt(), ut(), yi(), H(), Xe()

### Community 50 - ".renderBufferDirect"
Cohesion: 0.33
Nodes (6): bn(), ea(), Gt(), nn(), rn(), vn()

### Community 51 - "interpolate_"
Cohesion: 0.29
Nodes (7): es(), getDataURL(), intersectObject(), intersectObjects(), ou(), resolveURL(), test()

### Community 52 - "mh"
Cohesion: 0.33
Nodes (6): ga(), ha(), ma(), setColorAt(), setMatrixAt(), toArray()

### Community 53 - "init"
Cohesion: 0.50
Nodes (4): dh(), lo(), Sc(), so()

### Community 54 - "setHSL"
Cohesion: 0.67
Nodes (3): getEnergy(), getFrequenciesDetail(), getFrequencyData()

### Community 55 - "Ka"
Cohesion: 0.67
Nodes (3): getFilmHeight(), getFocalLength(), setFocalLength()

### Community 56 - "Espinhaço 3D Interactive Totem"
Cohesion: 0.40
Nodes (5): Espinhaço 3D Interactive Totem, Session Handoff & Roadmap, Gigantera Architecture Guide, Wake-on-Interaction State Machine, WebAR Spatial Module

### Community 57 - "setIndex"
Cohesion: 0.67
Nodes (3): getFragmentShaderStage(), _getShaderStage(), getVertexShaderStage()

### Community 58 - "mf"
Cohesion: 0.67
Nodes (3): getNormalMatrix(), setFromMatrix4(), transpose()

### Community 59 - "vite-env.d.ts"
Cohesion: 0.50
Nodes (3): *.frag, *.glsl, *.vert

### Community 60 - "getFrequencyData"
Cohesion: 0.67
Nodes (3): getObjectById(), getObjectByName(), getObjectByProperty()

### Community 66 - "hf"
Cohesion: 0.67
Nodes (3): hf(), ll(), ot()

## Knowledge Gaps
- **74 isolated node(s):** `name`, `version`, `private`, `type`, `dev` (+69 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `GalleryScene3D()` connect `CDViewmodel3D` to `n`, `EspinhacoARApp`, `PlayerController`, `App.tsx`, `useAppStore`, `applyMatrix4`?**
  _High betweenness centrality (0.213) - this node is a cross-community bridge._
- **Why does `i()` connect `applyMatrix4` to `i`, `copy`, `ol`, `ar-BmjaQ8en.js`, `main-CZJ5Jm_E.js`, `n`, `getDependency`, `f`, `B`, `ff`, `qd`, `load`, `constructor`, `useAppStore`, `dot`, `CDViewmodel3D`, `pl`, `computeBoundingSphere`, `renderBackCover`, `.renderBufferDirect`?**
  _High betweenness centrality (0.121) - this node is a cross-community bridge._
- **Why does `CDVisualizerField()` connect `useAppStore` to `CDViewmodel3D`, `UIManager`, `applyMatrix4`?**
  _High betweenness centrality (0.084) - this node is a cross-community bridge._
- **Are the 44 inferred relationships involving `i()` (e.g. with `b()` and `buildWireframeCyberHand()`) actually correct?**
  _`i()` has 44 INFERRED edges - model-reasoned connections that need verification._
- **Are the 13 inferred relationships involving `constructor()` (e.g. with `b()` and `bi()`) actually correct?**
  _`constructor()` has 13 INFERRED edges - model-reasoned connections that need verification._
- **Are the 58 inferred relationships involving `r()` (e.g. with `main-wGVznYgP.js` and `ae()`) actually correct?**
  _`r()` has 58 INFERRED edges - model-reasoned connections that need verification._
- **Are the 50 inferred relationships involving `a()` (e.g. with `main-wGVznYgP.js` and `al()`) actually correct?**
  _`a()` has 50 INFERRED edges - model-reasoned connections that need verification._