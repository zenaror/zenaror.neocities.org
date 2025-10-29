(function () {
  var wraps = document.getElementsByClassName('mrqWrap');

  for (var i = 0; i < wraps.length; i++) {
    (function(wrap){
      var inner = wrap.getElementsByClassName('mrqInner')[0];
      var speed = parseInt(wrap.getAttribute('data-speed'), 10) || 2;
      var delay = 20;
      var timer = null;
      var wrapW = 0;
      var innerW = 0;

      function measure() {
        wrapW = wrap.offsetWidth || wrap.clientWidth || 0;
        innerW = inner.offsetWidth || inner.clientWidth || 0;
        inner.style.left = wrapW + 'px';
      }

      function tick() {
        var cur = parseInt(inner.style.left, 10);
        if (isNaN(cur)) { cur = wrapW; }
        cur = cur - speed;
        if (cur + innerW <= 0) { cur = wrapW; }
        inner.style.left = cur + 'px';
      }

      function start() {
        if (timer) clearInterval(timer);
        timer = setInterval(tick, delay);
      }

      function init() {
        measure();
        start();
      }

      if (window.addEventListener) {
        window.addEventListener('load', init, false);
      } else if (window.attachEvent) {
        window.attachEvent('onload', init);
      } else {
        window.onload = init;
      }
    })(wraps[i]);
  }
})();
