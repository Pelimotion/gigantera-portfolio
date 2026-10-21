import React, { useEffect, useState, useMemo } from 'react';
import { useAppStore } from '../../core/store';
import { getMergedSiteConfig } from '../../data/configBridge';

export const IntroSequence: React.FC = () => {
  const introPhase = useAppStore((s) => s.introPhase);
  const setIntroPhase = useAppStore((s) => s.setIntroPhase);
  const setTutorialDocked = useAppStore((s) => s.setTutorialDocked);
  const setViewMode = useAppStore((s) => s.setViewMode);
  const hasPlayerMoved = useAppStore((s) => s.hasPlayerMoved);
  const isHoldingCD = useAppStore((s) => s.isHoldingCD);
  const isMobile = useAppStore((s) => s.isMobile);

  const [isGlidingDown, setIsGlidingDown] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const dismiss = (delay = 450) => {
    setIsGlidingDown(true);
    setTutorialDocked(true);
    setTimeout(() => {
      setIsDone(true);
      setIntroPhase('ready');
    }, delay);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        e.stopPropagation();
        setViewMode('archive');
        dismiss(450);
      }
    };

    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => {
      window.removeEventListener('keydown', handleKeyDown, { capture: true });
    };
  }, [setViewMode]);

  // Se o jogador interagiu diretamente e o avatar se moveu (WASD/setas) ou pegou o CD
  useEffect(() => {
    if ((hasPlayerMoved || isHoldingCD) && !isDone) {
      dismiss(450);
    }
  }, [hasPlayerMoved, isHoldingCD, isDone]);

  const siteConfig = useMemo(() => getMergedSiteConfig(), []);

  if (isDone || introPhase === 'ready') return null;

  const handleEnter3D = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    try {
      const canvas = document.querySelector('#gallery-3d-viewport canvas') as HTMLElement;
      if (canvas && typeof canvas.requestPointerLock === 'function' && !useAppStore.getState().isMobile) {
        const p = canvas.requestPointerLock() as any;
        if (p && typeof p.catch === 'function') p.catch(() => {});
      }
    } catch {}
    window.dispatchEvent(new CustomEvent('gigantera:request-lock'));
    dismiss(450);
  };

  const handleEnterArchive = (e: React.MouseEvent) => {
    e.stopPropagation();
    setViewMode('archive');
    dismiss(450);
  };

  return (
    <div
      className={`intro-spatial-overlay ${isGlidingDown ? 'is-gliding-down' : ''}`}
      onClick={() => handleEnter3D()}
      aria-label="Introdução ao Gigantera"
    >
      <div 
        className="intro-floating-cue" 
        onClick={() => handleEnter3D()}
      >
        {/* Curatorial Header */}
        <div className="intro-curatorial-pill font-mono">
          <span>PORTFÓLIO & DIREÇÃO DE ARTE</span>
          <span className="curatorial-dot">·</span>
          <span>FELIPE CONCEIÇÃO</span>
        </div>

        <h1 className="cue-hero-title">GIGANTERA</h1>
        <p className="cue-curatorial-desc">
          Pavilhão arquitetural imersivo. Uma travessia tridimensional brutalista por videoarte cinética,
          escultura fóssil em WebGL e síntese de áudio autoral.
        </p>

        {/* Controls Block */}
        {isMobile ? (
          <div className="intro-controls-block font-mono is-mobile-controls">
            <div className="intro-controls-title">NAVEGAÇÃO TÁTIL</div>

            <div className="intro-controls-row">
              <span className="intro-touch-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path>
                  <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"></path>
                  <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"></path>
                  <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path>
                </svg>
              </span>
              <span>Arraste com o dedo para explorar em 360°</span>
            </div>

            <div className="intro-controls-separator" />

            <div className="intro-controls-row">
              <span className="intro-touch-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="22" y1="12" x2="18" y2="12"></line>
                  <line x1="6" y1="12" x2="2" y2="12"></line>
                  <line x1="12" y1="6" x2="12" y2="2"></line>
                  <line x1="12" y1="22" x2="12" y2="18"></line>
                </svg>
              </span>
              <span>Toque nas obras para aproximar e inspecionar</span>
            </div>

            <div className="intro-controls-separator" />

            <div className="intro-controls-row">
              <span className="intro-touch-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </span>
              <span>Toque no CD na entrada para ouvir a trilha sonora</span>
            </div>
          </div>
        ) : (
          <div className="intro-controls-block font-mono">
            <div className="intro-controls-title">CONTROLES & EXPLORAÇÃO</div>

            {/* WASD com animação suave de passos */}
            <div className="intro-controls-row">
              <div className="intro-wasd-grid">
                <span className="intro-wasd-spacer" />
                <kbd className="keycap keycap-anim-w">W</kbd>
                <span className="intro-wasd-spacer" />
                <kbd className="keycap keycap-anim-a">A</kbd>
                <kbd className="keycap keycap-anim-s">S</kbd>
                <kbd className="keycap keycap-anim-d">D</kbd>
              </div>
              <span>Caminhar pelo pavilhão arquitetural</span>
            </div>

            <div className="intro-controls-separator" />

            {/* Mouse Look com animação */}
            <div className="intro-controls-row">
              <span className="intro-mouse-icon">
                <svg width="18" height="24" viewBox="0 0 24 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="28" rx="10"/>
                  <path d="M12 8V13" className="mouse-wheel-anim"/>
                  <line x1="2" y1="14" x2="22" y2="14"/>
                </svg>
              </span>
              <span>Clique e arraste para olhar em 360°</span>
            </div>

            <div className="intro-controls-separator" />

            {/* E — Interagir / Inspecionar */}
            <div className="intro-controls-row">
              <div className="intro-keycap-group">
                <kbd className="keycap keycap-pulse">E</kbd>
                <span className="keycap-separator">/</span>
                <span className="keycap-inline-label">CLIQUE</span>
              </div>
              <span>Inspecionar obras & abrir cinema imersivo</span>
            </div>

            <div className="intro-controls-separator" />

            {/* TAB — Acervo & 1-5 Atalhos */}
            <div className="intro-controls-row intro-controls-row-split">
              <div className="intro-ctrl-sub">
                <kbd className="keycap keycap-sm">TAB</kbd>
                <span>Catálogo em grade</span>
              </div>
              <div className="intro-ctrl-sub">
                <div className="intro-num-pills">
                  <span className="pill-digit">1</span>
                  <span className="pill-digit">2</span>
                  <span className="pill-digit">3</span>
                  <span className="pill-digit">4</span>
                  <span className="pill-digit">5</span>
                </div>
                <span>Saltar setores</span>
              </div>
            </div>
          </div>
        )}

        {/* Ações de Entrada: Minimalista Obsidian Glass sem gradientes de cores */}
        <div className="intro-actions-cluster font-mono">
          <button
            type="button"
            className="intro-cta-primary-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleEnter3D();
            }}
            aria-label="Entrar no Pavilhão e navegar"
          >
            <span className="intro-cta-icon" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" fill="currentColor"></polygon>
              </svg>
            </span>
            <span className="intro-cta-text">
              {isMobile ? 'TOCAR PARA ENTRAR' : 'ENTRAR NO PAVILHÃO'}
            </span>
          </button>

          <button
            type="button"
            className="intro-cta-secondary-btn"
            onClick={handleEnterArchive}
            title="Alternar para catálogo em grade (TAB)"
          >
            <kbd className="keycap keycap-xs">TAB</kbd>
            <span>Ver acervo completo em grade</span>
          </button>
        </div>

        {/* Micro-dica minimalista */}
        <div className="intro-click-to-start-hint font-mono">
          <span>pressione qualquer tecla ou clique para iniciar</span>
        </div>
      </div>
    </div>
  );
};
