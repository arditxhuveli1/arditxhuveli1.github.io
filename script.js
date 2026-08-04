// Theme toggle: remembers the visitor's choice, otherwise follows the system.
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  function effectiveTheme() {
    var explicit = root.getAttribute('data-theme');
    if (explicit === 'dark' || explicit === 'light') return explicit;
    return media.matches ? 'dark' : 'light';
  }

  function sync() {
    var current = effectiveTheme();
    // The icon shown reflects the theme you'd switch TO on click.
    btn.setAttribute('data-theme', current);
    btn.setAttribute('aria-label',
      'Switch to ' + (current === 'dark' ? 'light' : 'dark') + ' theme');
  }

  sync();

  btn.addEventListener('click', function () {
    var next = effectiveTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    sync();
  });

  // Keep in step with the OS while the visitor hasn't picked a theme themselves.
  media.addEventListener('change', function () {
    var saved;
    try { saved = localStorage.getItem('theme'); } catch (e) {}
    if (saved !== 'dark' && saved !== 'light') sync();
  });
})();
