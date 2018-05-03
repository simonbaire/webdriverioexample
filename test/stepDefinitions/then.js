const {defineSupportCode} = require('cucumber');
const googlePage = require('../pageobjects/google-search.page');

defineSupportCode(function({ Then }) {
  Then(/^I should see a list of search results with the word "([^"]*)"$/, function(searchWord) {
    googlePage.searchResults().forEach(function(link) {link.getText().toLowerCase().should.include(searchWord)})
  });

  Then(/^I should be on "([^"]*)"$/, function(url) {
    browser.getUrl().should.equal(url)
  });

});
