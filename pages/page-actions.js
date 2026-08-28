(() => {
  const base = location.pathname.split('/').pop().replace(/\.html$/i, '');
  const spec = `../specs/${base}.md`;
  const style = document.createElement('style');
  style.textContent = `
    .catalog-page-actions { position: fixed; right: 20px; bottom: 20px; z-index: 9999; display: flex; gap: 8px; padding: 8px; border: 1px solid rgba(127,127,127,.28); border-radius: 14px; background: color-mix(in srgb, Canvas 92%, transparent); box-shadow: 0 12px 30px rgba(0,0,0,.18); backdrop-filter: blur(14px); }
    .catalog-page-actions button, .catalog-page-actions a { min-height: 44px; display: inline-flex; align-items: center; justify-content: center; padding: 0 14px; border: 1px solid currentColor; border-radius: 9px; background: Canvas; color: CanvasText; font: 700 13px/1 system-ui, -apple-system, sans-serif; text-decoration: none; cursor: pointer; }
    .catalog-page-actions .catalog-copy { background: CanvasText; color: Canvas; }
    .catalog-page-actions button:hover, .catalog-page-actions a:hover { transform: translateY(-1px); opacity: .86; }
    .catalog-page-actions button:focus-visible, .catalog-page-actions a:focus-visible { outline: 3px solid Highlight; outline-offset: 3px; }
    @media (max-width: 640px) { .catalog-page-actions { right: 12px; bottom: 12px; left: 12px; } .catalog-page-actions button, .catalog-page-actions a { flex: 1; } }
  `;
  document.head.append(style);
  const dock = document.createElement('div');
  dock.className = 'catalog-page-actions';
  dock.setAttribute('aria-label', 'Page actions');
  dock.innerHTML = '<a href="../index.html" aria-label="Back to catalogue">← 返回主页</a><button class="catalog-copy" type="button">复制 Markdown</button>';
  document.body.append(dock);
  dock.querySelector('.catalog-copy').addEventListener('click', async (event) => {
    const button = event.currentTarget;
    const original = button.textContent;
    try {
      const response = await fetch(spec);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      await navigator.clipboard.writeText(await response.text());
      button.textContent = '已复制 Markdown';
    } catch {
      button.textContent = '打开 Markdown';
      setTimeout(() => { location.href = spec; }, 500);
    }
    setTimeout(() => { button.textContent = original; }, 1500);
  });
})();
