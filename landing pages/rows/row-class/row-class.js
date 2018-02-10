/*
   Version: 1.1

   Set class on all row-wrappers that has some content with attribute: "data-row-class"
   And optionally processes styles and classes of elements in the row.
   Styles and classes inside the ao-blocks will howover never be touched

   There will always be added a "bb-row-wrapper-wrapper" to the div containing the row-wrapper

   Note: Requires that the 'ao-block' and 'ao-row-wrapper' classes have not been removed from the row

   options:
      remove_ao_classes (boolean). Default: true.
      add_bb_classes (boolean). Default: true
      remove_ao_styles (boolean). Default: true.
      keep_ao_row_wrapper_class_and_styles (boolean). Default: false
        The ao-row-wrapper class and styles can be useful, because they allow
        setting width in act-on page properties.
        if you choose to keep it, you probably want to add this style:
          .bb-row-wrapper {width: 100%;}
      extra_classes (string). Default: ''
        extra classes to add, besides the one in the attribute
*/


function rowClass(options) {
  var defaultOptions = {
    remove_ao_classes: true,
    add_bb_classes: true,
    remove_ao_styles: true,
    keep_ao_row_wrapper_class_and_styles: false,
    extra_classes: '',
    selector: '[data-row-class]'
  }

  function getOption(optionName) {
    if (options && options.hasOwnProperty(optionName)) {
      return options[optionName];
    }
    else {
      return defaultOptions[optionName];
    }
  }


  var elements = document.querySelectorAll(getOption('selector'));

  elements.forEach(function(elem) {

    var rowClass = '';
    if (elem.hasAttribute('data-row-class')) {
      rowClass = elem.getAttribute('data-row-class');
    }
    rowClass += ' ' + getOption('extra_classes');

    // climb up the tree, untill we find an element with "ao-row-wrapper" class
    var hasClass = false;
    while (!hasClass && elem && elem !== document) {
      elem = elem.parentNode;
      if (elem.className) {
        hasClass = elem.className.split(/\s/).some(function(c){
          return c == 'ao-row-wrapper';
        });
      }
    }
    if (hasClass) {
      // We have found the containing row wrapper

      // Clean up all ao-classes on row (ao-row, ao-column, ao-column-inner, etc)
      // But we do not wish to clean up ao classes inside blocks (imageField, etc)

      // Strategy:
      // 1) Find all blocks (.ao-block)
      // 2) Remove class and styles of parents of these blocks (until ao-row-wrapper)

      var blocks = elem.querySelectorAll('.ao-block');
      blocks.forEach(function(el) {

        // climb up the tree, untill we find an element with "ao-row-wrapper" class
        var hasClass = false;
        while (!hasClass && el && el !== document) {

          if (el.className) {
            if (getOption('remove_ao_classes') && getOption('add_bb_classes')) {

              // Rename 'ao-' prefixes on classes to 'bb-'
              el.className = el.className.split(/\s/).map(function(c){
                return c.replace('ao-', 'bb-');
              }).join(' ');
            }
            else if (getOption('remove_ao_classes')) {

              // Remove all classes (whether they have 'ao-' prefixes or not!)
              el.className = '';
            }
            else if (getOption('add_bb_classes')) {

              // Add bb classes, keeping all existing classes
              el.className = el.className.split(/\s/).map(function(c){
                if (c.indexOf('ao-') >= 0) {
                  return c + ' ' + c.replace('ao-', 'bb-');
                }
                else return c;
              }).join(' ');
            }
          }

          if (getOption('remove_ao_styles')) {
            el.style = '';
          }

          el = el.parentNode;
          if (el.className) {
            hasClass = el.className.split(/\s/).some(function(c){
              return c == 'ao-row-wrapper';
            });
          }
        }

      })
    }

    if (!getOption('keep_ao_row_wrapper_class_and_styles')) {
      elem.className = '';
      elem.style = '';
    }
    if (getOption('add_bb_classes')) {
      elem.className += ' bb-row-wrapper';
    }

    elem.parentNode.className = rowClass;

  });
}
