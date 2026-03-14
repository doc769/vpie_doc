(function () {
  var watched = [
    { sel: 'html',                       label: 'html' },
    { sel: 'body',                       label: 'body' },
    { sel: '.navbar',                    label: 'navbar' },
    { sel: '.main-wrapper',              label: 'main-wrapper' },
    { sel: 'aside.theme-doc-sidebar-container', label: 'sidebar-container' },
    { sel: 'nav.menu',                   label: 'sidebar-nav' },
    { sel: 'main .container',            label: 'content-container' },
  ];

  function snapshot() {
    var result = {};
    watched.forEach(function (w) {
      var el = document.querySelector(w.sel);
      if (el) {
        var r = el.getBoundingClientRect();
        result[w.label] = {
          x: Math.round(r.left),
          w: Math.round(r.width),
          scrollW: el.scrollWidth,
          offsetW: el.offsetWidth,
        };
      }
    });
    result['scrollbarW'] = window.innerWidth - document.documentElement.clientWidth;
    result['windowW']   = window.innerWidth;
    return result;
  }

  function diff(before, after) {
    Object.keys(after).forEach(function (key) {
      var b = before[key], a = after[key];
      if (!b) return;
      if (typeof a === 'object') {
        Object.keys(a).forEach(function (prop) {
          if (b[prop] !== a[prop]) {
            console.warn('[layout-shift] ' + key + '.' + prop + ': ' + b[prop] + ' → ' + a[prop]);
          }
        });
      } else if (b !== a) {
        console.warn('[layout-shift] ' + key + ': ' + b + ' → ' + a);
      }
    });
  }

  document.addEventListener('click', function (e) {
    var summary = e.target.closest('summary');
    if (!summary) return;
    var before = snapshot();
    console.group('[layout-shift] details toggle');
    console.log('BEFORE:', JSON.parse(JSON.stringify(before)));
    // check after next paint
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        var after = snapshot();
        console.log('AFTER: ', JSON.parse(JSON.stringify(after)));
        diff(before, after);
        console.groupEnd();
      });
    });
  });

  console.log('[layout-shift] debug script loaded. Open a details item to see layout changes.');
})();
