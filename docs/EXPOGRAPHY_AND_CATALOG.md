# GIGANTERA — Expografia, Catálogo de Obras & Escultura Interativa

> **Versão:** 3.0 (Outubro 2026)  
> **Arquivos Fonte:** `src/data/artworks.ts`, `src/types/art.ts`, `src/core/modularGallery.ts`, `src/components/canvas/GalleryScene3D.tsx`, `src/components/works/EspinhacoInteractive.tsx`  
> **Repositório Master Online:** `/Volumes/PLM_SSD_01/Pipeline SSD 01/Gigantera/Pipeline Gigantera/Out Gigantera/ONLINE`  
> **Bunny CDN Base:** `https://gigantera-penumbra.b-cdn.net/gigantera-portfolio`

---

## 1. O Catálogo de Obras (`src/data/artworks.ts`)

O acervo do pavilhão foi integralmente atualizado para a narrativa conceitual consolidada em **5 setores temáticos**, articulando 10 videoartes monocanais em formato vertical 9:16, a escultura central em prata e a projeção monumental de fundo:

### Os 5 Setores Expográficos:
1. **`tetrapode` — Tetrápode**: *Concreto, pixel e tecnologia morta.*
2. **`nostalgia` — No$talgia**: *Memória, território e transição costeira.*
3. **`espinhaco` — Espinhaço**: *Espinha, tainha e aço.*
4. **`cine-itajai-aparecida` — Cine Itajaí & Aparecida**: *Molhes, interferências e rogai por nós brasileiros.*
5. **`interactive` — Santuário Espinhaço**: *Totem vivo, escultura em prata e projeção monumental.*

---

## 2. Inventário Técnico Completo das Obras em Exposição

| # | ID da Obra | Título Curatorial | Meio | Resolução / Dimensões | Master Original (`ONLINE/`) | Bunny CDN Video / Poster |
| :-: | :--- | :--- | :-: | :-: | :--- | :--- |
| **01** | `tetrapode-pixel-concreto-01` | **Tetrápode I: Concreto & Pixel** | Vídeo | 1080×1920 (9:16) · 20.4 MB | `01_tetrapode_concreto_pixel_01.mp4` | `videos/tetrapode-concreto-pixel_full.mp4` |
| **02** | `tetrapode-tecnologia-morta-02` | **Tetrápode II: Tecnologia Morta** | Vídeo | 1080×1920 (9:16) · 23.3 MB | `02_tetrapode_tecnologia_morta_02.mp4` | `videos/tetrapode-tecnologia-morta_full.mp4` |
| **03** | `nostalgia-monolito-costeiro-05` | **No$talgia: Monólito Costeiro** | Vídeo | 1080×1920 (9:16) · 17.6 MB | `03_nostalgia_monolito_costeiro_05.mp4` | `videos/nostalgia-monolito-costeiro_full.mp4` |
| **04** | `espinhaco-projecao-tecido-09-2` | **Espinhaço: Projeção em Tecido** | Vídeo | 1080×1920 (9:16) · 21.0 MB | `04_espinhaco_projecao_tecido_09_2.mp4` | `videos/espinhaco-projecao-tecido_full.mp4` |
| **05** | `espinhaco-giant-mullets` | **Espinhaço: Giant Mullets** | Vídeo | 1080×1920 (9:16) · 21.2 MB | `05_espinhaco_giant_mullets.mov` | `videos/espinhaco-giant-mullets_full.mp4` |
| **06** | `espinhaco-matriz-pontos-13c` | **Espinhaço: Matriz de Pontos** | Vídeo | 1080×1920 (9:16) · 17.7 MB | `06_espinhaco_matriz_pontos_13c.mp4` | `videos/espinhaco-matriz-pontos_full.mp4` |
| **07** | `espinhaco-abissal-tracao-09-2` | **Espinhaço: Tração Abissal** | Vídeo | 1080×1920 (9:16) · 67.9 MB | `07_espinhaco_abissal_tracao_09_2.mp4` | `videos/espinhaco-abissal-tracao_full.mp4` |
| **08** | `espinhaco-mockup-tv-06` | **Espinhaço: Mockup TV CRT** | Vídeo | 1080×1920 (9:16) · 21.5 MB | `08_espinhaco_mockup_tv_06.mp4` | `videos/espinhaco-mockup-tv_full.mp4` |
| **09** | `cine-itajai-molhes-interferencias`| **Cine Itajaí: Molhes & Interferências**| Vídeo | 1080×1920 (9:16) · 19.3 MB | `09_cine_itajai_molhes_interferencias.mp4` | `videos/cine-itajai-molhes_full.mp4` |
| **10** | `aparecida-rogai-por-nos-02` | **Aparecida: Rogai por Nós Brasileiros** | Vídeo | 1080×1920 (9:16) · 24.3 MB | `10_aparecida_rogai_por_nos_02.mp4` | `videos/aparecida-rogai-por-nos_full.mp4` |
| **11** | `espinhaco-interactive-root` | **Espinhaço: Escultura Interativa** | 3D PBR | Escala ~8.2m · 50k Pontos | `public/models/espinhaco.glb` | `models/espinhaco.glb` |
| **—** | *Projeção Santuário* | **Semana da Arte Vertical** | Projeção | 25.2m × 17.0m · 47.7 MB | `00_projecao_santuario_semana_da_arte_vertical.mov` | `projections/projecao-santuario-semana-arte_loop.mp4` |

