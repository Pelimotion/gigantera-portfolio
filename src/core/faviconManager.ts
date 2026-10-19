/**
 * FAVICON ANIMATOR — G-I-G-A
 * Gera dinamicamente no browser um favicon brutalista animado
 * que cicla as letras G - I - G - A a cada 500ms via canvas 2D de alta definição.
 */

export function startAnimatedFavicon(): () => void {
  if (typeof document === 'undefined') return () => {};

  const letters = ['G', 'I', 'G', 'A'];
  let currentIdx = 0;

  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};

  let faviconLink = document.querySelector<HTMLLinkElement>("link[rel='icon']");
  if (!faviconLink) {
    faviconLink = document.createElement('link');
    faviconLink.rel = 'icon';
    document.head.appendChild(faviconLink);
  }

  const renderFrame = () => {
    const char = letters[currentIdx];
    currentIdx = (currentIdx + 1) % letters.length;

    ctx.clearRect(0, 0, 64, 64);

    // Fundo brutalista escuro fosco com borda fina em ouro/ciano
    ctx.fillStyle = '#06090c';
    ctx.fillRect(0, 0, 64, 64);

    ctx.strokeStyle = '#4deeea';
    ctx.lineWidth = 3;
    ctx.strokeRect(1.5, 1.5, 61, 61);

    // Tipografia brutalista forte e nítida
    ctx.font = '900 42px "Space Mono", "Helvetica Neue", Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Stroke sutil para espessura gráfica
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#000000';
    ctx.strokeText(char, 32, 33);

    // Preenchimento branco mineral nítido
    ctx.fillStyle = '#ffffff';
    ctx.fillText(char, 32, 33);

    faviconLink!.href = canvas.toDataURL('image/png');
  };

  renderFrame();
  const intervalId = window.setInterval(renderFrame, 500);

  return () => {
    window.clearInterval(intervalId);
  };
}
