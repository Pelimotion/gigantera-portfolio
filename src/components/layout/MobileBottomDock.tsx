import React, { useState, useMemo } from 'react';
import { useAppStore } from '../../core/store';
import { ARTWORKS_CATALOG, AUTHORIAL_TRACKS_CATALOG } from '../../data/artworks';
import { getGalleryOrderedArtworks } from '../../core/modularGallery';
import { PlayerController } from '../../core/playerController';
import { soundEngine } from '../../core/soundEngine';

export const MobileBottomDock: React.FC = () => {
  const galleryArtworks = useMemo(() => getGalleryOrderedArtworks(ARTWORKS_CATALOG), []);
  const proximityArtwork = useAppStore((s) => s.proximityArtwork);
  const currentArtworkIndex = useAppStore((s) => s.currentArtworkIndex);
  const nextArtwork = useAppStore((s) => s.nextArtwork);
  const prevArtwork = useAppStore((s) => s.prevArtwork);
  const navigateToArtworkIndex = useAppStore((s) => s.navigateToArtworkIndex);
  const openCinema = useAppStore((s) => s.openCinema);
  const isGyroscopeActive = useAppStore((s) => s.isGyroscopeActive);
  const setGyroscopeActive = useAppStore((s) => s.setGyroscopeActive);
  const takeCD = useAppStore((s) => s.takeCD);
  const currentAudioTrack = useAppStore((s) => s.currentAudioTrack);
  const isAudioPlaying = useAppStore((s) => s.isAudioPlaying);
  const viewMode = useAppStore((s) => s.viewMode);
  const setViewMode = useAppStore((s) => s.setViewMode);
  const toggleGuideModal = useAppStore((s) => s.toggleGuideModal);
  const cameraTargetZ = useAppStore((s) => s.cameraTargetZ);
  const hasPlayerMoved = useAppStore((s) => s.hasPlayerMoved);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerTab, setDrawerTab] = useState<'artworks' | 'audio'>('artworks');
  const [gyroToast, setGyroToast] = useState<string | null>(null);

  // A obra prioritária é a que o visitante está diante fisicamente (proximidade),
  // ou a obra sequencial indexada do percurso arquitetural da galeria:
  const isAtFoyer = !proximityArtwork && cameraTargetZ >= 13.8 && currentArtworkIndex === 0 && !hasPlayerMoved;
  const currentArt = proximityArtwork || galleryArtworks[currentArtworkIndex] || galleryArtworks[0];
  const totalArtworks = galleryArtworks.length;
  const activeIdx = galleryArtworks.findIndex((a) => a.id === currentArt.id);
  const displayIdx = activeIdx !== -1 ? activeIdx : currentArtworkIndex;
  const artNumberStr = String(displayIdx + 1).padStart(2, '0');
  const isNear = !!proximityArtwork;

  const inspectLabel = isAtFoyer
    ? 'OUVIR CD'
    : currentArt.medium === 'interactive'
    ? 'INTERAGIR'
    : 'VER OBRA';

  const inspectIcon = isAtFoyer ? '☊' : currentArt.medium === 'interactive' ? '✦' : '⌕';

  const handleToggleGyro = async () => {
    soundEngine.playTactileHoverTick();
    if (!isGyroscopeActive) {
      const granted = await PlayerController.requestOrientationPermission();
      if (granted) {
        setGyroscopeActive(true);
        setGyroToast('SENSOR 360° ATIVADO · Incline o aparelho para explorar');
        setTimeout(() => setGyroToast(null), 3500);
      } else {
        alert('Permissão de orientação de movimento foi negada pelo navegador.');
      }
    } else {
      setGyroscopeActive(false);
      setGyroToast('SENSOR 360° DESATIVADO · Arraste na tela para olhar');
      setTimeout(() => setGyroToast(null), 2500);
    }
  };

  const handleInspect = () => {
    soundEngine.playGlassPassSound();
    if (isAtFoyer) {
      takeCD();
    } else if (currentArt) {
      openCinema(currentArt);
    }
  };

  const handleOpenCD = () => {
    soundEngine.playTactileHoverTick();
    takeCD();
  };

  return (
    <nav className="mobile-tactile-dock" role="navigation" aria-label="Navegação Móvel Gigantera">
      {/* ── GAVETA TÁTIL EXPANSÍVEL (BOTTOM SHEET MODAL) ── */}
      {isDrawerOpen && (
        <div className="mobile-drawer-sheet" role="dialog" aria-label="Acervo Completo">
          <div className="mobile-drawer-drag-pill" />
          
          <div className="mobile-drawer-header">
            <div className="mobile-drawer-tabs font-mono">
              <button
                onClick={() => setDrawerTab('artworks')}
                className={`drawer-tab-btn ${drawerTab === 'artworks' ? 'is-active' : ''}`}
              >
                OBRAS [{totalArtworks}]
              </button>
              <button
                onClick={() => setDrawerTab('audio')}
                className={`drawer-tab-btn ${drawerTab === 'audio' ? 'is-active' : ''}`}
              >
                FAIXAS CD [17]
              </button>
            </div>

            <button
              onClick={() => setIsDrawerOpen(false)}
              className="drawer-close-btn font-mono"
              aria-label="Fechar lista"
            >
              ✕
            </button>
          </div>

          {drawerTab === 'artworks' ? (
            <div className="mobile-drawer-carousel">
              {galleryArtworks.map((art, idx) => (
                <button
                  key={art.id}
                  onClick={() => {
                    soundEngine.playTactileHoverTick();
                    navigateToArtworkIndex(idx);
                    setIsDrawerOpen(false);
                  }}
                  className={`drawer-art-item ${art.id === currentArt.id ? 'is-selected' : ''}`}
                >
                  <div className="drawer-art-thumb-wrap">
                    <img
                      src={art.imageSrc}
                      alt={art.title}
                      className="drawer-art-thumb"
                      loading="lazy"
                    />
                    {art.medium === 'video' && (
                      <span className="drawer-video-badge font-mono">VÍDEO</span>
                    )}
                    {art.medium === 'interactive' && (
                      <span className="drawer-interactive-badge font-mono">INTERATIVO</span>
                    )}
                  </div>
                  <div className="drawer-art-meta font-mono">
                    <span className="drawer-art-num">#{String(idx + 1).padStart(2, '0')}</span>
                    <span className="drawer-art-title">{art.title}</span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="mobile-drawer-audio-list font-mono">
              {AUTHORIAL_TRACKS_CATALOG.map((track, idx) => {
                const isThisPlaying = isAudioPlaying && currentAudioTrack.id === track.id;
                return (
                  <button
                    key={track.id}
                    onClick={() => {
                      useAppStore.getState().setCurrentAudioTrack(track);
                      soundEngine.playTrackPreview(track);
                      useAppStore.getState().setIsAudioPlaying(true);
                    }}
                    className={`drawer-audio-row ${isThisPlaying ? 'is-playing' : ''}`}
                  >
                    <span className="audio-row-track-num">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="audio-row-title">{track.title}</span>
                    <span className="audio-row-bpm">{track.bpm} BPM</span>
                    <span className="audio-row-play-state">{isThisPlaying ? '❚❚' : '▶'}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ── NOTIFICAÇÃO TÁTIL DE ESTADO DO GIROSCÓPIO / SENSOR ── */}
      {gyroToast && (
        <div className="mobile-gyro-toast font-mono" role="status" aria-live="polite">
          <span className="gyro-toast-icon">⟲</span>
          <span>{gyroToast}</span>
        </div>
      )}

      {/* ── BARRA SUPERIOR FLUTUANTE DE UTILITÁRIOS (MICRO-PILLS DISCRETAS) ── */}
      <div className="mobile-floating-utilities font-mono" role="toolbar" aria-label="Ferramentas Rápidas">
        {/* Sensor 360° (Giroscópio) */}
        <button
          onClick={handleToggleGyro}
          className={`mobile-util-pill ${isGyroscopeActive ? 'is-active' : ''}`}
          title="Ativar sensor de movimento 360° (incline o aparelho)"
          aria-pressed={isGyroscopeActive}
        >
          <span className="util-icon">⟲</span>
          <span className="util-text">{isGyroscopeActive ? '360° ATIVO' : '360°'}</span>
        </button>

        {/* CD Álbum POV */}
        <button
          onClick={handleOpenCD}
          className={`mobile-util-pill ${isAudioPlaying ? 'is-playing' : ''}`}
          title="Abrir estojo de CD em primeira pessoa"
        >
          <span className="util-icon">{isAudioPlaying ? '❚❚' : '☊'}</span>
          <span className="util-text">CD ÁLBUM</span>
        </button>

        {/* Acervo 3D em Grade */}
        <button
          onClick={() => {
            soundEngine.playTactileHoverTick();
            setViewMode(viewMode === 'archive' ? 'spatial' : 'archive');
          }}
          className={`mobile-util-pill ${viewMode === 'archive' ? 'is-active' : ''}`}
          title="Alternar entre caminhada 3D e catálogo em grade"
        >
          <span className="util-icon">⊞</span>
          <span className="util-text">ACERVO</span>
        </button>

        {/* Guia de Gestos */}
        <button
          onClick={() => {
            soundEngine.playTactileHoverTick();
            toggleGuideModal();
          }}
          className="mobile-util-pill"
          title="Guia de controles táteis"
        >
          <span className="util-icon">?</span>
          <span className="util-text">GUIA</span>
        </button>
      </div>

      {/* ── ILHA CURATORIAL FLUTUANTE NA ZONA DO POLEGAR (THUMB ZONE) ── */}
      <div className="mobile-curatorial-island">
        {/* Stepper Esquerdo: Voltar */}
        <button
          onClick={() => {
            soundEngine.playTactileHoverTick();
            prevArtwork();
          }}
          className="curatorial-step-btn font-mono"
          aria-label="Obra anterior"
          disabled={displayIdx === 0 && !hasPlayerMoved}
          title="Voltar para a obra anterior"
        >
          ‹
        </button>

        {/* Cartão Central Curatorial (Toque abre a gaveta de todas as 25 obras) */}
        <div
          className={`curatorial-info-card ${isNear ? 'is-in-proximity' : ''}`}
          onClick={() => {
            soundEngine.playTactileHoverTick();
            setIsDrawerOpen(!isDrawerOpen);
          }}
          role="button"
          tabIndex={0}
          title="Toque para ver a lista completa de obras"
        >
          <div className="curatorial-top-tagline font-mono">
            {isNear ? (
              <span className="curatorial-presence-badge">
                <span className="curatorial-live-dot" />
                <span>DIANTE DA OBRA · #{artNumberStr}</span>
              </span>
            ) : isAtFoyer ? (
              <span className="curatorial-foyer-badge">
                <span>FOYER DE ENTRADA · ÁUDIO</span>
              </span>
            ) : (
              <span className="curatorial-index-badge">
                #{artNumberStr} / {String(totalArtworks).padStart(2, '0')} · {currentArt.medium === 'video' ? 'VÍDEO' : currentArt.medium === 'interactive' ? 'INTERATIVO' : 'STILL'}
              </span>
            )}
            <span className="curatorial-open-cue">▲ LISTA</span>
          </div>

          <div className="curatorial-work-title font-display">
            {isAtFoyer ? 'ESTAÇÃO DE CD AUTORAL' : currentArt.title.toUpperCase()}
          </div>
        </div>

        {/* Botão de Ação Primária (VER / INTERAGIR / OUVIR) */}
        <button
          onClick={handleInspect}
          className={`curatorial-primary-action-btn font-mono ${isAtFoyer ? 'is-audio' : ''}`}
          aria-label={`${inspectLabel} ${currentArt.title}`}
        >
          <span className="action-icon">{inspectIcon}</span>
          <span className="action-label">{inspectLabel}</span>
        </button>

        {/* Stepper Direito: Avançar */}
        <button
          onClick={() => {
            soundEngine.playTactileHoverTick();
            nextArtwork();
          }}
          className="curatorial-step-btn font-mono"
          aria-label="Próxima obra"
          title="Avançar para a próxima obra"
        >
          ›
        </button>
      </div>
    </nav>
  );
};