---

## 3. O Motor Expográfico Paramétrico (`src/core/modularGallery.ts`)

A distribuição espacial das vitrines ao longo da galeria é calculada parametricamente pela função `computeModularGalleryLayout`:

### Geometria do Corredor:
- **Ponto de Partida da Jornada (`journeyStart`):** `Z = +12.0m` (imediatamente após a saída do Foyer do CD).
- **Final da Jornada de Vitrines (`journeyTargetEnd`):** `Z = -49.2m` (reserva 2.8 metros de respiro antes do umbral do Santuário).
- **Espaçamento Longitudinal entre Obras (`spacingZ`):** `6.8m`.
- **Posicionamento Transversal ($X$):**
  - Obras pares na parede esquerda ($X = -3.8\text{m}$, voltadas para $X > 0$).
  - Obras ímpares na parede direita ($X = +3.8\text{m}$, voltadas para $X < 0$).
- **Pontos de Contemplação Ótimos (`viewingSpot`):**
  - Calculados no centro do corredor com vetor de mirada perpendicular direcionado para cada vitrine.

### Transição Arquitetural do Santuário:
- **Umbral de Transição Mineral:** Localizado em `Z = -52.0m`, onde o piso de microcimento alabastro claro se funde à ardósia/basalto escuro por meio de um degradê com ruído de Voronoi e microcristais de quartzo.
- **Placa de Identificação do Santuário:** Montada em `Z = -52.2m` no piso, indicando a entrada na câmara acústica da escultura.
- **Centro do Santuário:** `Z = -76.5m`, onde a escultura de prata se ergue em turntable contínuo.
- **Parede de Fundo (Back Wall):** `Z = -93.94m`, servindo de anteparo para a projeção monumental.

---

## 4. Arquitetura da Projeção de Parede de Fundo

Em substituição à parede estática escura, foi instalada uma projeção monumental em emulação ótica de alta precisão:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        PAREDE DE FUNDO DO SANTUÁRIO                    │
│                        (Largura: 26.0m | Altura: 24.0m)                │
│                                                                        │
│   ┌───────────────┐   ┌────────────────────────┐   ┌───────────────┐   │
│   │  ASA ESQUERDA │   │     PAINEL CENTRAL     │   │  ASA DIREITA  │   │
│   │   Wash Luz    │   │  Projeção Nítida 1:1   │   │   Wash Luz    │   │
│   │  (7.82m x 17m)│   │  9:16 (9.56m x 17.0m)  │   │  (7.82m x 17m)│   │
│   │  Opacidade 70%│   │  Master em Alta Def.   │   │  Opacidade 70%│   │
│   └───────────────┘   └────────────────────────┘   └───────────────┘   │
│   ◄─────────────────────── 25.2 Metros ────────────────────────────►   │
│                                                                        │
│                          [Rebatimento no Piso]                         │
└────────────────────────────────────────────────────────────────────────┘
```

- **Material PBR Físico:** `MeshStandardMaterial` com `normalMap: wallNormalTex` e `roughness: 0.92`, reproduzindo os micro-relevos e a aspereza do gesso mineral atingido por luz laser.
- **Centro Nítido 1:1:** O painel central de 9.56m × 17.0m exibe `SEMANA_DA_ARTE_VERTICAL` sem qualquer distorção anamórfica horizontal.
- **Wash Lateral:** As alas esquerda e direita de 7.82m cada espalham a luz ambiental do vídeo pelas bordas da sala, cobrindo 96.8% da extensão total da parede.
- **Otimização Inteligente:** Culling automático que pausa o elemento de vídeo quando o visitante está a mais de 20 metros de distância no corredor.

---

## 5. A Escultura "Espinhaço": Prata Acetinada & Basalto Cinzelado

A escultura interativa foi reprojetada para materializar a visão da referência `criativo 04.png`:

- **Malha Sólida em Prata / Estanho Lunar**:
  - `MeshPhysicalMaterial`:
    - `color`: `0xdde5ec`
    - `metalness`: `0.94`
    - `roughness`: `0.28` (brilho acetinado escovado)
    - `clearcoat`: `0.25`
    - `clearcoatRoughness`: `0.20`
    - `envMapIntensity`: `1.8`
- **Pedestal em Basalto**:
  - Bloco cúbico em basalto maciço (`2.6m × 0.72m × 2.6m`), com friso chanfrado superior (`2.38m × 0.16m × 2.38m`) e colar de engaste cilíndrico na base da vértebra caudal.
- **Nuvem Bioluminescente & Wake-on-Interaction**:
  - **Repouso (Z > -70m)**: Escultura puramente metálica e escultural, sólida e reflexiva, com nuvem de pontos a 14% de opacidade.
  - **Aproximação (< 5.8m ou mira)**: O `wakeFactor` eleva a opacidade das partículas para 96% em ciano elétrico, a espinha metálica ganha luminescência orgânica no núcleo e a ondulação de nado se intensifica com a energia do som.
