const {defineSupportCode} = require('cucumber');
const googlePage = require('../pageobjects/google-search.page');

defineSupportCode(function({ Given }) {
  Given(/^I am on the search page$/, function() {
    googlePage.visit();
    browser.getTitle().should.equal('Google');
  });

});
