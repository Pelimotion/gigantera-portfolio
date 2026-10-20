# GIGANTERA — Roteiro de Melhorias Futuras & Backlog Arquitetural

> **Versão:** 2.0 (Outubro 2026)  
> **Objetivo:** Guia pragmático para sessões futuras de desenvolvimento, otimização e expansão de recursos.

---

## 1. Otimizações de Performance & Escalabilidade (Alta Prioridade)

### 1.1 LOD (Level of Detail) Dinâmico nas Vitrines
- **Problema Atual**: Todas as vitrines usam `MeshPhysicalMaterial` com transmissão óptica e cálculo de espessura de vidro, mesmo as que estão a 40 metros de distância no horizonte.
- **Solução Proposta**:
  - Implementar chaveamento de LOD com base na distância da câmera:
    - `< 14m`: Vidro PBR completo (`MeshPhysicalMaterial`, transmissão, IOR, rugosidade e reflexos físicos).
    - `> 14m`: Vidro simplificado (`MeshStandardMaterial` transparente com opacity 0.8 e mapa especular estático).
  - **Ganho Esperado**: Redução de até 35% no tempo de rasterização de fragmentos em GPUs integradas.

### 1.2 Frustum Culling e Pausa Inteligente de Vídeos
- **Problema Atual**: Os elementos de vídeo em background rodam simultaneamente em loop contínuo.
- **Solução Proposta**:
  - No loop de animação, verificar se o bounding box da vitrine está dentro do frustum da câmera (`cameraFrustum.intersectsObject(item.group)`).
  - Se estiver fora da visão ou a mais de 25m, invocar `video.pause()`; ao reentrar no campo visual, invocar `video.play()`.
  - **Ganho Esperado**: Liberação imediata de instâncias do decodificador de vídeo por hardware da GPU, evitando gargalos em notebooks e smartphones.

---

## 2. Experiência Sonora & Áudio Espacial (Média Prioridade)

### 2.1 Panning Binaural 3D com HRTF (PositionalAudio)
- **Proposta**:
  - Implementar alternador no HUD: `[ÁUDIO GLOBAL (HEADPHONES) | ACÚSTICA DA SALA (3D ESPACIAL)]`.
  - No modo acústico, a música do álbum é emitida como uma fonte pontual tridimensional situada exatamente sobre o pedestal do CD (`x = 2.8, z = 18.0`).
  - Conforme o visitante caminha pelo corredor em direção ao santuário ($Z = -76.5\text{m}$), a música ganha atenuação exponencial e reverberação de salão brutalista, dando espaço gradativo aos sons atmosféricos da escultura.

### 2.2 Reatividade de Frequências nas Luzes do Corredor
- **Proposta**:
  - Modular a intensidade dos spotlights embutidos no teto em função dos subgraves analisados pelo `analyserNode` da música.
  - Pulso luminoso discreto e orgânico (variação de $\pm 5\%$ na intensidade), conferindo respiração viva à arquitetura.

---

## 3. Gráficos & Efeitos Visuais Avançados (Média Prioridade)

### 3.1 Pipeline de Pós-Processamento Opcional
- **Proposta**:
  - Adicionar suporte a pós-processamento via `EffectComposer` (Three.js):
    - **Bloom Seletivo**: Brilho aditivo exclusivo para as 50.000 partículas do Espinhaço e juntas da mão holográfica.
    - **Film Grain Analógico Suave**: Ruído procedural fino monocromático para eliminar banding de degradê no piso e reforçar a materialidade de fotografia analógica.
    - **Toggle de Desativação**: O usuário pode desligar efeitos pelo seletor de gráficos `[G]` para priorizar 120 FPS.

### 3.2 Iluminação Zenital Dinâmica (Ciclo Dia / Noite)
- **Proposta**:
  - Leitura do horário local do visitante:
    - **Diurno**: Luz zenital neutra filtrada pelas vigas de teto com reflexos suaves.
    - **Noturno / Galeria Fechada**: Iluminação geral reduzida, holofotes focados estritamente sobre as obras e feixe tático de lanterna suave projetado a partir da câmera do visitante.

---

## 4. Novas Plataformas & Tecnologias Emergentes (Visão de Futuro)

### 4.1 Suporte a WebXR / VR (Meta Quest, Apple Vision Pro)
- **Proposta**:
  - Habilitar `renderer.xr.enabled = true` com botão `[ENTRAR EM VR]` na barra inferior.
  - Suporte a teleportação e controle por motion controllers / rastreamento de mãos nativo no navegador do Vision Pro e Meta Quest 3.

### 4.2 Progressive BlurHash para Texturas de Ultra-Resolução
- **Proposta**:
  - Gerar strings BlurHash compactas (30 caracteres) para cada obra no catálogo.
  - No carregamento inicial, exibir instantaneamente o degradê BlurHash na vitrine antes de puxar o master WebP/AVIF em 4K da Bunny CDN, eliminando qualquer sensação de tela cinza ou vazia em conexões lentas.
