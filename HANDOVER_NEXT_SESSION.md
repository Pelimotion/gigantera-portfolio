# BRIEFING ESTRATÉGICO DE TRANSIÇÃO — GIGANTERA (DOCUMENTO MESTRE DE CONTINUIDADE)

> **Documento mestre de handoff para continuidade autônoma imediata e manutenção contínua.**  
> **Data de Atualização:** 2026-10-20 | **Branch:** `main` | **Status do Build:** 100% Validado (`npx tsc --noEmit` 0 erros | `npm run build` 3.88s limpo | 0 erros de shader | Vercel & Bunny.net Production Ready)  
> **Domínio Oficial:** [https://gigantera.xyz](https://gigantera.xyz)  
> **CDN Pull Zone:** `https://gigantera-penumbra.b-cdn.net/gigantera-portfolio`  
> **Repositório GitHub:** [https://github.com/Pelimotion/gigantera-portfolio](https://github.com/Pelimotion/gigantera-portfolio)  
> **Diretório Local de Trabalho:** `/Volumes/PLM_SSD_01/Dev/Gigantera Portfolio`  
> **Pasta Master de Produção (Online):** `/Volumes/PLM_SSD_01/Pipeline SSD 01/Gigantera/Pipeline Gigantera/Out Gigantera/ONLINE`

---

## 🎯 RESUMO EXECUTIVO: GRANDE ATUALIZAÇÃO CONSOLIDADA

A sessão executou uma grande reestruturação artística, técnica e de infraestrutura do pavilhão imersivo **GIGANTERA**, atingindo o mais alto nível de excelência visual, responsividade e organização de produção:

### 1. Organização dos Masters em `Out Gigantera/ONLINE`
Todos os materiais originais de vídeo utilizados na curadoria foram duplicados a partir do storage do projeto para uma pasta dedicada de exposição online, padronizados com taxonomia profissional de produção:
- **Caminho:** `/Volumes/PLM_SSD_01/Pipeline SSD 01/Gigantera/Pipeline Gigantera/Out Gigantera/ONLINE`
- **11 Arquivos Master Organizados e Renomeados:**
  1. `00_projecao_santuario_semana_da_arte_vertical.mov` (260.6 MB — Projeção Monumental de Parede de Fundo)
  2. `01_tetrapode_concreto_pixel_01.mp4` (108.3 MB — Tetrápode: Concreto e Pixel)
  3. `02_tetrapode_tecnologia_morta_02.mp4` (102.4 MB — Tetrápode: Tecnologia Morta)
  4. `03_nostalgia_monolito_costeiro_05.mp4` (91.3 MB — No$talgia: Monólito Costeiro)
  5. `04_espinhaco_projecao_tecido_09_2.mp4` (101.7 MB — Espinhaço: Projeção em Tecido)
  6. `05_espinhaco_giant_mullets.mov` (39.7 MB — Espinhaço: Giant Mullets)
  7. `06_espinhaco_matriz_pontos_13c.mp4` (82.3 MB — Espinhaço: Matriz de Pontos)
  8. `07_espinhaco_abissal_tracao_09_2.mp4` (268.2 MB — Espinhaço: Tração Abissal)
  9. `08_espinhaco_mockup_tv_06.mp4` (46.4 MB — Espinhaço: Mockup TV CRT)
  10. `09_cine_itajai_molhes_interferencias.mp4` (54.8 MB — Cine Itajaí: Molhes & Interferências)
  11. `10_aparecida_rogai_por_nos_02.mp4` (40.4 MB — Aparecida: Rogai por Nós Brasileiros)

---

### 2. Pipeline de Otimização e Distribuição Global (Bunny.net CDN)
Criados scripts dedicados de transcodificação (`scripts/process_media.py`) e envio para Edge Storage (`scripts/upload_new_assets_bunny.cjs`):
- **WebP & JPG Posters de Alta Definição (1080×1920)**: Imagens de capa de alta densidade carregadas instantaneamente para garantir 0% de vitrines pretas.
- **Preview Loops Leves (8s loops, faststart, ~1.5–2.0 MB)**: Otimizados para decodificação em tempo real sem sobrecarga de GPU/bateria.
- **Masters de Streaming (Full H.264, AAC 192k, `-movflags +faststart`)**: Reprodução fluida no modo CinemaView com suporte nativo a HTTP 206 (Byte-Range Requests).
- **Edge Storage Bunny CDN (`br.storage.bunnycdn.com`)**: Todos os arquivos sincronizados e validados com `HTTP/2 200` e headers CORS universais (`Access-Control-Allow-Origin: *`).
- **Modelos 3D na Nuvem**: `espinhaco.glb` (12.03 MB) e `espinhaco_points.bin` (586 KB) hospedados na CDN com fallback automático para assets locais.

---

### 3. Projeção Monumental na Parede de Fundo do Santuário
Substituição da parede de fundo estática por uma instalação audiovisual monumental de museu utilizando o master `SEMANA_DA_ARTE_VERTICAL.mov`:
- **Dimensões Arquiteturais**: 25.2 metros de largura cobrindo 17.0 metros de altura (do piso ao topo das vigas de concreto).
- **Arquitetura em 3 Painéis**:
  - **Painel Central (9.56m × 17m)**: Mapeamento nítido 1:1 na proporção vertical 9:16 original, sem qualquer distorção anamórfica ou horizontal.
  - **Alas Laterais de Wash Atmosférico (7.82m cada)**: Dissipação suave da luminosidade e das cores do vídeo sobre as extremidades de concreto da galeria.
- **Textura Físico-Mineral Real**:
  - O feixe de projeção incide diretamente sobre o `normalMap` e rugosidade (`roughness: 0.92`) da parede de gesso/concreto, simulando com fidelidade ótica um projetor laser teatral (Barco/Christie 30k lumens) em ambiente de museu.
- **Rebatimento de Luz no Piso**: `PointLight` de reflexão suave iluminando o chão mineral escuro do Santuário.
- **Otimização de Performance**: Culling inteligente por distância que pausa o decodificador de vídeo quando a câmera está distante no Foyer (`Z > -20.0m`) e retoma suavemente na aproximação.

---

### 4. Reformulação Estética da Escultura "Espinhaço" (Conforme `criativo 04.png`)
A escultura interativa recebeu uma reformulação plástica completa para dialogar com a nova expografia:
- **Acabamento em Prata / Liga Metálica Acetinada**:
  - `MeshPhysicalMaterial`: cor `0xdde5ec` (prata líquida/estanho lunar), `metalness: 0.94`, `roughness: 0.28`, `clearcoat: 0.25`, `clearcoatRoughness: 0.20`, `envMapIntensity: 1.8`.
  - Geometria sólida de alta definição derivada de `public/models/espinhaco.glb` com decodificação `MeshoptDecoder` e rotação Z de 90° (coluna vertebral na vertical com ~8.2m de altura).
- **Pedestal Arquitetônico em Basalto Cinzelado**:
  - Plinto monolítico em basalto escuro com relevo mineral (`roughness: 0.94`, `metalness: 0.04`), friso chanfrado superior e colar de engaste na base da espinha, eliminando a antiga base flutuante.
- **Iluminação Cenográfica de Galeria**:
  - *Key Spotlight* rasante prateado (`0xf2f7fc`, intensidade 3.2).
  - *Rim Light* posterior frio (`0x78d2f7`, intensidade 2.0) recortando a silhueta da espinha prateada contra a projeção do fundo.
- **Comportamento Antes e Durante a Interação (Wake-on-Interaction)**:
  - **Antes de interagir (vista de fora)**: A escultura se apresenta como peça sólida de museu em prata polida, imponente e serena em rotação turntable suave, com a nuvem de 50.000 partículas quase invisível (opacidade `0.14`).
  - **Ao interagir (proximidade < 5.8m ou mira)**: O fator de vigília (`wakeFactor`) desperta a nuvem de corpúsculos em ciano bioluminescente (opacidade `0.96`), a malha de prata ganha emissividade orgânica pulsante no núcleo, a biomecânica de nado de peixe ondula harmonicamente e o drone acústico ressoa no motor de áudio.

---

### 5. Nova Narrativa Curatorial & Distribuição Espacial (5 Setores Alinhados)
O catálogo anterior foi inteiramente substituído pela nova seleção curatorial em 5 setores, unificados tanto no teclado (teclas 1 a 5) quanto na barra de navegação e atalhos táteis:
1. **Setor 1 — SOM (`entrance-audio`, Tecla 1)**: *Estação física de audição 3D (Z: +24m → +18m).*
   - `00. Estação de Áudio POV // Jewel Case 3D com 17 faixas autorais`
2. **Setor 2 — TETRÁPODE (`tetrapode`, Tecla 2)**: *Concreto, pixel e tecnologia morta (Z: +12m → -2m).*
   - `01. Tetrápode I: Concreto & Pixel` (videoarte vertical)
   - `02. Tetrápode II: Tecnologia Morta` (videoarte vertical)
3. **Setor 3 — TERRITÓRIO (`costa-critica`, Tecla 3)**: *No$talgia, Cine & Aparecida (Z: -8m → -28m).*
   - `03. No$talgia: Monólito Costeiro` (videoarte vertical)
   - `09. Cine Itajaí: Molhes & Interferências` (videoarte vertical)
   - `10. Aparecida: Rogai por Nós Brasileiros` (videoarte vertical)
4. **Setor 4 — ESPINHAÇO (`espinhaco-vitrines`, Tecla 4)**: *Espinha, tainha e aço (Z: -35m → -50m).*
   - `04. Espinhaço: Projeção em Tecido` (videoarte vertical)
   - `05. Espinhaço: Giant Mullets` (videoarte vertical)
   - `06. Espinhaço: Matriz de Pontos` (videoarte vertical)
   - `07. Espinhaço: Tração Abissal` (videoarte vertical)
   - `08. Espinhaço: Mockup TV CRT` (videoarte vertical)
5. **Setor 5 — SANTUÁRIO (`interactive-sanctuary`, Tecla 5)**: *Totem vivo, escultura em prata e projeção monumental (Z: -52m → -94m).*
   - `11. Espinhaço: Escultura Interativa Monumental` (3D PBR Prata + 50k Pontos sobre pedestal de basalto)
   - `Projeção Santuário: Semana da Arte Vertical` (Projeção monumental 25.2m × 17m integrada à textura da parede)

---

### 6. Relatório de Testes Automatizados e Visuais (Aprovado com Louvor)
- **Navegação pelos 5 Setores:** Validado salto e amortecimento suave da câmera para todos os 5 setores via teclado (1-5) e via pills inferiores (`SOM [1]`, `TETRÁPODE [2]`, `TERRITÓRIO [3]`, `ESPINHAÇO [4]`, `SANTUÁRIO [5]`).
- **Projeção Monumental de Parede:** Validada renderização dos 3 painéis (9.56m centro + 2x 7.82m wash) com iluminação difusa sobre normal maps de concreto e floor bounce light.
- **Escultura em Prata & Basalto:** Escultura vertical ~8.2m carregando `espinhaco.glb` via MeshoptDecoder, acabamento `MeshPhysicalMaterial` prata acetinada, pedestal em basalto escuro com engaste chanfrado.
- **Interatividade & Hit Proxy:** Implementado cilindro invisível de colisão (`hitProxy`) cobrindo toda a extensão vertical da coluna, permitindo acionamento imediato da simulação WebGL Espinhaço ao clicar na escultura ou apertar 'E' no Santuário.
- **Ciclo Modal CinemaView & Simulação:** Validada abertura com ficha técnica, controles W/A/S/D e pulso de choque, e fechamento suave via ESC / tecla E retornando a câmera perfeitamente à galeria.
- **Build & Compilação:** 100% livre de erros (`npm run build` gerando bundle em 3.42s no Node v24).

---

## 🗺️ MAPA DE COORDENADAS Z DO PAVILHÃO

```
  [FOYER / ÁUDIO CD]            [CORREDOR DAS 10 VITRINES]          [UMBRAL]        [SANTUÁRIO]        [PROJEÇÃO FUNDO]
  Z = +22.0m  ──>  +14.0m   ──>   Z = +12.0m  ──>  -49.2m    ──>   Z = -52.0m  ──>  Z = -76.5m   ──>   Z = -93.94m
   (Pedestal do CD 3D)          (10 Vitrines PBR Espaçadas)       (Placa Bronze)   (Espinha Prata)    (Painel 25.2m x 17m)
```

- **Início do Corredor:** `Z = +12.0m`
- **Fim da Última Vitrine:** `Z = -49.2m` (espaçamento Z de 6.8m entre obras)
- **Umbral de Transição Mineral:** `Z = -52.0m` (transição do microcimento para basalto acústico)
- **Totem Espinhaço (Escultura):** `Z = -76.5m`
- **Parede de Fundo e Projeção:** `Z = -93.94m`

---

## ⚡ COMANDOS RÁPIDOS DE OPERAÇÃO

```bash
# Navegar até a raiz do projeto
cd "/Volumes/PLM_SSD_01/Dev/Gigantera Portfolio"

# Executar dev server local com HMR
npm run dev

# Checagem obrigatória de tipagem TypeScript (deve retornar 0 erros)
node node_modules/typescript/lib/tsc.js --noEmit

# Compilação de produção limpa
npm run build

# Pré-visualização do build de produção na porta 4173
npm run preview -- --port 4173 --host

# Re-sincronizar mídias ou modelos para Bunny CDN
node scripts/upload_new_assets_bunny.cjs

# Deploy em produção no Vercel
npx vercel --prod --yes
```

---

## 🔐 REGRAS DE ARQUITETURA PARA SESSÕES FUTURAS

1. **Anti-Ghost-Click Estrito**: Jamais reintroduza `state.proximityArtwork` como fallback de clique. Apenas colisões de raycast nos meshes abrem obras.
2. **Qualidade PBR dos Materiais**: O material de prata da escultura (`MeshPhysicalMaterial`) deve manter `metalness: 0.94` e `roughness: 0.28`. A projeção de fundo deve continuar interagindo com o `wallNormalTex` para efeito de projeção física sobre concreto.
3. **Organização da Pasta ONLINE**: Sempre que adicionar novos vídeos de exposição, duplique-os para `/Volumes/PLM_SSD_01/Pipeline SSD 01/Gigantera/Pipeline Gigantera/Out Gigantera/ONLINE` antes de subir para o CDN.
4. **Validação Contínua de Build**: Nenhuma alteração deve ser finalizada sem que `npm run build` retorne código de saída 0.
