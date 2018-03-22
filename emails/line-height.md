
# Line heights in emails.

Situation:

- Act-on automatically inserts line-height on all p-tags, *in percentage*
- Outlook does not handle line-heights which are set in percentage. Result: You get double line-height

Fortunately, act-on does not override line-heights that are set manually.
So the fix is simply to set line-height on all container-tags.

Insert something like this on *on every p-tag*:

```html
<p style="mso-line-height-rule:exactly; line-height: 20px">
```

Note that line-height only works on container tags.
Also, with Outlook, it *must* be set on the closest container tag, in order to take effect.

Note that the `mso-line-height-rule:exactly;` is also there in order to get it working in Outlook
