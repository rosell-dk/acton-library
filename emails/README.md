# Email templates

## Responsive design

Often you will require more control than the "Responsive design" setting gives.

So lets do that:
- choose *Responsive Design: "Off"* in the stationery section

Set *Message width = 700*. (or something else, but in that case modify the numbers that follows)


The following CSS will make content max 100% wide.
So message width is max 700px, but below 700px, we switch to fluid.

The CSS can be inserted as a *Custom Content* block

```css
@media (max-width: 720px) {
  table.devicewidthouter,
  td.devicewidthtable,
  table.devicewidth,
  div.devicewidthborder,
  td.devicewidthborder,
  img.devicewidthborder {
    width: 100%;
  }
  table[width="700"] {
    width: 100%;
    max-width: 700px;
  }
  body {
    margin: 0;
  }
}
@media (max-width: 700px) {
  table {
    max-width: 700px;
  }
}
```

Going fluid probably means that columns must break down to one column at some point.
This breaks down all columns:

```css
@media (max-width: 480px) {
  td {
    display: block;
    width: 100%;
  }
}
```

If you don't want to break all columns down, it gets more than a bit hacky.
The issue is that Act-on unfortunately does not let you set "class" attributes on rows or columns.
We have the same issue in landing pages, where I have created some javascript for these situations.
But this is emails, and we cannot rely on javascript.

The only way I figured out to target particular columns is by setting its *width* to something unique (you can adjust the width of columns in the GUI, with the mouse).

For example, we can set it to 349px, even though we really wanted it to be 350px (half)
And then we can target like this:

```css
@media (max-width: 480px) {
  td[width="349"],
  td[width="351"] {
    display: block;
    width: 100%;
  }
}
```

You probably also want to set back the widths to what they really should be:
```css
td[width="349"],
td[width="351"] {
  width: 350px;
}
```

If you want the last column to display above the first, there is this good old hack for two columns:

```css
td[width="349"] {
  display: table-header-group;
}
td[width="351"] {
  display: table-footer-group;
}
```

For more that two columns, you can use flexbox. The mobile phones manages fine.



### Uneven horizontal paddings on columns

Sometimes you need to add uneven horizontal paddings on a column for it to look good as a column.
You can set these paddings in the editor.
However, you rarely want the same paddings to apply when the column breaks down to one column.

In that case, you can do like this:

```css
td[width="349"] > table > tbody > tr > td,
td[width="351"] > table > tbody > tr > td {
  padding-left: 40px !important;
  padding-right: 40px !important;
}
```

As mobile devices generally renders emails much better than desktop platforms, I prefer this way around. &ndash; I make fixes for small screens, not for desktop screens.

The other way around would be to make even paddings in the act-on editor, to make it work in one-column layout on mobiles, and then override the paddings in the CSS.
