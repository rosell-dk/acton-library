// Change viewport metadata. We want user-scalable=no on iPad, because once you start zooming on iPad,
// there is no zooming back
document.addEventListener("DOMContentLoaded", function(event) {
  console.log('DOMContentLoaded');

  viewport = document.querySelector("meta[name=viewport]");
  //viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
  viewport.setAttribute('content', 'user-scalable=no,initial-scale=1.0,maximum-scale=1.0,width=device-width');
});
