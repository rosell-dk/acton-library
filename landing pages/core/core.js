/*
Core.
Version: 1.0.1

General utility functions for Act-On landing pages

*/

/* Polyfill for IE */
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector;
}

function findElementParents(elementSelector, parentSelector) {
  var elements = document.querySelectorAll(elementSelector);

  var result = [];
//  elements.forEach(function(elem) {

  for (var i=0; i<elements.length; i++) {
    var elem = elements[i];
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
  };
  return result;
}

function addClassToElements(arr, className) {
//  arr.forEach(function(elem) {
  for (var i=0; i<arr.length; i++) {
    var elem = arr[i];
    elem.className += (' ' + className);
  };
}

/*
 Usage:
   To set a class on all columns that contains an image, you'd do like this:

   addClassToElementParents('img', '.bb-column', 'has-image');
 */
function addClassToElementParents(elementSelector, parentSelector, className) {
  addClassToElements(findElementParents(elementSelector, parentSelector), className);
}
