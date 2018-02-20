/*
copyBgColorToColumn script
Version: 1.1

No dependendices

Must be called after DOMContentLoaded.

Usage:
Simply add a data-copy-bg-color-to-column attribute to an element, and the background color
of that element will be copied to the ao-column:

<div style="background-color: #82adbd;" data-copy-bg-color-to-column>
</div>

- And call processAttrDataCopyBgColorToColumn()


Or, if you want more control, call copyBgColorToColumn with those elements that you want to copy
background color from


Beware, if you use cleanUpAoRowClasses():
- This script depends on '.ao-column' being present
- cleanUpAoRowClasses with default options removes the styles on columns

For this scenario, you can call copyBgColorToColumn after cleanUpAoRowClasses, setting it to look
for '.bb-column' (instead of default '.ao-column')

*/

function processAttrDataCopyBgColorToColumn(parentSelector) {
  var elements = document.querySelectorAll('[data-copy-bg-color-to-column]');
  copyBgColorToColumn(elements, parentSelector);
}

/*
arr: Array of elements that needs background color copied
parentSelector: optional. Defaults to '.ao-column'
*/
function copyBgColorToColumn(arr, parentSelector) {
  if (!parentSelector) {
    parentSelector = '.ao-column'
  }
  arr.forEach(function(elem) {
    var bgColor = elem.style.backgroundColor;

    // climb up the tree, until we find an element that matches parentSelector
    var foundMatch = false;
    while (!foundMatch && elem && elem !== document) {
      elem = elem.parentElement;
      foundMatch = elem.matches(parentSelector);
    }

    if (foundMatch) {
      elem.style.backgroundColor = bgColor;
    }
  });
}
