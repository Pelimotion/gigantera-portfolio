import React, { useState, useEffect } from 'react';
import { useAppStore } from '../../core/store';

export const ArtistBioModal: React.FC = () => {
  const isBioOpen = useAppStore((s) => s.isBioOpen);
  const setBioOpen = useAppStore((s) => s.setBioOpen);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setBioOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [setBioOpen]);

  if (!isBioOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('felipe@pelimotion.art');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="bio-artist-name"
      onClick={(e) => {
        if (e.target === e.currentTarget) setBioOpen(false);
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 90,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(5, 6, 6, 0.96)',
        backdropFilter: 'blur(24px) saturate(150%)',
        WebkitBackdropFilter: 'blur(24px) saturate(150%)',
        color: '#f4f3ef',
        padding: '5vh 5vw',
        overflowY: 'auto'
      }}
    >
      <div style={{ maxWidth: '1000px', width: '100%', display: 'flex', flexDirection: 'column', gap: '6vh', position: 'relative' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2vh' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.2em', color: 'var(--accent-gold)' }}>
            [MANIFESTO & CONTATO]
          </span>
          <button
            onClick={() => setBioOpen(false)}
            aria-label="Fechar biografia e contato"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: '#fff',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '0.1em',
              opacity: 0.6,
              transition: 'opacity 0.3s'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
          >
            [✕ FECHAR / ESC]
          </button>
        </div>

        {/* Content */}
        <div style={{ display: 'flex', gap: '8vw', flexWrap: 'wrap' }}>
          
          {/* Manifesto Column */}
          <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '3vh' }}>
            <h2 id="bio-artist-name" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0 }}>
              Felipe<br/>Conceição
            </h2>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
              Gigantera · Artista Digital, Escultura Computacional & Som
            </div>

            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', fontWeight: 300, maxWidth: '600px' }}>
              <strong style={{ color: '#fff', fontWeight: 500 }}>Gigantera</strong> é o pavilhão digital de Felipe Conceição. Um espaço tridimensional brutalista onde esculturas estáticas, cinética em vídeo e áudio autoral flutuam entre vitrines de vidro. Você não navega. Você atravessa.
            </p>

            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', fontWeight: 300, maxWidth: '600px' }}>
              Felipe Conceição atua como <strong style={{ color: '#fff', fontWeight: 500 }}>Gigantera</strong>, articulando código, mídia generativa e projeção com a fisicalidade de prata, aço, areia e redes de pesca. Sua pesquisa cria atrito entre o acabamento polido da indústria de imagem e o apagamento de sua herança territorial caiçara, investigando a perda do tempo orgânico na aceleração do modelo econômico.
            </p>

            {/* Pillars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5vh', marginTop: '2vh' }}>
              {[
                { n: '01', l: 'STILL', d: 'Escultura digital e fotogrametria mineral' },
                { n: '02', l: 'VÍDEO', d: 'Cinética e simulação estocástica de partículas' },
                { n: '03', l: 'SOM', d: 'Síntese de música eletrônica e dispersão acústica' }
              ].map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: '2vw', alignItems: 'baseline', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1vh' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent-gold)', minWidth: '40px' }}>{p.n} // {p.l}</span>
                  <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>{p.d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '4vh', justifyContent: 'center' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent-coral)', letterSpacing: '0.1em' }}>[TRANSMISSÃO DIRETA]</span>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.6)' }}>
                Disponível para comissões curatoriais, direção de arte, instalações imersivas e colaborações sonoras.
              </p>
              
              <div 
                onClick={handleCopyEmail}
                style={{ 
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                  padding: '1.5vh 1.5vw', background: 'rgba(255,255,255,0.03)', 
                  border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', letterSpacing: '0.05em' }}>felipe@pelimotion.art</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent-gold)' }}>
                  {copiedEmail ? '✓ COPIADO!' : '[COPIAR]'}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1vh' }}>
              {[
                { l: 'WHATSAPP', url: 'https://wa.me/5547999999999' },
                { l: 'INSTAGRAM', url: 'https://instagram.com/pelimotion' },
                { l: 'ESTÚDIO PELIMOTION', url: 'https://www.pelimotion.art' },
                { l: 'ACERVO VIMEO', url: 'https://vimeo.com' }
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '1vh 0', borderBottom: '1px solid rgba(255,255,255,0.05)',
                    textDecoration: 'none', color: 'rgba(255,255,255,0.6)',
                    fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', transition: 'color 0.3s'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                >
                  <span>{link.l}</span>
                  <span style={{ opacity: 0.5 }}>↗</span>
                </a>
              ))}
            </div>

            <div style={{ marginTop: '2vh', padding: '2vh 1.5vw', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '1vh' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>[ATELIÊ & PIPELINE]</span>
              <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' }}>
                OPERAÇÕES SEDIADAS EM <a href="https://share.google/WR6ZovOEDJxrJ4SCp" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)', textDecoration: 'none' }}>TOCA.HUB</a>
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.05em', marginTop: '1vh' }}>
                RENDERIZADO COM THREE.JS & WEB AUDIO API
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
