const defaultTimeoutInterval = process.env.DEBUG ? (60 * 60 * 500) : 90000;

exports.config = {

    specs: [
        './test/features/*.feature',
    ],

    capabilities: [

          {
              browserName: 'chrome'
          },
    ],
    // ===================
    // Test Configurations
    // ===================
    // Set webdriverIO commands to be synchronous
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

    before: function() {
      const chai    = require('chai');
      global.expect = chai.expect;
      global.assert = chai.assert;
      global.should = chai.should();
    },

};
