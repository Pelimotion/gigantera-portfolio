/**
 * Animated Favicon Driver (G -> I -> G -> A @ 0.5s per letter)
 * Cycles letters G, I, G, A with Helvetica Neue Bold on an offscreen canvas
 * ensuring 100% reliable cross-browser animation in Chrome, Safari, and Firefox tab bars.
 */
export function initAnimatedFavicon(): () => void {
  const letters = ['G', 'I', 'G', 'A'];
  let currentIdx = 0;
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};

  let faviconLink = document.getElementById('dynamic-favicon') as HTMLLinkElement | null;
  if (!faviconLink) {
    faviconLink = document.querySelector('link[rel="icon"]') as HTMLLinkElement | null;
  }
  if (!faviconLink) {
    faviconLink = document.createElement('link');
    faviconLink.rel = 'icon';
    faviconLink.id = 'dynamic-favicon';
    document.head.appendChild(faviconLink);
  }

  const renderFrame = (char: string) => {
    ctx.clearRect(0, 0, 64, 64);

    // Dark rounded squircle badge for contrast across all OS/browser tab themes
    ctx.fillStyle = '#0b0e0d';
    ctx.beginPath();
    const r = 14;
    const s = 64;
    ctx.moveTo(r, 0);
    ctx.arcTo(s, 0, s, s, r);
    ctx.arcTo(s, s, 0, s, r);
    ctx.arcTo(0, s, 0, 0, r);
    ctx.arcTo(0, 0, s, 0, r);
    ctx.closePath();
    ctx.fill();

    // Hairline border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.16)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Typography: Helvetica Neue Bold
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 42px "Helvetica Neue", Helvetica, Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(char, 32, 34);

    if (faviconLink) {
      faviconLink.href = canvas.toDataURL('image/png');
    }
  };

  // Initial frame
  renderFrame(letters[0]);

  const intervalId = window.setInterval(() => {
    currentIdx = (currentIdx + 1) % letters.length;
    renderFrame(letters[currentIdx]);
  }, 500); // 0.5s per letter

  return () => {
    clearInterval(intervalId);
  };
}
