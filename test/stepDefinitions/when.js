import { defineSupportCode } from 'cucumber';
import googlePage from '../pageobjects/google-search.page';

defineSupportCode(function({ When }) {
  When(/^I enter "([^"]*)" into the search box$/, function(searchWord) {
    googlePage.enterSearchText(searchWord);
    googlePage.searchField.getValue().should.equal(searchWord);
  });

  When(/^I click the search button$/, function() {
    googlePage.search();
  });


});
