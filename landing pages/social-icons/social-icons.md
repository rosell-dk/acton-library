## Steps:

1. Include social-icons.css
2. Include social-icons.js
3. Call initializer in the default javascript section:

```
document.addEventListener('DOMContentLoaded', function() {
  socialIcons();
});
```

4. Insert links in content. Like this:

```
<div class="social">
  <a class="facebook" title="TIA on Facebook" href="https://www.facebook.com/tiatechnology?fref=ts" target="_blank" rel="noopener noreferrer">Facebook</a>
  <a class="twitter" title="TIA on Twitter" href="https://twitter.com/TIATechnology" target="_blank" rel="noopener noreferrer">Twitter</a>
  <a class="linkedin" title="TIA on LinkedIn" href="https://www.linkedin.com/company/tia-technology/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
</div>
```

The script will replace the text in the links with icons.
A links with class "facebook" will get the facebook icon, etc

5. Change the border-color, icon color, icon size and circle size in *social-icons.css*


## Need other icons?

- They can be grabbed from *icons.svg*
