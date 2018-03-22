# CSS and the act-on editor

If your CSS only works in the landing page, here are some tricks and info that may help you get it working in the editor as well


## The html

HTML in front-end:

```html
<div class="ao-column-inner">
    <div class="ao-text-block">
</div>
```

HTML in editor:

```html
<div class="ao-column-inner">
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
</div>
```

## ao-nuc

The ao-nuc classes protects the editor from your CSS.
Act on automatically adds `:not(.ao-nuc)` to all CSS rules you write in the editor.

However, we can out-clever act-on, as it turns out act-on does not add the :not(.ao-nuc) to media queries.

So do your hacks inside a media query:

```css
@media (max-width: 20000px) {

}
```
