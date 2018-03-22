# Centering content in columns vertically (without javascript)

To do it without javascript, you will need the ID of the column.

Note that it does not center in the editor, but it works when viewed.

```css

/* Center the content of a specific column vertically.
   Note: If you copy the landing page, you must update the column ID */
div#column-c1521719543617 > div > div {
    display: table;
    height: 100%;
}
div#column-c1521719543617 > div > div div.ao-richtext-block {
    display: table-cell !important;
    vertical-align: middle;
}
```


To also make it work in the editor, add the following CSS:

```css
@media only screen {
  #column-c1521719543617 .ng-scope {
      height: 100%;
  }
  #column-c1521719543617 data-ng-include {
      height: 100%;
      display: table;
  }
}
```

or, if you want to be more specific (and perhaps avoid unexpected problems):

```css
@media only screen {
  #column-c1521719543617 .editor-block-wrapper,
  #column-c1521719543617 .editor-block,
  #column-c1521719543617 .editor-block > .ng-scope {
      height: 100%;
  }
  #column-c1521719543617 .editor-block > .ng-scope > data-ng-include {
      height: 100%;
      display: table;
  }
}
```



## A few words about the CSS for the editor:

As explained *CSS-in-the-editor.md*, we use the media query to circumvent act-on code created to
protect the editor.

In the editor, the HTML looks like this:

```html
<div class="editor-block-wrapper ao-nuc">
  <div class="editor-block ao-nuc">
    <div class="ng-scope">
      <data-ng-include>
        <div class="ao-text-block">
        </div>
      </data-ng-include>
    </div>
  </div>
</div>
```
