# GIGANTERA — Expografia, Catálogo de Obras & Escultura Interativa

> **Versão:** 2.0 (Outubro 2026)  
> **Arquivos Fonte:** `src/data/artworks.ts`, `src/types/art.ts`, `src/core/modularGallery.ts`, `src/components/works/EspinhacoInteractive.tsx`

---

## 1. O Catálogo de Obras (`src/data/artworks.ts`)

Todas as obras presentes no pavilhão são tipadas e centralizadas no arquivo `src/data/artworks.ts`. O motor procedural lê esta lista em tempo de execução e projeta automaticamente as vitrines, iluminação e pontos de observação na galeria.

### Estrutura do Tipo `Artwork` (`src/types/art.ts`):
```ts
export type MediumType = 'video' | 'still' | 'interactive' | 'sound';

export interface Artwork {
  id: string;                     // Identificador slug único (ex: 'espinhaco', 'sol-negro')
  title: string;                  // Título da obra em caixa alta ou formato curatorial
  year: number;                   // Ano de concepção (ex: 2025, 2026)
  medium: MediumType;             // Meio de expressão
  category: string;               // Categoria formal (ex: 'Nuvem de Partículas 3D', 'Videoarte')
  dimensions: string;             // Dimensões físicas ou resolução de master (ex: '3840x2160', '8.2m')
  technique: string;              // Técnica e ferramentas (ex: 'Procedural GLSL, WebGL, 50k Partículas')
  description: string;            // Descrição sóbria, concisa e técnica
  curatorialStatement?: string;   // Texto crítico aprofundado (sem adjetivações excessivas)
  aspectRatio: number;            // Proporção de largura / altura (ex: 1.0, 1.777, 0.75)
  imageSrc: string;               // URL da imagem ou poster de alta resolução
  videoSrc?: string;              // URL de streaming do vídeo em Bunny CDN (se for videoarte)
  hasAudio?: boolean;             // Indica se a obra tem trilha sonora própria integrada
  tags: string[];                 // Metatags para filtros e press kit
}
```

---

## 2. Como Adicionar ou Modificar uma Obra no Acervo

Para adicionar uma nova obra à galeria:

1. **Abra `src/data/artworks.ts`**.
2. **Insira o novo objeto no array `ARTWORKS_CATALOG`**:
   ```ts
   {
     id: 'nova-obra-slug',
     title: 'TÍTULO DA OBRA',
     year: 2026,
     medium: 'video', // 'video' | 'still' | 'interactive'
     category: 'Videoarte Monocanal 4K',
     dimensions: '3840 × 2160 px',
     technique: 'Render Físico Raytracing, Simulação Biomecânica',
     description: 'Estudo sobre rigidez estrutural e dissipação de energia cinética em escala macro.',
     aspectRatio: 16 / 9,
     imageSrc: 'https://gigantera-penumbra.b-cdn.net/works/nova-obra/poster.webp',
     videoSrc: 'https://gigantera-penumbra.b-cdn.net/works/nova-obra/master_h264.mp4',
     hasAudio: true,
     tags: ['videoarte', 'biomecânica', 'raytracing']
   }
   ```
3. **Resultado Automático**:
   - Uma nova vitrine física com iluminação própria é gerada na galeria.
   - O ponto ideal de parada de câmera (`viewingSpot`) é calculado.
   - A plaquinha física 3D em latão com o título e técnica é instalada na parede.
   - A obra é adicionada automaticamente ao Acervo Geral (`TAB`) e ao Media Kit (`/admin`).

---

## 3. O Motor Expográfico Procedural (`src/core/modularGallery.ts`)

A arquitetura do pavilhão não é um modelo estático monolítico; ela é gerada parametricamente para acomodar o catálogo com precisão:

### Parâmetros Arquiteturais:
- **Largura do Corredor Central**: $8.0\text{ m}$ (espaço entre as paredes laterais $X = -4.0\text{m}$ e $X = +4.0\text{m}$).
- **Altura das Paredes**: $5.4\text{ m}$ até as vigas de concreto.
- **Espaçamento entre Baías**: $7.5\text{ m}$ a $9.0\text{ m}$ no eixo longitudinal Z.
- **Alternância Orgânica**: Obras pares na parede esquerda ($X = -3.8\text{m}$), obras ímpares na parede direita ($X = +3.8\text{m}$).
- **Ponto de Contemplação Ótimo (`viewingSpot`)**:
  - Calculado a $3.8\text{ m}$ de distância perpendicular da vitrine, no eixo central do corredor, com o ângulo de visão direcionado exatamente para o centro geométrico da obra.

### Shaders & Texturas Procedurais de Alta Definição:
- `createTerrazzoTexture(isLight)`: Piso de microcimento com lascas minerais e brilho especular físico.
- `createRoughConcreteTexture(isLight)`: Concreto brutalista com marcas sutis de fôrma de madeira e porosidade.
- `createSanctuaryFloorTexture(isLight)`: Transição gradual do microcimento claro para a ardósia mineral escura com microcristais de quartzo ($Z = -52\text{m}$ até $Z = -94\text{m}$).
- `createSanctuaryWallTexture(isLight)`: Paredes com degradê acústico escuro contornando o santuário.

---

## 4. As Vitrines Físicas Museológicas (PBR Glass)

Cada obra é encapsulada em uma vitrine tridimensional de vidro reflexivo:
- **Vidro (`glassMesh`)**: `MeshPhysicalMaterial` com `transmission: 0.97`, `roughness: 0.05`, `ior: 1.48`, `thickness: 0.40m`, e reflexos do ambiente.
- **Papel (`paperMesh`)**: Papel mate giclée com textura tátil de fibra de algodão.
- **Plaqueta de Identificação (`plaqueMesh`)**: Bloco chanfrado de alumínio anodizado/latão posicionado abaixo da vitrine, exibindo os metadados da obra.

---

## 5. A Escultura Interativa Monumental: "Espinhaço"

Localizada no Santuário de basalto escuro ($Z = -76.5\text{m}$), a obra interativa é o clímax arquitetural da galeria.

### Especificações Técnicas:
- **Nuvem de Partículas**: 50.000 pontos procedurais carregados de `public/models/espinhaco_points.bin` (586 KB).
- **Escala Monumental**: $3\times$ a escala padrão (mais de $8.2\text{ metros}$ de altura vertical), elevando-se do piso escuro até próximo às vigas de cobertura.
- **Biomecânica de Nado (Fish-like Swim)**:
  - O ponto pivot de distorção física foi centralizado no meio do corpo escultural.
  - Ao pressionar `W`, `S`, `A`, `D` ou mover o analógico mobile, a escultura não sofre distorções desordenadas: ela **nada organicamente**, aplicando uma onda senoidal que propaga da cabeça até a barbatana caudal com flexão lateral da coluna vertebral.
  - O arco de curvatura é contido e elegante, mantendo o dinamismo escultural.

### Diretriz Curatorial e Editorial:
> **Regra Obrigatória:** O trabalho é sério, crítico e monumental. Nunca utilize termos cafona ou apelativos como *"VIVENCIAR"*. As descrições devem ser sóbrias, diretas, elegantes e em poucas palavras, focando nos aspectos estruturais, materiais e temporais da obra.
