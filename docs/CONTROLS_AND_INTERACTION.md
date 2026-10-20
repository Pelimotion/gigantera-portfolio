# GIGANTERA — Sistema de Controles, Câmera & Interação

> **Versão:** 2.0 (Outubro 2026)  
> **Arquivos Fonte:** `src/core/playerController.ts`, `src/components/canvas/GalleryScene3D.tsx`

---

## 1. Visão Geral do Sistema de Locomoção & Câmera

O sistema de locomoção de Gigantera foi projetado para oferecer a sensação de peso, fluidez e escala de um pavilhão arquitetural real. Ele atende tanto a desktops com mouse e teclado (padrão FPS com Pointer Lock) quanto a dispositivos móveis com toque e giroscópio.

---

## 2. Máquina de Estados da Câmera (Desktop)

A câmera opera em dois modos distintos no desktop:

```
                  ┌────────────────────────────────────────┐
                  │          MODO DESBLOQUEADO             │
                  │  - Cursor livre visível na tela        │
                  │  - Permite clicar em botões e menus    │
                  │  - Clique-e-arraste rotaciona a câmera │
                  └──────────────────┬─────────────────────┘
                                     │
         Clique no espaço vazio 3D   │   ESC / Pressionar Tecla de Saída
           (chão, parede ou ar)      │   ou Fechar Modo Cinema
                                     ▼
                  ┌────────────────────────────────────────┐
                  │            MODO POINTER LOCK           │
                  │  - Cursor travado no centro (invisível)│
                  │  - Giro 360° infinito sem bordas       │
                  │  - Retículo tático central [ · ]       │
                  │  - Mira constante e natural (padrão FPS)│
                  └────────────────────────────────────────┘
```

### Regras Críticas de Implementação:
1. **Clique no Vazio = Trava a Mira**: Clicar em qualquer ponto do pavilhão que não seja uma vitrine ou botão solicita `playerController.requestLock()`.
2. **Cliques Vazios NUNCA Abrem Obras**: Não existe fallback para `proximityArtwork` no clique. Clicar no chão ou na parede não abre obras por acidente.
3. **Sem Travamento em Bordas de Tela**:
   - Quando `this.isLocked === true`: A rotação utiliza `e.movementX` e `e.movementY` diretamente, permitindo rotação ilimitada sem que o cursor encoste nas bordas do monitor.
   - Quando `this.isLocked === false`: O cursor navega livremente sem rotacionar a câmera sozinho; caso o visitante clique e arraste (`isPointerDown`), a câmera gira suavemente calculando o delta com sensibilidade balanceada.

---

## 3. Matemática de Rotação e Movimento (PlayerController)

### Variáveis Principais:
- `yaw` (Rotação Horizontal): Modulado por `movementX * mouseSensitivity`. Sentido horário/anti-horário livre sem limites de ângulo ($-\infty < \text{yaw} < \infty$).
- `pitch` (Inclinação Vertical): Modulado por `movementY * mouseSensitivity`.
  - **Clamp Estrito**: $\text{pitch} \in [-0.72, +0.72]$ radianos (~$\pm 41^\circ$).
  - Evita que a câmera dê piruetas verticais ou quebre a perspectiva das vitrines.
- `headBobX` / `headBobY` (Head Bobbing Sutil):
  - Oscilação senoidal aplicada conforme o jogador caminha (`walkSpeed = 10.5 m/s`, `sprintMultiplier = 1.65`).
  - Intensidade `0.035` para criar peso físico sem causar náusea visual.

---

## 4. Pipeline de Raycasting & Interação Física

O raycasting foi reformulado para ser **100% determinístico e físico**, eliminando interações acidentais:

