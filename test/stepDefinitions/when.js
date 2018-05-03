const {defineSupportCode} = require('cucumber');
const googlePage = require('../pageobjects/google-search.page');

defineSupportCode(function({ When }) {
  When(/^I enter "([^"]*)" into the search box$/, function(searchWord) {
    googlePage.enterSearchText(searchWord);
    googlePage.searchField.getValue().should.equal(searchWord);
  });

  When(/^I click the search button$/, function() {
    googlePage.search();
  });

  When(/^I click "([^"]*)" from the search results$/, function(searchWord) {
    googlePage.searchResults().forEach(function(link) {
      if (link.getText() === searchWord ) {
        link.click();
      }
    });
  });
});
