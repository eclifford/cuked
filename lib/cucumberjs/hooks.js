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
    this.client
      .end()
      .then(callback);
  });

  /**
   * Store client test status so we can notify SauceLabs
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
    if (process.env['cuked.host'].toString().match(/saucelabs/)) {
      global.client
        .sauceJobStatus(passed)
        .end()
        .then(callback);
    } else {
      global.client
        .end()
        .then(callback);
    }
  });
};
