const Page = require('./page');

class googlePage extends Page  {
  /**
  * page objects
  */

  get searchField()   { return browser.element('//*[@name="q"]');}
  get searchButton()  { return browser.element("[value='Google Search']"); }
  get results()   { return browser.elements('#search h3.r > a'); }

  visit () {
      super.openPage('https://www.google.co.uk/')
      browser.pause(1000);
  }

  enterSearchText (searchWord) {
    this.searchField.clearElement();
    this.searchField.setValue(searchWord);
    browser.pause(1000);
  }

  search () {
    this.searchButton.click();
  }
  searchResults () {
    this.results.waitForVisible(90000);
     return this.results.value;
  }
}

module.exports = new googlePage;