Here is some scripts for manipulating row classes:

- Set row class (removes the existing 'ao-row' class)
- Add row class (keeps the existing 'ao-row' class)
- Remove "ao-row" class (just removes the 'ao-row' class)
- Set class on row-wrapper and removes ALL ao styles and classes on the row (but not inside the blocks):
- Set class on row-wrapper and rename ao classes on the row

Usually, you will want to go with the last...


```
// Set class on all rows that has some content with attribute: "data-replace-row-class"
// ie if some content says: <div data-row-class="contact-row">,
// then the containing row will get the "contact-row" as a class.
// the 'ao-row' will be removed
document.addEventListener('DOMContentLoaded', function() {
  var elements = document.querySelectorAll('[data-replace-row-class]');

  elements.forEach(function(elem) {

    var rowClass = elem.getAttribute('data-replace-row-class');

    // climb up the tree, untill we find an element with "ao-row" class

    var hasClass = false;
    while (!hasClass && elem && elem !== document) {
      elem = elem.parentNode;
      hasClass = elem.className.split(/\s/).some(function(c){
        return c == 'ao-row';
      });
    }
    if (hasClass) {
      elem.className = rowClass;
    }

  });
});//
```

If you want to keep "ao-row" class, instead use the following

```
// Mark all rows that has some content with attribute: "data-row-class"
// ie if some content says: <div data-row-class="contact-row">,
// then the containing row will get the "contact-row" as a class

document.addEventListener('DOMContentLoaded', function() {
  var elements = document.querySelectorAll('[data-row-class]');

  elements.forEach(function(elem) {

    var rowClass = elem.getAttribute('data-row-class');

    // climb up the tree, untill we find an element with "ao-row" class

    var hasClass = false;
    while (!hasClass && elem && elem !== document) {
      elem = elem.parentNode;
      hasClass = elem.className.split(/\s/).some(function(c){
        return c == 'ao-row';
      });
    }
    if (hasClass) {
      elem.className += (' ' + rowClass);
    }

  });
});
```

If you simply want to remove "ao-row classes", use the following:

```
// Remove act-on row classes on rows that has some content with attribute: "data-remove-ao-row-class"
document.addEventListener('DOMContentLoaded', function() {
  var elements = document.querySelectorAll('[data-remove-ao-row-class]');

  elements.forEach(function(elem) {

    // climb up the tree, untill we find an element with "ao-row" class
    var hasClass = false;
    while (!hasClass && elem && elem !== document) {
      elem = elem.parentNode;
      hasClass = elem.className.split(/\s/).some(function(c){
        return c == 'ao-row';
      });
    }
    if (hasClass) {
      elem.className = '';
    }
  });
});
```

The most comprehensive solution sets a class on the row-wrapper and removes all ao styles and classes on the row (but not inside the blocks):


```
// Set class on all row-wrappers that has some content with attribute: "data-set-row-wrapper-class-and-remove-ao-classes"
// AND clean all ao styles and classes on the row (but not inside the blocks)

document.addEventListener('DOMContentLoaded', function() {
  var elements = document.querySelectorAll('[data-set-row-wrapper-class-and-remove-ao-classes]');

  elements.forEach(function(elem) {

    var newRowWrapperClass = elem.getAttribute('data-set-row-wrapper-class-and-remove-ao-classes');

    // climb up the tree, untill we find an element with "ao-row-wrapper" class
    var hasClass = false;
    while (!hasClass && elem && elem !== document) {
      elem = elem.parentNode;
      hasClass = elem.className.split(/\s/).some(function(c){
        return c == 'ao-row-wrapper';
      });
    }
    if (hasClass) {
      // We have found the containing row wrapper


      // Clean up all ao-classes on row (ao-row, ao-column, ao-column-inner, etc)
      // But we do not wish to clean up ao classes inside blocks (imageField, etc)

      // Strategy:
      // 1) Find all blocks (.ao-block)
      // 2) Remove class and styles of parents of these blocks (until ao-row-wrapper)

      var blocks = elem.querySelectorAll('.ao-block');
      console.log(blocks);
      blocks.forEach(function(el) {

        // climb up the tree, untill we find an element with "ao-row-wrapper" class
        var hasClass = false;
        while (!hasClass && el && el !== document) {
          el.className = '';
          el.style = '';
          el = el.parentNode;
          hasClass = el.className.split(/\s/).some(function(c){
            return c == 'ao-row-wrapper';
          });
        }

      })
    }

    elem.className = newRowWrapperClass;

  });
});
```

The following is similar. But instead of removing ao-classes, it renames them.
Ie "ao-column-8" => "bb-column-8"

```
/* Set class on all row-wrappers that has some content with attribute: "data-row-type"
   AND clean all ao styles
   AND rename
   Styles and classes inside the blocks will not be touched

   options:
      remove_ao_classes (boolean). Default: true.
      add_bb_classes (boolean). Default: true
      remove_ao_styles (boolean). Default: true.
      keep_ao_row_wrapper_class (boolean). Default: true
      keep_ao_row_wrapper_styles (boolean). Default: true

*/


function rowType(options) {

  var defaultOptions = {
    remove_ao_classes: true,
    add_bb_classes: true,
    remove_ao_styles: true,
    keep_ao_row_wrapper_class: true,
    keep_ao_row_wrapper_styles: true
  }

  function getOption(optionName) {
    if (options.hasOwnProperty(optionName)) {
      return options[optionName];
    }
    else {
      return defaultOptions[optionName];
    }
  }
  /*
  getOption('remove_ao_classes');
  getOption('add_bb_classes');
  getOption('remove_ao_styles');
  getOption('keep_ao_row_wrapper_class');
  getOption('keep_ao_row_wrapper_class');
  */


  var elements = document.querySelectorAll('[data-row-type]');

  elements.forEach(function(elem) {

    var newRowWrapperClass = elem.getAttribute('data-row-type') + '-row';

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
                if (c.indexOf('ao-') > 0) {
                  return c + ' ' + c.replace('ao-', 'bb-');
                }
                else return c;
              }).join(' ');
            }
          }

          el.style = '';

          el = el.parentNode;
          if (el.className) {
            hasClass = el.className.split(/\s/).some(function(c){
              return c == 'ao-row-wrapper';
            });
          }
        }

      })
    }

    elem.className = newRowWrapperClass;

  });
}

document.addEventListener('DOMContentLoaded', function() {
  rowType();
});

```
