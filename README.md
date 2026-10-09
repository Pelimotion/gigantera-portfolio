# GIGANTERA — Pavilhão Imersivo Digital & Acervo 3D

> **Domínio de Produção:** [https://gigantera.xyz](https://gigantera.xyz)  
> **Repositório Oficial:** [https://github.com/Pelimotion/gigantera-portfolio](https://github.com/Pelimotion/gigantera-portfolio)  
> **Artista / Autor:** Felipe Conceição ([Pelimotion](https://pelimotion.art))  
> **Tecnologias:** React 19, TypeScript, Three.js / WebGL, Tone.js / Web Audio API, GSAP, Vite, Tailwind/Vanilla CSS, Bunny.net Edge CDN.

---

## 🏛️ Sobre o Projeto

**GIGANTERA** é um pavilhão arquitetural imersivo e curatorial concebido em 3D em tempo real. O visitante flutua livremente através de uma galeria brutalista com vitrines suspensas de vidro contendo videoarte, impressos fotográficos virtuais em papel mate giclée de alta densidade, uma sala de som autoral de 17 faixas e a monumental escultura biomecânica **Espinhaço** (nuvem interativa de 50.000 partículas procedurais com altura vertical de mais de 8 metros).

O projeto é acessível em desktop, tablet e smartphones, contando ainda com uma experiência dedicada de **Realidade Aumentada (WebAR)** em `/ar` e um centro curatorial de mídia e imprensa em `/admin`.

---

## 🧭 Mapa de Rotas do Domínio (Gigantera.xyz)

| Rota | Descrição | Tecnologia |
| :--- | :--- | :--- |
| `/` | **Pavilhão 3D Imersivo & Acervo** (Galeria, Vitrines, Álbum 17 faixas, Espinhaço 3D) | React 19 + Three.js + Web Audio API |
| `/ar` | **Espinhaço AR** — Realidade Aumentada óptica e sonora com câmera do celular | Three.js + WebRTC Camera + Gyro |
| `/admin` | **Media Kit & Curador de Acervo** — Centro de download e exportação de releases | Vanilla JS + Bunny CDN Edge Sync |
| `/penumbra` | **Penumbra System VJ Cockpit** — Motor de performance audiovisual integrado | Edge CDN Proxy / WebGL Engine |

---

## 🎮 Controles & Navegação do Pavilhão

| Ação | Desktop | Mobile / Touch |
| :--- | :--- | :--- |
| **Locomoção** | `W`, `A`, `S`, `D` ou Setas | Stepper Glide / D-pad tátil |
| **Acelerar / Correr** | `Shift` | Toque contínuo |
| **Olhar / Orientar Visão** | Arraste com Mouse / Pointer Lock | Swipe na tela ou Giroscópio |
| **Interagir / Inspecionar** | `E` ou `Enter` | Toque direto na obra / vitrine |
| **Setores Rápidos** | `1`, `2`, `3`, `4` (Som → Vídeos → Stills → Santuário) | Seletor na barra inferior |
| **Ver Acervo Completo** | `TAB` (Matriz Frontal 4x2 com raycasting) | Botão Acervo no HUD |
| **Estojo do CD (17 Faixas)**| `F` ou clique para virar; `↑`/`↓` para trocar faixa | Toque na capa / lista |
| **Filtro DJ (DSP)** | `[` / `]` ou `O` / `P` (Low-pass & High-pass) | Knob tátil no HUD |
| **Fidelidade Gráfica** | `G` (Leve / Médio / Alto) | Seletor no menu |
| **Sobre & Contato** | `C` | Botão no menu superior |
| **Mudo Global** | `M` | Botão de áudio no header |

---

## ☁️ Arquitetura de CDN & Edge Storage (Bunny.net)

- **Pull Zone Oficial:** `https://gigantera-penumbra.b-cdn.net`
- **Região de Baixa Latência:** São Paulo (`br.storage.bunnycdn.com`)
- **Streaming de Mídia:** Suporte a HTTP 206 (Byte-Range Requests) para início instantâneo de streaming de áudio e vídeo em alta definição sem bloqueio de carregamento.
- **Modelos Locais de Resposta Instantânea:**
  - `public/models/espinhaco.glb` (Malha PBR 12MB)
  - `public/models/espinhaco_points.bin` (586KB nuvem com 50.000 coordenadas)

---

## 🛠️ Comandos de Operação

```bash
# Instalação de dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Checagem rigorosa de tipos TypeScript (0 erros garantidos)
npx tsc --noEmit

# Compilação de produção
npm run build

# Pré-visualização do bundle compilado
npm run preview
```

---

## 🚀 Deploy Contínuo (Vercel & GitHub)

- **Deploy Automático:** Qualquer push para a branch `main` do repositório `Pelimotion/gigantera-portfolio` dispara o build e deploy instantâneo na Vercel associado ao domínio `gigantera.xyz`.
