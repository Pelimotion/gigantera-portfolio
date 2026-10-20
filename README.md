# GIGANTERA — Pavilhão Imersivo Digital & Acervo 3D

> **Domínio de Produção Oficial:** [https://gigantera.xyz](https://gigantera.xyz)  
> **Repositório GitHub:** [https://github.com/Pelimotion/gigantera-portfolio](https://github.com/Pelimotion/gigantera-portfolio)  
> **Artista / Autor:** Felipe Conceição ([Pelimotion](https://pelimotion.art))  
> **Contato Curatorial & Imprensa:** [felipe@pelimotion.art](mailto:felipe@pelimotion.art)  
> **Tecnologias:** React 19, TypeScript 5.8, Three.js / WebGL, Tone.js / Web Audio API, Zustand 5, GSAP, Vite 8, Bunny.net Edge CDN.

---

## 🏛️ Sobre o Projeto

**GIGANTERA** é um pavilhão arquitetural brutalista e acervo curatorial concebido inteiramente em computação gráfica 3D em tempo real para web. O visitante caminha livremente através de uma galeria com vitrines suspensas de vidro contendo videoartes, fotografias e renders virtuais impressos em papel mate giclée de alta densidade, uma sala de audição com álbum físico de 17 faixas autorais e a monumental escultura biomecânica **Espinhaço** — uma nuvem viva de 50.000 partículas procedurais que nada organicamente no santuário de basalto escuro.

A experiência foi construída com foco em rigor curatorial, solidez técnica, fidelidade física de iluminação e materiais (PBR), sem concessões a jargões fáceis ou efeitos superficiais.

---

## 🧭 Mapa de Rotas do Domínio (Gigantera.xyz)

| Rota | Descrição | Tecnologia |
| :--- | :--- | :--- |
| **`/`** | **Pavilhão 3D Imersivo & Acervo Geral** (Galeria, Vitrines, Álbum 17 faixas, Espinhaço 3D) | React 19 + Three.js + Web Audio API + Zustand |
| **`/ar`** | **Espinhaço WebAR** — Realidade Aumentada com câmera óptica do celular e giroscópio | Three.js + WebRTC Camera + DeviceOrientation |
| **`/admin`** | **Media Kit & Curador de Acervo** — Centro de download de masters e exportação de releases | Vanilla JS + Bunny CDN Edge Storage Sync |
| **`/penumbra`** | **Penumbra System VJ Cockpit** — Motor de performance audiovisual integrado | Edge CDN Proxy / WebGL Engine |

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

Para manutenção contínua, modificações e expansão de recursos, consulte os manuais modulares dedicados:

- 🏛️ **[Arquitetura de Software & Engine 3D](docs/ARCHITECTURE.md)**: Diagrama de camadas, ciclo de vida da cena, coordenadas de mundo e store Zustand.
- 🎯 **[Controles, Câmera FPS & Raycasting](docs/CONTROLS_AND_INTERACTION.md)**: Máquina de estados do Pointer Lock, física de rotação e raycast determinístico.
- 🎛️ **[Sistema de Áudio, DSP & CD 3D](docs/AUDIO_SYSTEM.md)**: Web Audio API, catálogo de 17 faixas, filtro DJ biquad e visualizadores FFT.
- 🖼️ **[Expografia, Catálogo & Escultura Espinhaço](docs/EXPOGRAPHY_AND_CATALOG.md)**: Adição de novas obras, proceduralismo de baías, texturas minerais e nado orgânico.
- 🚀 **[Operações, Infraestrutura & Deploy](docs/OPERATIONS_AND_DEPLOYMENT.md)**: Vercel Edge, Bunny CDN, HTTP 206 Byte-Range e pipeline de build.
- 🔮 **[Roteiro de Melhorias Futuras (Roadmap)](docs/FUTURE_IMPROVEMENTS.md)**: LOD para vitrines distantes, áudio espacial 3D com HRTF e WebXR.

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

# Deploy imediato em produção via Vercel CLI
npx vercel --prod --yes
```

---

## ☁️ Infraestrutura de CDN & Edge Storage (Bunny.net)

- **Pull Zone Oficial:** `https://gigantera-penumbra.b-cdn.net`
- **Região de Baixa Latência:** São Paulo (`br.storage.bunnycdn.com`)
- **Streaming de Mídia:** Suporte a HTTP 206 (Byte-Range Requests) para início instantâneo de streaming de áudio e vídeo em 4K sem travamentos de buffer.
- **Modelos Locais de Resposta Instantânea:**
  - `public/models/espinhaco_points.bin` (586 KB — 50.000 coordenadas de partículas)
  - `public/models/espinhaco.glb` (12 MB — malha PBR de referência)

---

## 🚀 Deploy Contínuo (CI/CD)

- Qualquer push para a branch `main` do repositório `Pelimotion/gigantera-portfolio` dispara o build e deploy instantâneo na **Vercel** com propagação global no domínio **[gigantera.xyz](https://gigantera.xyz)**.
