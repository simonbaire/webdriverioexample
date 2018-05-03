Feature: Performing a google Search

    As a user on google
    I want to be able to make a search

    Scenario: Performing a search on google
        Given I am on the search page
        When I enter "happy" into the search box
        And  I click the search button
        Then I should see a list of search results with the word "happy"

    Scenario: Selecting a search result on google
        Given I am on the search page
        When I enter "Home - BBC News" into the search box
        And  I click the search button
        When I click "Home - BBC News" from the search results
        Then I should be on "http://www.bbc.com/news"