```
[Entrada do Usuário: Clique / Tecla E]
                 │
                 ▼
       Está no Modo Cinema ou Acervo?
          ├── SIM ──> Executa ação específica da tela e encerra
          └── NÃO
                 │
                 ▼
       Raycaster lançado contra candidatos válidos:
       - vitrines (glassMesh)
       - papéis (paperMesh)
       - plaquinhas de latão (plaqueMesh)
       - estojo do CD (cdCaseMesh, cdPaperMesh, cdBackMesh)
                 │
                 ▼
       Houve colisão dentro dos limites de distância?
       - Vitrines de Obra: distância <= 7.0m (corredor) ou <= 10.0m (santuário)
       - Estação do CD: distância <= 3.5m
                 │
          ┌──────┴─────────────────────────────────┐
          │                                        │
        [SIM]                                    [NÃO]
          │                                        │
  Abre a Obra Específica                 O que foi clicado?
  ou Pega o Álbum de CD                            │
                                   ┌───────────────┴───────────────┐
                                   │                               │
                            [CLIQUE NO VAZIO]                 [TECLA E]
                                   │                               │
                          Solicita Pointer Lock        Testa se está a < 3.5m
                          para assumir controle FPS     E olhando reto para obra
                                                       (ângulo frontal dot > 0.65)
                                                                   │
                                                            ┌──────┴──────┐
                                                            │             │
                                                          [SIM]         [NÃO]
                                                            │             │
                                                        Abre Obra    Ignora Ação
```

### Distâncias Máximas de Interação:
| Objeto | Distância Máxima | Justificativa Curatorial |
| :--- | :--- | :--- |
| **Vitrines do Corredor** | **7.0 metros** | Exige aproximação da baía correspondente; evita abrir quadros distantes no horizonte |
| **Santuário do Espinhaço** | **10.0 metros** | Acomoda a escala monumental de 8 metros da escultura |
| **Estação do Álbum CD** | **3.5 metros** | Exige aproximação real do pedestal no Foyer |

---

## 5. Mobile & Touch Engine (Padrão AAA)

Em smartphones e tablets (`state.isMobile === true`):
1. **Virtual Analog Joystick**:
   - Ativado pelo toque no quadrante inferior esquerdo (`moveTouchId`).
   - Raio analógico máximo de `46px` com deadzone de `5px` para amortecer ruídos de toque.
   - Comunica vetor normalizado para `setJoystickData`.
2. **Swipe de Orientação (Look)**:
   - Dedo na metade direita da tela (`lookTouchId`) translada `yaw` e `pitch`.
3. **Tap-to-Walk / Tap-to-Inspect**:
   - Toques rápidos sem arrasto (< 360ms e deslocamento < 7px) acionam `onTouchTap(x, y)`.
   - Se o toque acertar uma obra distante, o jogador desliza com glide cinemático suave até o ponto ideal de contemplação (`layout.viewingSpots`).

---

## 6. Como Adicionar Novos Objetos Interativos com Segurança

Para adicionar um novo elemento interativo na cena 3D (ex.: nova escultura, console interativo, totem):

1. **Tag do Objeto**:
   ```ts
   (meuNovoMesh as any).artworkData = art; // se for obra
   // OU
   (meuNovoMesh as any).isMeuElementoCustom = true;
   ```
2. **Registro nos Candidatos**:
   Adicione o mesh na lista `candidates` em:
   - `updateRaycaster()` (para acender a mira tática `[ ⌕ ]`)
   - `onClick()` (para responder ao clique do mouse)
   - `playerController.onInteract()` (para responder à tecla `[E]`)
3. **Definição de Raio de Distância**:
   Sempre filtre por distância no `validHits`:
   ```ts
   const validHits = hits.filter(h => (h.object as any).isMeuElementoCustom ? h.distance <= 4.0 : ...);
   ```
4. **Proteção Contra Cliques Fantasmas**:
   Ao fechar qualquer modal aberto pelo elemento, registre:
   ```ts
   useAppStore.getState().set({ lastActionCloseTime: Date.now() });
   ```
   Isso ativa automaticamente o cooldown de 350ms, evitando que o mesmo clique de fechar reabra o elemento.
