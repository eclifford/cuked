/*!
 * Cucumber Hooks
 */

module.exports = function () {
  var passed = true;

  /**
   * Cleanup after each feature
   *
   * @param {Function} event
   * @param {Function} callback
   */
  this.After(function(event, callback) {
    global.browser
      .quit()
      .nodeify(callback);
  });

  /**
   * Store global test status so we can notify SauceLabs
   *
   * @param {Function} event
   * @param {Function} callback
   */
  this.StepResult(function(event, callback) {
    var stepResult = event.getPayloadItem('stepResult');
    passed = stepResult.isSuccessful() && passed;
    callback();
  });

  /**
   * After features have run we close the browser and optionally notify
   * SauceLabs
   *
   * @param {Function} event
   * @param {Function} callback
   */
  this.registerHandler('AfterFeatures', function(event, callback) {
    if (process.env['cuked.remote'].toString().match(/saucelabs/)) {
      global.browser
      .sauceJobStatus(true)
      .quit()
      .nodeify(callback);
    } else {
      global.browser
      .quit()
      .nodeify(callback);
    }
  });
};
