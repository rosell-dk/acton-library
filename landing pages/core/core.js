/*
Core.
Version: 1.0

General utility functions for Act-On landing pages

*/
function findElementParents(elementSelector, parentSelector) {
  var elements = document.querySelectorAll(elementSelector);

  var result = [];
  elements.forEach(function(elem) {

    // climb up the tree, until we find an element that matches parentSelector
    var foundMatch = false;
    while (!foundMatch && elem && elem !== document) {
      elem = elem.parentElement;
      foundMatch = elem.matches(parentSelector);
    }

    if (foundMatch) {
      // avoid duplicates
      if (result.indexOf(elem) == -1) {
        result.push(elem);
      }
    }
  });
  return result;
}

function addClassToElements(arr, className) {
  arr.forEach(function(elem) {
    elem.className += (' ' + className);
  });
}

/*
 Usage:
   To set a class on all colmuns that contains an image, you'd do like this:

   addClassToElementParents('img', '.bb-column', 'has-image');
 */
function addClassToElementParents(elementSelector, parentSelector, className) {
  addClassToElements(findElementParents(elementSelector, parentSelector), className);
}
