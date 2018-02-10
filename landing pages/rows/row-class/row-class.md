
## The script
The *row-class.js* script is used to gain control over act-on rows.

You control it by inserting content into a cell. Ie, in order to set the class on the row to "standard-row light", you place the following content anywhere in the row:

```
<div data-row-class="standard-row light"></div>
```

Make sure only to insert it one time in a row.

The script can also optionally remove the "ao"-classes or rename them to "bb"-classes.
You usually want to do that (the latter).

## The CSS
You can use the script without using the CSS.
The CSS is however also quite powerful.

It is a flex-based layout.

By adding extra classes, you can modify the behaviour of the row.

Ie, if you want the columns to appear as boxes, simply add "boxes" class as well

```
<div data-row-class="standard-row boxes"></div>
```

If you want the row to go all the way to the edge of the screen, do this:
```
<div data-row-class="standard-row edge-to-edge"></div>
```

If you want the row to break down to one column layout earlier than otherwise, do this:
```
<div data-row-class="standard-row break-early"></div>
```

The modifiers can be combined.

Available modifiers:
- light
- dark
- edge-to-edge
- boxed
- no-bottom-padding
- no-top-padding
- white-text
- break-early

As the "standard-row" is quite tweakable, chances are that you do not need other rows besides that.
If that is the case, you can use *row-class-generic.css* instead. Then you won't have to add the "standard-row" class to all rows.


## Steps (using standard-row css):

1. Include row-class-standard-row.css
2. Include row-class.js
3. Call initializer in the default javascript section:

```
document.addEventListener('DOMContentLoaded', function() {
  rowClass({
    keep_ao_row_wrapper_class_and_styles: true
  });
});
```

The script takes options. These are the defaults:
```
remove_ao_classes: true,
add_bb_classes: true,
remove_ao_styles: true,
keep_ao_row_wrapper_class_and_styles: false,
extra_classes: '',
selector: '[data-row-class]'
```

Btw, 'ao' classes and styles on elemensts inside ao-blocks are never removed/renamed. It is only the ao-classes from the inner column up to the row wrapper. The latter can optionally be kept.

## Steps (using generic css):

1. Include row-class-generic.css
2. Include row-class.js
3. Call initializer in the default javascript section twice:

```
document.addEventListener('DOMContentLoaded', function() {
  rowClass({
    keep_ao_row_wrapper_class_and_styles: true
  });
  rowClass({
    keep_ao_row_wrapper_class_and_styles: true,
    selector: '.ao-row'
  });
});
```
The latter call ensures that rows without any elements with a "data-row-class" attribute will also be handled (ao-classes being renamed to "bb"-classes, etc)


## Tips

It can sometimes be useful to limit the widths on inner columns.

For example, if you have an edge-to-edge row where you actually only want it to go to the edge in one side. Could be that you have an image in the left column and text in the right.


```
.standard-row .bb-column-6 .bb-column-inner {
  max-width: 443px;
}

.standard-row .bb-column-6:first-child .bb-column-inner {
  width: 390px;
}
```
