function waitForCondition(options) {
  if (options.test()) {
    options.onConditionMet();
  }
  else {
    window.setTimeout(waitForCondition, options.interval, options);
  }
}

/*
Usage:

waitForCondition({
  test: function() {
    return document.getElementsByTagName('form').length > 0;
  },
  onConditionMet: function() {
    alert('ready');
  },
  interval: 100
});

*/
