var aspectRatio = 640 / 360;   // You get this by inspecting the embed code from youtube

function video(options) {
  var defaultOptions = {
    aspectRatio: 640 / 360,
    selector: '.ao-video > iframe',
    addResizeHandler: true,
    maxHeight: 500,
  }

  function getOption(optionName) {
    if (options && options.hasOwnProperty(optionName)) {
      return options[optionName];
    }
    else {
      return defaultOptions[optionName];
    }
  }

  var vids = document.querySelectorAll(getOption('selector'));
  vids.forEach(function(el) {
    var h = el.offsetWidth / getOption('aspectRatio');
    h = Math.min(h, getOption('maxHeight'));
    el.style['height'] = h + 'px';
  });

  if (getOption('addResizeHandler')) {
    console.log('adding handler');
    window.addEventListener("resize", function(event) {
      options.addResizeHandler = false;
      video(options);
    });
  }
}
