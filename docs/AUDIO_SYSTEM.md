# GIGANTERA — Sistema de Áudio, DSP & Álbum CD 3D

> **Versão:** 2.0 (Outubro 2026)  
> **Arquivos Fonte:** `src/core/soundEngine.ts`, `src/components/canvas/CDViewmodel3D.ts`, `src/components/audio/CDVisualizerField.tsx`, `src/data/artworks.ts`

---

## 1. Arquitetura Geral do Motor de Som

O sistema de som do Gigantera é alimentado por uma cadeia híbrida utilizando a **Web Audio API nativa** em conjunto com recursos do **Tone.js**. A arquitetura foi desenhada para oferecer reprodução de áudio contínua e sem atritos, efeitos táteis de feedback sonoro (SFX sintetizados) e processamento de sinal em tempo real (DSP).

```
                      ┌────────────────────────────────────────┐
                      │        AudioContext (Navegador)        │
                      └──────────────────┬─────────────────────┘
                                         │
                   ┌─────────────────────┴─────────────────────┐
                   ▼                                           ▼
      ┌─────────────────────────┐                 ┌─────────────────────────┐
      │   Sintetizador de SFX   │                 │     Faixa Musical       │
      │  - playGlassPassSound   │                 │   (Streaming Bunny CDN) │
      │  - playTactileHoverTick │                 └────────────┬────────────┘
      │  - playDiscreteClick    │                              │
      └────────────┬────────────┘                              ▼
                   │                              ┌─────────────────────────┐
                   │                              │  BiquadFilter (DJ DSP)  │
                   │                              │  Low-pass / High-pass   │
                   │                              └────────────┬────────────┘
                   │                                           │
                   │                              ┌────────────┴────────────┐
                   │                              │   AnalyserNode (FFT)    │
                   │                              │   64 a 128 frequências  │
                   │                              └────────────┬────────────┘
                   │                                           │
                   └─────────────────────┬─────────────────────┘
                                         ▼
                          ┌─────────────────────────────┐
                          │      Master GainNode        │
                          │   (Volume & Mudo Global)    │
                          └──────────────┬──────────────┘
                                         ▼
                               [Saída: Alto-falantes]
```

---

## 2. Destravamento Seguro de Áudio (AudioContext Autoplay Policy)

Navegadores modernos bloqueiam a reprodução de áudio antes de uma interação deliberada do usuário.
- O método `soundEngine.unlockAudio()` é chamado no primeiro clique, toque ou tecla pressionada.
- Se o contexto estiver em estado `'suspended'`, ele é retomado assincronamente: `context.resume()`.
- O áudio do álbum começa a tocar suavemente no Foyer com fade-in orgânico.

---

## 3. Catálogo das 17 Faixas Autorais

As 17 faixas do álbum físico repousam no pedestal da entrada e são transmitidas via **Bunny.net Edge Storage** com suporte total a **HTTP 206 (Partial Content / Byte-Range Requests)**:

| # | Título | Minutagem | Estilo / Textura Sonora |
| :---: | :--- | :---: | :--- |
| **01** | *Entrada & Ar* | 02:44 | Drone atmosférico, caustics subgraves |
| **02** | *Basalto Mineral* | 03:12 | Rítmica minimalista, percussão metálica |
| **03** | *Espessura do Vácuo* | 03:48 | Texturas modulares analógicas, sub-bass |
| **04** | *Fissuras de Quartzo* | 02:56 | Glitch sonoro fino, estéreo ampliado |
| **05** | *Cimento & Névoa* | 04:10 | Ambient dub denso, reverberação de galeria |
| **06** | *Espinhaço* | 03:35 | Tema motriz da escultura monumental |
| **07** | *Horizonte de Chumbo*| 03:22 | Textura industrial, ressonâncias graves |
| **08** | *Reflexo Fosco* | 02:50 | Piano processado, fitas degradadas |
| **09** | *Matriz Brutalista* | 03:40 | Pulsação rítmica sutil, sintetizadores raw |
| **10** | *Santuário Escuro* | 04:15 | Gravações de campo tratadas, drone profundo |
| **11** | *Transição Silenciosa*| 01:58 | Microfonia controlada, ruído branco térmico |
| **12** | *Vigas de Suspensão* | 03:05 | Acordes quentes em fita magnética |
| **13** | *Nuvem de Cinzas* | 03:30 | Espacialização binaural, harmônicos |
| **14** | *Eco de Vidro* | 02:48 | Ressonâncias de vidro e sinos sintetizados |
| **15** | *Pórtico Noturno* | 03:52 | Linha de baixo lenta, ambient contemplativo |
| **16** | *Descompressão* | 02:30 | Decaimento estéreo, arpejos etéreos |
| **17** | *Epílogo em Pedra* | 04:20 | Conclusão atmosférica de baixa frequência |

---

## 4. O Estojo do CD 3D (`CDViewmodel3D.ts`)

O estojo de CD Jewel Case 3D foi modelado parametricamente com Three.js:
- **Corpo em Acrílico PBR**: `MeshPhysicalMaterial` com transmissão de luz, espessura de 0.12, refração IOR de 1.49 e reflexos especulares.
- **Encarte Frontal (Capa)**: Arte impressa em papel fosco com microgranulação.
- **Bandeja e Disco CD**: Geometria procedural de policarbonato com shader de difração de luz iridescente (arco-íris holográfico conforme a luz incide).
- **Contracapa com Detecção de Clique UV (`getTrackIndexAtUV`)**:
  - A textura da contracapa lista as 17 faixas divididas em 17 caixas de colisão UV.
  - Ao passar o cursor ou clicar na contracapa, o raycaster extrai a coordenada UV exata do impacto e identifica instantaneamente qual faixa foi selecionada sem necessidade de elementos HTML sobrepostos no 3D:
  ```ts
  // Mapeamento proporcional no espaço UV da contracapa
  public getTrackIndexAtUV(uv: THREE.Vector2): number | null {
    if (uv.x < 0.08 || uv.x > 0.92) return null;
    const topY = 0.88;
    const bottomY = 0.12;
    if (uv.y > topY || uv.y < bottomY) return null;
    const norm = (topY - uv.y) / (topY - bottomY);
    const idx = Math.floor(norm * 17);
    return Math.max(0, Math.min(16, idx));
  }
  ```

---

## 5. Filtro DJ DSP em Tempo Real (Low-Pass / High-Pass)

O visitante pode modular a acústica de qualquer música tocando na galeria usando atalhos de teclado (`[` / `]` ou `O` / `P`) ou o botão analógico no HUD:

- **Passa-Baixa (Low-pass)**: Simula o som abafado como se o visitante estivesse do lado de fora de uma sala ou sob névoa acústica (frequência de corte desce de 20.000 Hz até 200 Hz).
- **Passa-Alta (High-pass)**: Corta os subgraves, evidenciando médios metálicos e estalos analógicos (frequência sobe de 20 Hz até 4.000 Hz).
- **Reset Imediato**: Pressionar a tecla `0` restaura a curva plana e neutra (20 Hz - 20.000 Hz, Q = 0.707).

---

## 6. Visualizadores de Espectro FFT

1. **`CDVisualizerField.tsx`**:
   - Analisa 64 bandas espectrais em tempo real (`analyserNode.getByteFrequencyData`).
   - Aplica interpolação cúbica para gerar barras suaves e áudio-reativas com saturação estéreo.
2. **`AudioVisualizer.tsx`**:
   - Gera ondas no piso da galeria que reagem à amplitude da música em reprodução, criando reflexos no microcimento.
