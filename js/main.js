// Лайтбокс: клик по картинке в .screenshot — открыть в полном размере
(function () {
  function openLightbox(src, alt) {
    var overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-label', 'Увеличить изображение');
    var img = document.createElement('img');
    img.src = src;
    img.alt = alt || '';
    var close = document.createElement('button');
    close.className = 'lightbox-close';
    close.setAttribute('type', 'button');
    close.setAttribute('aria-label', 'Закрыть');
    close.textContent = '×';
    overlay.appendChild(img);
    overlay.appendChild(close);
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    function closeLightbox() {
      document.body.removeChild(overlay);
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    }
    function onKey(e) {
      if (e.key === 'Escape') closeLightbox();
    }
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay || e.target === close) closeLightbox();
    });
    document.addEventListener('keydown', onKey);
  }

  document.addEventListener('click', function (e) {
    var img = e.target.closest('.screenshot img');
    if (img && img.src) {
      e.preventDefault();
      openLightbox(img.src, img.alt);
    }
  });
})();
