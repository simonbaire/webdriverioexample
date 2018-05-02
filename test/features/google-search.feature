Feature: Performing a google Search

    As a user on google
    I want to be able to make a search

    Scenario: Performing a search on google
        Given I am on the search page
        When I enter "happy" into the search box
        And  I click the search button
        Then I should see a list of search results with the word "happy"