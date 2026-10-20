# BRIEFING ESTRATÉGICO DE TRANSIÇÃO — GIGANTERA (DOCUMENTO MESTRE DE CONTINUIDADE)

> **Documento mestre de handoff para continuidade autônoma imediata e manutenção contínua.**  
> **Data de Atualização:** 2026-10-20 | **Branch:** `main` | **Status do Build:** 100% Validado (0 erros TypeScript, build ~1.3s, 0 erros de console, Vercel Production Ready)  
> **Domínio Oficial:** [https://gigantera.xyz](https://gigantera.xyz)  
> **Repositório GitHub:** [https://github.com/Pelimotion/gigantera-portfolio](https://github.com/Pelimotion/gigantera-portfolio)  
> **Diretório Local de Trabalho:** `/Volumes/PLM_SSD_01/Dev/Gigantera Portfolio`

---

## 🎯 RESUMO EXECUTIVO: EVOLUÇÕES CONSOLIDADAS & ESTADO ATUAL

### 1. Resolução Definitiva dos Conflitos de Mira e Interação Raycast
- **Eliminação de Gatilhos Fantasmas por Proximidade**:
  - Removido 100% do fallback que forçava abertura de obras via `state.proximityArtwork` no `onClick` e na tecla `[E]`.
  - Clicar em qualquer espaço vazio do pavilhão (chão, teto, paredes ou ar) **nunca mais abre obras por engano**.
- **Validação Física Estrita no Ponto de Clique**:
  - O clique do mouse e a tecla `[E]` agora exigem colisão física real via raycast contra os meshes (`glassMesh`, `paperMesh`, `plaqueMesh` ou `cdCaseMesh`).
  - Limites de alcance calibrados com rigor: obras do corredor até `7.0m`, escultura do santuário até `10.0m`, e pedestal do CD até `3.5m`.
- **Comportamento Fluido de Câmera & Pointer Lock**:
  - **Com Pointer Lock ativo**: O mouse usa `movementX/movementY` diretamente, girando livremente em 360° sem esbarrar nas bordas do monitor (segura a mira normalmente no padrão FPS).
  - **Com cursor destravado**: O cursor navega livremente para interagir com menus superiores e rodapés; ao clicar no 3D, solicita pointer lock imediatamente; ao clicar e arrastar, rotaciona a câmera por delta suave.
  - **Proteção Anti-clique Fantasma**: `lastActionCloseTime` com cooldown de 350ms ao fechar modais ou guardar o CD.

---

### 2. Biomecânica de Nado da Escultura Interativa "Espinhaço"
- **Pivot Centralizado & Flexão Orgânica**:
  - O ponto de ancoragem e distorção física foi centralizado no meio do corpo escultural.
  - Ao pressionar `W`, `S`, `A`, `D` ou mover o analógico mobile, a escultura executa um **nado de peixe orgânico**, com ondas senoidais fluidas propagando da cabeça até a cauda e curvatura lateral elástica.
- **Diretriz Curatorial & Editorial Estrita**:
  - O trabalho artístico é sério, crítico e monumental. Termos apelativos como *"VIVENCIAR"* foram banidos. As fichas técnicas e descrições seguem tom sóbrio, direto e com poucas palavras.

---

### 3. Sala de Audição, CD Jewel Case 3D & Filtro DJ
- **17 Faixas Autorais**: Streaming em alta fidelidade com Bunny.net CDN via HTTP 206 (Byte-Range Requests).
- **Estojo de CD Jewel Case 3D**:
  - Geometria em acrílico PBR com difração de arco-íris no policarbonato do disco.
  - Contracapa com teste de colisão UV procedural (`getTrackIndexAtUV`): tocar em qualquer uma das 17 faixas na arte da contracapa aciona a música diretamente.
- **Filtro DJ DSP**: Passa-Baixa e Passa-Alta resonante com atalhos `[` / `]` ou `O` / `P`, e reset rápido com `0`.

---

### 4. Cenografia do Santuário de Basalto Mineral ($Z \approx -76.5\text{m}$)
- **Piso e Paredes em Degradê Procedural Mineral**:
  - Transição contínua do microcimento claro da entrada até a ardósia/basalto escuro no fundo ($Z = -52\text{m}$ a $-94\text{m}$), com microcristais de quartzo e veios táteis.
- **Placa de Identificação no Umbral ($Z \approx -52.2\text{m}$)**:
  - Posicionada na linha de transição de piso, voltada para o visitante.
- **Escala 3x Monumental**:
  - 50.000 partículas procedurais (`espinhaco_points.bin`) erguendo-se a mais de 8 metros de altura vertical.

---

## 📚 SUÍTE MODULAR DE DOCUMENTAÇÃO TÉCNICA (`docs/`)

Para manter a base de código limpa e facilitar melhorias futuras sem gargalos de contexto, foram criados guias técnicos dedicados:

| Documento | Conteúdo Principal |
| :--- | :--- |
| **[`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)** | Camadas React 19 + Three.js, coordenadas Z de mundo, ciclo de renderização dual scene e store Zustand. |
| **[`docs/CONTROLS_AND_INTERACTION.md`](docs/CONTROLS_AND_INTERACTION.md)** | Máquina de estados do Pointer Lock, física de rotação FPS, joystick virtual mobile e pipeline de raycasting. |
| **[`docs/AUDIO_SYSTEM.md`](docs/AUDIO_SYSTEM.md)** | Web Audio API, catálogo das 17 faixas, CD 3D Jewel Case, UV hit-testing e DSP do filtro DJ. |
| **[`docs/EXPOGRAPHY_AND_CATALOG.md`](docs/EXPOGRAPHY_AND_CATALOG.md)** | Schema de obras, gerador procedural de baías, texturas minerais e nado do Espinhaço. |
| **[`docs/OPERATIONS_AND_DEPLOYMENT.md`](docs/OPERATIONS_AND_DEPLOYMENT.md)** | Vercel Edge, rotas SPA, Bunny CDN, script de sincronização e variáveis de ambiente. |
| **[`docs/FUTURE_IMPROVEMENTS.md`](docs/FUTURE_IMPROVEMENTS.md)** | Backlog técnico: LOD dinâmico em vitrines, áudio espacial 3D com HRTF, WebXR e BlurHash. |

---

## ⚡ COMANDOS DE OPERAÇÃO RÁPIDA

```bash
# Entrar no diretório do projeto
cd "/Volumes/PLM_SSD_01/Dev/Gigantera Portfolio"

# Executar dev server local com HMR
npm run dev

# Checagem obrigatória de tipagem TypeScript (deve retornar 0 erros)
npx tsc --noEmit

# Compilação para produção
npm run build

# Deploy imediato em produção no Vercel
npx vercel --prod --yes
```

---

## 🔐 REGRAS INEGOCIÁVEIS DE CONTINUIDADE

1. **Nunca reintroduza gatilhos por `proximityArtwork` para abrir janelas**: Toda abertura de obra ou modal deve ser disparada por clique verificado ou `[E]` com alinhamento visual frontal.
2. **Preserve a Sobriedade Editorial**: Mantenha títulos, fichas e textos com perfil crítico, técnico e direto (sem poesia kitsch ou apelos de marketing).
3. **Valide Sempre o Build Antes de Commitar**: Todo commit na branch `main` deve passar por `npx tsc --noEmit` e `npm run build` com 0 erros.
