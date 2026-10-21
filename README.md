# GIGANTERA — Pavilhão Imersivo Digital & Acervo 3D

> **Domínio de Produção Oficial:** [https://gigantera.xyz](https://gigantera.xyz)  
> **CDN Pull Zone:** [https://gigantera-penumbra.b-cdn.net/gigantera-portfolio](https://gigantera-penumbra.b-cdn.net/gigantera-portfolio)  
> **Repositório GitHub:** [https://github.com/Pelimotion/gigantera-portfolio](https://github.com/Pelimotion/gigantera-portfolio)  
> **Artista / Autor:** Felipe Conceição ([Pelimotion](https://pelimotion.art))  
> **Contato Curatorial & Imprensa:** [felipe@pelimotion.art](mailto:felipe@pelimotion.art)  
> **Tecnologias:** React 19, TypeScript 5.8, Three.js / WebGL, Tone.js / Web Audio API, Zustand 5, GSAP, Vite 8, Bunny.net Edge CDN.

---

## 🏛️ Sobre o Projeto

**GIGANTERA** é um pavilhão arquitetural brutalista e acervo curatorial concebido inteiramente em computação gráfica 3D em tempo real para a web. O visitante caminha livremente através de uma galeria com vitrines suspensas de vidro contendo videoartes em formato vertical 9:16, uma sala de audição com álbum físico de 17 faixas autorais e a monumental escultura biomecânica **Espinhaço** — esculpida em liga de prata/metal acetinado sobre plinto de basalto escuro, respaldada por uma monumental projeção de 25.2 metros cobrindo a parede de fundo do Santuário.

A experiência foi construída com foco em rigor curatorial, solidez técnica, fidelidade física de iluminação e materiais (PBR), sem concessões a jargões fáceis ou efeitos superficiais.

---

## 🧭 Mapa de Rotas do Domínio (Gigantera.xyz)

| Rota | Descrição | Tecnologia |
| :--- | :--- | :--- |
| **`/`** | **Pavilhão 3D Imersivo & Acervo Geral** (Galeria, Vitrines, Álbum 17 faixas, Espinhaço 3D, Projeção) | React 19 + Three.js + Web Audio API + Zustand |
| **`/ar`** | **Espinhaço WebAR** — Realidade Aumentada com câmera óptica do celular e giroscópio | Three.js + WebRTC Camera + DeviceOrientation |
| **`/admin`** | **Media Kit & Curador de Acervo** — Centro de download de masters e exportação de releases | Vanilla JS + Bunny CDN Edge Storage Sync |
| **`/penumbra`** | **Penumbra System VJ Cockpit** — Motor de performance audiovisual integrado | Edge CDN Proxy / WebGL Engine |

---

## 🎨 Setores Expográficos em Exibição

1. **Setor 1 — Tetrápode (`tetrapode`)**: *Concreto, pixel e tecnologia morta.*
   - `01. Tetrápode I: Concreto & Pixel`
   - `02. Tetrápode II: Tecnologia Morta`
2. **Setor 2 — No$talgia (`nostalgia`)**: *Memória, território e transição costeira.*
   - `03. No$talgia: Monólito Costeiro`
3. **Setor 3 — Espinhaço (`espinhaco`)**: *Espinha, tainha e aço.*
   - `04. Espinhaço: Projeção em Tecido`
   - `05. Espinhaço: Giant Mullets`
   - `06. Espinhaço: Matriz de Pontos`
   - `07. Espinhaço: Tração Abissal`
   - `08. Espinhaço: Mockup TV CRT`
4. **Setor 4 — Cine Itajaí & Aparecida (`cine-itajai-aparecida`)**: *Molhes, interferências e rogai por nós brasileiros.*
   - `09. Cine Itajaí: Molhes & Interferências`
   - `10. Aparecida: Rogai por Nós Brasileiros`
5. **Setor 5 — Santuário Espinhaço (`interactive`)**: *Totem vivo, escultura em prata e projeção monumental.*
   - `11. Espinhaço: Escultura Interativa Monumental` (Escala ~8.2m · Prata PBR + 50k Pontos)
   - `Projeção Santuário: Semana da Arte Vertical` (Painel monumental 25.2m × 17.0m)

---

## 🎮 Guia Unificado de Controles & Atalhos

| Ação | Desktop | Mobile / Touch |
| :--- | :--- | :--- |
| **Locomoção** | `W`, `A`, `S`, `D` ou Setas | Joystick Virtual Analógico (canto inferior esquerdo) |
| **Acelerar / Correr** | `Shift` | Toque analógico estendido |
| **Olhar / Orientar Câmera** | Mouse Look com Pointer Lock 360° | Arraste tátil na metade direita da tela ou Giroscópio |
| **Interagir / Inspecionar** | `E` ou Clique Direto na Obra | Toque direto na vitrine / obra |
| **Travar / Destravar Mira** | Clique no chão trava; `ESC` destrava | Toque contínuo na cena |
| **Álbum CD (17 Faixas)** | `F` ou Clique para virar; `↑`/`↓` para trocar faixa | Toque na capa / contracapa |
| **Filtro DJ DSP** | `[` / `]` ou `O` / `P` (Passa-Baixa & Passa-Alta); `0` reseta | Knob analógico tátil no HUD |
| **Setores Rápidos** | `1` (Áudio) · `2` (Vídeos) · `3` (Stills) · `4` (Santuário) | Seletor de setores na barra inferior |
| **Ver Acervo Completo** | `TAB` (Matriz Frontal com Raycasting) | Botão Acervo no menu |
| **Alternar Fidelidade** | `G` (Leve / Médio / Alto) | Seletor gráfico no menu |
| **Sobre o Artista & Bio**| `C` | Botão no header superior |
| **Mudo Global** | `M` | Botão de volume no header |

---

## 📚 Documentação Técnica Aprofundada (`docs/`)

- 🏛️ **[Arquitetura de Software & Engine 3D](docs/ARCHITECTURE.md)**: Diagrama de camadas, ciclo de vida da cena, coordenadas de mundo e store Zustand.
- 🎯 **[Controles, Câmera FPS & Raycasting](docs/CONTROLS_AND_INTERACTION.md)**: Máquina de estados do Pointer Lock, física de rotação e raycast determinístico.
- 🎛️ **[Sistema de Áudio, DSP & CD 3D](docs/AUDIO_SYSTEM.md)**: Web Audio API, catálogo de 17 faixas, filtro DJ biquad e visualizadores FFT.
- 🖼️ **[Expografia, Catálogo & Escultura Espinhaço](docs/EXPOGRAPHY_AND_CATALOG.md)**: Adição de novas obras, proceduralismo de baías, projeção monumental e escultura de prata.
- 🚀 **[Operações, Infraestrutura & Deploy](docs/OPERATIONS_AND_DEPLOYMENT.md)**: Vercel Edge, Bunny CDN, pipeline de mídia (`scripts/process_media.py`), HTTP 206 Byte-Range e pipeline de build.
- 🔮 **[Roteiro de Melhorias Futuras (Roadmap)](docs/FUTURE_IMPROVEMENTS.md)**: LOD para vitrines distantes, áudio espacial 3D com HRTF e WebXR.
- 📋 **[Briefing de Continuidade (Handover)](HANDOVER_NEXT_SESSION.md)**: Documento mestre de handoff com status consolidado para retomada imediata.

---

## 🛠️ Comandos Rápidos de Operação

```bash
# Instalação limpa de dependências
npm install

# Servidor de desenvolvimento com HMR
npm run dev

# Checagem rigorosa de tipos TypeScript (0 erros garantidos)
npx tsc --noEmit

# Compilação para produção
npm run build

# Pré-visualização local do build
npm run preview -- --port 4173 --host

# Deploy imediato em produção via Vercel CLI
npx vercel --prod --yes
```

---

## ☁️ Infraestrutura de CDN & Edge Storage (Bunny.net)

- **Pull Zone Oficial:** `https://gigantera-penumbra.b-cdn.net/gigantera-portfolio/`
- **Região de Baixa Latência:** São Paulo (`br.storage.bunnycdn.com`)
- **Streaming de Mídia:** Suporte a HTTP 206 (Byte-Range Requests) para início instantâneo de streaming de áudio e vídeo sem travamentos de buffer.
- **Pasta Mestre Online de Vídeos:**
  `/Volumes/PLM_SSD_01/Pipeline SSD 01/Gigantera/Pipeline Gigantera/Out Gigantera/ONLINE`
