# Graph Report - gigantera  (2026-09-20)

## Corpus Check
- 47 files · ~726,654 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1514 nodes · 4432 edges · 67 communities (57 shown, 10 thin omitted)
- Extraction: 87% EXTRACTED · 13% INFERRED · 0% AMBIGUOUS · INFERRED: 568 edges (avg confidence: 0.63)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e60afea1`
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

## God Nodes (most connected - your core abstractions)
1. `i()` - 113 edges
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
  src/components/canvas/GalleryScene3D.tsx → assets/main-B6HRtxgf.js
- `EspinhacoInteractive()` --indirect_call--> `w()`  [INFERRED]
  src/components/works/EspinhacoInteractive.tsx → assets/main-B6HRtxgf.js
- `CDVisualizerField()` --indirect_call--> `i()`  [INFERRED]
  src/components/audio/CDVisualizerField.tsx → assets/main-B6HRtxgf.js
- `MediaKitView()` --indirect_call--> `a()`  [INFERRED]
  src/components/layout/MediaKitView.tsx → assets/main-B6HRtxgf.js
- `CDVisualizerField()` --indirect_call--> `width()`  [INFERRED]
  src/components/audio/CDVisualizerField.tsx → assets/three.module-ovOH-70_.js

## Import Cycles
- None detected.

## Communities (67 total, 10 thin omitted)

### Community 0 - "meshopt_decoder.module-BRCnBxle.js"
Cohesion: 0.01
Nodes (4): bt(), rs(), setMorphAt(), Vs()

### Community 1 - "i"
Cohesion: 0.05
Nodes (78): update(), be(), he(), mf(), oe(), Ve(), _addNodeRef(), assignFinalMaterial() (+70 more)

### Community 2 - "copy"
Cohesion: 0.06
Nodes (57): jn(), Pr(), addScaledVector(), angleTo(), at(), clampLength(), clampPoint(), closestPointToPoint() (+49 more)

### Community 3 - "ol"
Cohesion: 0.09
Nodes (54): add(), attach(), calculateInverses(), clear(), clearViewOffset(), connect(), copy(), decompose() (+46 more)

### Community 4 - "ar-BmjaQ8en.js"
Cohesion: 0.09
Nodes (53): an(), Au(), bl(), bu(), ci(), Cp(), cu(), du() (+45 more)

### Community 5 - "main-CZJ5Jm_E.js"
Cohesion: 0.10
Nodes (51): ae(), af(), at(), b(), buildJewelCase(), buildWireframeCyberHand(), c(), Ca() (+43 more)

### Community 6 - "n"
Cohesion: 0.05
Nodes (23): ap(), ce(), ch(), fadeIn(), fadeOut(), getLockTarget(), glideTo(), O() (+15 more)

### Community 7 - "getDependency"
Cohesion: 0.06
Nodes (46): bindGestures(), br(), Ze(), _a(), Aa(), center(), clone(), CreateClipsFromMorphTargetSequences() (+38 more)

### Community 8 - "f"
Cohesion: 0.09
Nodes (46): gi(), ji(), oi(), Si(), Xr(), applyBoneTransform(), applyMatrix3(), applyMatrix4() (+38 more)

### Community 9 - "dependencies"
Cohesion: 0.04
Nodes (44): gsap, @gsap/react, lenis, lucide-react, motion, ogl, dependencies, gsap (+36 more)

### Community 10 - "B"
Cohesion: 0.07
Nodes (45): ac(), Ai(), al(), ao(), bc(), bo(), dc(), Di() (+37 more)

### Community 11 - "gf"
Cohesion: 0.07
Nodes (27): animate(), bindEvents(), bindGyroEvents(), buildGeometry(), buildMaterial(), checkInitialAccess(), constructor(), grantAccess() (+19 more)

### Community 12 - "ff"
Cohesion: 0.10
Nodes (35): am(), bindEvents(), bm(), Bp(), cm(), dispose(), em(), f() (+27 more)

### Community 13 - "configBridge.ts"
Cohesion: 0.18
Nodes (20): MediaKitView(), IntroSequence(), DEFAULT_SITE_CONFIG, getMergedArtistInfo(), getMergedArtworks(), getMergedCuratorialStatements(), getMergedPressKitAssets(), getMergedSiteConfig() (+12 more)

### Community 15 - "qd"
Cohesion: 0.11
Nodes (38): a(), Ad(), as(), bs(), cs(), ds(), es(), Fd() (+30 more)

### Community 16 - "load"
Cohesion: 0.06
Nodes (35): te(), bind(), constructor(), determinantAffine(), findNode(), floor(), getBoneByName(), getDepthTexture() (+27 more)

### Community 17 - "App.tsx"
Cohesion: 0.47
Nodes (5): cleanHex(), ColorToken, createToken(), hexToRgb(), TOKENS

### Community 18 - "constructor"
Cohesion: 0.11
Nodes (36): Bd(), bi(), dt(), ec(), Fc(), fm(), ft(), Gd() (+28 more)

### Community 19 - "useAppStore"
Cohesion: 0.10
Nodes (29): angle(), count(), react, react, App(), CDJewelCasePOV(), CDVisualizerField(), CDVisualizerFieldProps (+21 more)

### Community 20 - "SoundEngine"
Cohesion: 0.12
Nodes (3): DEFAULT_CONFIG, PlayerControlsConfig, SoundEngine

### Community 21 - "dot"
Cohesion: 0.07
Nodes (35): addEventListener(), addGroup(), clamp(), clampScalar(), conjugate(), Dn(), fromJSON(), getHex() (+27 more)

### Community 22 - "compilerOptions"
Cohesion: 0.09
Nodes (21): DOM, DOM.Iterable, ES2022, src, compilerOptions, allowImportingTsExtensions, isolatedModules, jsx (+13 more)

### Community 23 - "applyMatrix4"
Cohesion: 0.11
Nodes (29): aa(), Cc(), cn(), da(), dp(), ep(), fa(), fn() (+21 more)

### Community 24 - "fromBufferAttribute"
Cohesion: 0.12
Nodes (22): Yn(), addVectors(), ar(), crossVectors(), expandByScalar(), extractBasis(), fromArray(), getBoundingBox() (+14 more)

### Community 25 - "CDViewmodel3D"
Cohesion: 0.10
Nodes (16): Bt(), depth(), height(), Rt(), width(), CDViewmodel3D, createFloorTexture(), createGlassRoughnessTexture() (+8 more)

### Community 26 - "store.ts"
Cohesion: 0.16
Nodes (18): MobileBottomDock(), ModularGalleryLayout, SpeakerPlacement, ViewingSpotInfo, AppState, ARTWORKS_CATALOG, AUTHORIAL_TRACKS_CATALOG, PIPELINE_CLUSTERS (+10 more)

### Community 27 - "_fromTexture"
Cohesion: 0.19
Nodes (19): cl(), De(), dl(), Ei(), fl(), ia(), jo(), ml() (+11 more)

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
Cohesion: 0.17
Nodes (16): Bf(), cr(), dr(), Er(), fr(), gf(), hr(), kn() (+8 more)

### Community 33 - "computeBoundingSphere"
Cohesion: 0.25
Nodes (16): bc(), _c(), cc(), dc(), hc(), ic(), lc(), mc() (+8 more)

### Community 34 - "hh"
Cohesion: 0.15
Nodes (15): ah(), bh(), bn(), hn(), Ih(), Ld(), mh(), nh() (+7 more)

### Community 35 - "multiplyScalar"
Cohesion: 0.15
Nodes (12): Cl(), dl(), Gl(), jl(), kl(), ml(), Nl(), pl() (+4 more)

### Community 36 - "main.ts"
Cohesion: 0.24
Nodes (6): AudioMetrics, AudioReactor, BIOMES, BiomeTheme, loadEspinhacoParticles(), sampleFromGLB()

### Community 38 - "toJSON"
Cohesion: 0.20
Nodes (11): co(), ct(), df(), dh(), hf(), ll(), lo(), ot() (+3 more)

### Community 39 - "br"
Cohesion: 0.18
Nodes (11): exitLock(), nextTrack(), playActiveTrack(), prevTrack(), renderBackCover(), selectTrackByIndex(), setActiveTrack(), setHoveredTrack() (+3 more)

### Community 40 - "g"
Cohesion: 0.20
Nodes (10): G(), manhattanLength(), normalizeSkinWeights(), setComponent(), setW(), setX(), setXY(), setXYZW() (+2 more)

### Community 41 - "renderBackCover"
Cohesion: 0.20
Nodes (10): Ge(), getValueSize(), il(), InterpolantFactoryMethodBezier(), InterpolantFactoryMethodDiscrete(), InterpolantFactoryMethodLinear(), InterpolantFactoryMethodSmooth(), tl() (+2 more)

### Community 42 - "rotateOnAxis"
Cohesion: 0.22
Nodes (9): B(), _binarySearch(), build(), dispose(), preloadParticles(), sample(), _sampleFace(), _sampleFaceIndex() (+1 more)

### Community 43 - "getNormal"
Cohesion: 0.29
Nodes (8): ea(), en(), Gt(), nn(), qt(), rn(), tn(), vn()

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
Cohesion: 0.29
Nodes (7): init(), playCaseSnapSound(), playFootstepSound(), playFullDirectly(), playGlassPassSound(), playTactileHoverTick(), playTrackPreview()

### Community 51 - "interpolate_"
Cohesion: 0.29
Nodes (7): es(), getDataURL(), intersectObject(), intersectObjects(), ou(), resolveURL(), test()

### Community 52 - "mh"
Cohesion: 0.40
Nodes (5): ac(), Ec(), jc(), kc(), tc()

### Community 53 - "init"
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

## Knowledge Gaps
- **74 isolated node(s):** `name`, `version`, `private`, `type`, `dev` (+69 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `GalleryScene3D()` connect `CDViewmodel3D` to `useAppStore`, `ff`, `EspinhacoARApp`, `PlayerController`?**
  _High betweenness centrality (0.182) - this node is a cross-community bridge._
- **Why does `CDVisualizerField()` connect `useAppStore` to `CDViewmodel3D`, `UIManager`, `applyMatrix4`?**
  _High betweenness centrality (0.101) - this node is a cross-community bridge._
- **Why does `useAppStore` connect `useAppStore` to `CDViewmodel3D`, `store.ts`, `SoundEngine`, `configBridge.ts`?**
  _High betweenness centrality (0.085) - this node is a cross-community bridge._
- **Are the 43 inferred relationships involving `i()` (e.g. with `b()` and `buildWireframeCyberHand()`) actually correct?**
  _`i()` has 43 INFERRED edges - model-reasoned connections that need verification._
- **Are the 13 inferred relationships involving `constructor()` (e.g. with `b()` and `bi()`) actually correct?**
  _`constructor()` has 13 INFERRED edges - model-reasoned connections that need verification._
- **Are the 58 inferred relationships involving `r()` (e.g. with `main-B6HRtxgf.js` and `ae()`) actually correct?**
  _`r()` has 58 INFERRED edges - model-reasoned connections that need verification._
- **Are the 50 inferred relationships involving `a()` (e.g. with `main-B6HRtxgf.js` and `al()`) actually correct?**
  _`a()` has 50 INFERRED edges - model-reasoned connections that need verification._