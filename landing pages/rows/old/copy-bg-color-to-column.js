// This script is for the situation when columns need custom colors
// The color is set on an element with style="background-color:xxx"
// and this attribute set: data-copy-bg-color-to-column

document.addEventListener('DOMContentLoaded', function() {
  var elements = document.querySelectorAll('[data-copy-bg-color-to-column]');

  elements.forEach(function(elem) {
    var bgColor = elem.style.backgroundColor;

    // climb up the tree, untill we find an element with "ao-column" class
    var hasClass = false;
    while (!hasClass && elem && elem !== document) {
      elem = elem.parentNode;
      hasClass = elem.className.split(/\s/).some(function(c){
        return c == 'ao-column';
      });
    }
    if (hasClass) {
      elem.style.backgroundColor = bgColor;
    }

  });
});
