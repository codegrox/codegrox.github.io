(() => {
  const root = document.documentElement;
  const getTheme = () => root.dataset.theme || 'dark';
  const setTheme = (theme) => {
    root.dataset.theme = theme;
    localStorage.setItem('codegrox-theme', theme);
    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      button.textContent = theme === 'dark' ? 'Light' : 'Dark';
      button.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
    });
  };

  document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
    button.addEventListener('click', () => setTheme(getTheme() === 'dark' ? 'light' : 'dark'));
  });
  setTheme(getTheme());

  const header = document.querySelector('.site-header');
  const backTop = document.querySelector('.back-top');
  const onScroll = () => {
    const y = window.scrollY;
    header?.classList.toggle('scrolled', y > 8);
    backTop?.classList.toggle('visible', y > 600);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Generic before/after wipe used by Project 0.
  document.querySelectorAll('[data-wipe]').forEach((wipe) => {
    const range = wipe.querySelector('input[type="range"]');
    const top = wipe.querySelector('.wipe-top');
    const bar = wipe.querySelector('.wipe-bar');
    if (!range || !top) return;
    const update = () => {
      const pct = Number(range.value);
      top.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
      if (bar) bar.style.left = `${pct}%`;
    };
    range.addEventListener('input', update);
    update();
  });

  // Compatibility with the original Project 0 wipe ids.
  const legacyRange = document.getElementById('wipeR');
  const legacyTop = document.getElementById('wipeB');
  const legacyBar = document.getElementById('wipeBar');
  if (legacyRange && legacyTop) {
    const updateLegacyWipe = () => {
      const pct = Number(legacyRange.value);
      legacyTop.style.width = `${pct}%`;
      if (legacyBar) legacyBar.style.left = `${pct}%`;
    };
    legacyRange.addEventListener('input', updateLegacyWipe);
    updateLegacyWipe();
  }

  // Compatibility with the Project 0 dolly-zoom frame dial.
  const dial = document.getElementById('dial');
  const frame = document.getElementById('frame');
  const readout = document.getElementById('r-frame');
  const bg = document.getElementById('r-bg');
  const keep = document.getElementById('r-keep');
  if (dial && frame) {
    const frames = Array.from({ length: 4 }, (_, i) => `media/p3-aligned-${i + 1}.jpg`);
    const bgText = ['1.0', '1.3', '1.55', '1.7'];
    const keepText = ['76', '91', '87', '100'];
    const updateDial = () => {
      const i = Math.max(0, Math.min(frames.length - 1, Number(dial.value) - 1));
      frame.src = frames[i];
      if (readout) readout.textContent = String(i + 1);
      if (bg) bg.textContent = bgText[i];
      if (keep) keep.textContent = keepText[i];
    };
    dial.addEventListener('input', updateDial);
    updateDial();
  }
})();
