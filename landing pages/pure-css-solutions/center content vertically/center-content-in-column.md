# Centering content in columns vertically (without javascript)

This is for the case where youre column does not have a fixed height.
The height may for example be determined by the height of a responsive image in an adjacent column.

If the layout have a fixed height on the column, you are better off with simply putting
a table inside a block in the column (better, because that can be copied to other columns)

In this first example, we target a specific column.
Further below, there is an example of applying a more general rule.

To target a specific column, you will need the ID of the column.
In the following CSS, replace the ID's with your column ID.


```css

/* Center the content of a specific column vertically. */
div#column-c1521719543617 > div > div {
    display: table;
    height: 100%;
}
div#column-c1521719543617 > div > div div.ao-block {
    display: table-cell !important;
    vertical-align: middle;
}
```


To also make it center in the editor, add the following CSS:

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

As explained *CSS-in-the-editor.md*, we wrap our declarations in a media query to circumvent
act-on code created to protect the editor.

Otherwise, the CSS is pretty straight forward. It is tailored to work with the HTML layout in
the editor, which is as follows (simplified):

```html
<div class="editor-row-hover cf">
  <div class="rowToolbar ao-nuc">
    ...
  </div>
  <div id="column-c1521719543617" class="ao-column editor-column ng-scope ao-column-6">
    <div class="ao-column-inner">
      <div class="columnToolbar ao-nuc">
        ...
      </div>
      <div class="editor-block-wrapper ao-nuc">
        <div class="editor-block ao-nuc">
          <div class="ng-scope">
            <data-ng-include>
              <div class="ao-block">
                ...
              </div>
            </data-ng-include>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="ao-column editor-column ng-scope ao-column-6">
    ...
  </div>
</div>
```

Btw, the CSS for the frontend has been made to match this HTML layout:

```html
<div class="ao-row">
  <div id="column-c1521719543617" class="ao-column ao-column-6">
    <div class="ao-column-inner">
      <div>
        <div class="ao-block">
          ...
        </div>
      </div>
    </div>
  </div>
  <div id="column-c1521719543617" class="ao-column ao-column-6">
    ...
  </div>
  ...
</div>
```

## Centering the first column

Here is an example of targeting several columns.
Note that the first column is actually the second child in the editor.


```css

/* Center the content of a certain columns vertically.
   Criteria:
     - First column in the row
     - Column has 50% width (.ao-column-6)
     - Column contains a richtext block (and only one block)

   */

.ao-column-6:first-child > div > div {
    display: table;
    height: 100%;
}

.ao-column-6:first-child .ao-richtext-block {
    display: table-cell !important;
    vertical-align: middle;
}
@media only screen {
  #editor-design .ao-column-6:nth-child(2) .editor-block-wrapper,
  #editor-design .ao-column-6:nth-child(2) .editor-block,
  #editor-design .ao-column-6:nth-child(2) .editor-block > .ng-scope {
      height: 100%;
  }
  #editor-design .ao-column-6:nth-child(2) .editor-block > .ng-scope > data-ng-include {
      height: 100%;
      display: table;
  }
  #editor-design .ao-column-6:nth-child(2) .ao-richtext-block {
    display: table-cell !important;
    vertical-align: middle;
  }
}
```
