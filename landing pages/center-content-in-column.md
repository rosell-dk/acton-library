# Centering content in columns vertically (without javascript)

To do it without javascript, you will need the ID of the column.

Note that it does not center in the editor, but it works when viewed.

```css
div#column-c1521719543617 > div > div {
    display: table;
    height: 100%;
}
div#column-c1521719543617 > div > div div.ao-richtext-block {
    display: table-cell !important;
    vertical-align: middle;
}
```

## Why it does not work in editor, and a hack is hard

It does not work in the editor, because the html structure is different there.

Try to run this in console, while editor is open:

```javascript
document.querySelectorAll('#column-c1521719543617 .ao-column-inner');
```

You will see that the immediate child is has these classes:

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

The ao-nuc classes poses a problem.
Reason: act on automatically adds `:not(.ao-nuc)` to all CSS rules.

However, we can out-clever act-on, as it turns out act-on does not add the :not(.ao-nuc) to media queries.

@media (max-width: 20000px) {

}


For the centering to work, we want heights of *editor-block-wrapper* and *editor-block* to be set to 100%.
However, we cannot target these elements with CSS in the editor.

We could actually get *editor-block-wrapper* to be 100% height, by setting `display:flex` on its parent:

```css
#editor-design-inner div#column-c1521719543617 div.ao-column-inner > div {
  display: flex;
}
```

But that trick won't work on *editor-block*, because we cannot reach its parent either.
