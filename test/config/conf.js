const defaultTimeoutInterval = process.env.DEBUG ? (60 * 60 * 500) : 90000;

exports.config = {
   // Path to execute tests
    specs: [
        './test/features/*.feature',
    ],
  // Default browser to use
    capabilities: [
          {
              browserName: 'chrome'
          },
    ],
    // ===================
    // Test Configurations
    // ===================
    // Set webdriverIO commands to be synchronous
    // define all options for webdriverIO instance
    sync: true,
    screenshotPath: './test/reports/errorShots/',
    baseUrl: 'http://',
    waitforTimeout: 90000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['selenium-standalone', 'chromedriver'],
    framework: 'cucumber',
    reporters: [ 'json'],
    reporterOptions: {
        json:   {outputDir: './test/reports/json-results/'}
    },
    cucumberOpts: {
        require: ['./test/stepDefinitions/given.js', './test/stepDefinitions/when.js', './test/stepDefinitions/then.js'],
        backtrace: true,
        compiler: ['js:babel-core/register'],
        format: ['pretty'], // report format
        timeout: defaultTimeoutInterval,    // timeout for step definitions
    },
   // user chai for  test assertions
    before: function() {
      const chai    = require('chai');
      global.expect = chai.expect;
      global.assert = chai.assert;
      global.should = chai.should();
    },

};
