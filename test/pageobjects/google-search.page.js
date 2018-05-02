import Page from './page';

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
  }

  search () {
    this.searchButton.click();
  }
  searchResults () {
    this.results.waitForVisible(9000);
     return this.results.value;
  }
}

export default new googlePage();
