# CSS and the act-on editor

If your CSS only works in the landing page, here are some info and tricks that may
help you get it working in the editor as well.

We cannot resort to javascript, because javascript is disabled in the editor.

## The html

HTML in front-end:

```html
<div class="ao-row">
  <div class="ao-column">
    <div class="ao-column-inner">
      <div>
        <div class="ao-block">
          ...
        </div>
      </div>
    </div>
  </div>
</div>
```

Corresponding HTML in editor (simplified):

```html
<div class="ao-row editor-row">
  <div>
    <div class="editor-row-hover cf">
        <div class="rowToolbar ao-nuc">
          ...
        </div>
        <div class="ao-column editor-column ng-scope">
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
      </div>
    </div>
  </div>
</div>
```

## ao-nuc

The ao-nuc classes protects the editor from your CSS.
Act on automatically adds `:not(.ao-nuc)` to all CSS rules you write in the editor.
Act-on also appends `#editor-design ` to all the rules, again to shield the interface

However, we can out-clever act-on, as it turns out act-on does not protect the interface from
css inside media queries.

So do your hacks inside a media query.

```css
@media only screen {

}
```

- but be careful not to mess the interface up.
Make sure to protect it, ie by apppending `#editor-design` to your rules





# Inspecting the elements in the editor

There is an editor overlay. Right-clicking on a column and selecting "inspect element" will get you the overlay,
probably not what you want.

In those cases, you can use the console to find the element for you (in Chrome).
Clicking it will lead you to it

Ie, to get column with id "c1521719543617", you can write this in the console:

```javascript
document.querySelectorAll('#column-c1521719543617');
```
It returns a node-list. Open it, and click the element in order to select it in elements.
