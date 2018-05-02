import { defineSupportCode } from 'cucumber';
import googlePage from '../pageobjects/google-search.page';

defineSupportCode(function({ Then }) {
  Then(/^I should see a list of search results with the word "([^"]*)"$/, function(searchWord) {
    googlePage.searchResults().forEach(function(link) {link.getText().toLowerCase().should.include(searchWord)})
  });

});
