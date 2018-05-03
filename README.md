# webdriver-example

> Contains example cucumber tests using google

## Dependencies
Chrome version 66

### Language Runtimes
* Node.js 6.9.x or above - Recommended way to manage Node versions is [nvm][].

## Usage

In order to run these locally make sure you have performed the following:

```bash
$ npm install
$ npm test
```
### Limitations
1. Currently only works with chrome, need to configure it to work with multiple browsers and remote browsers (browserstack)
2. Create helpers and remove some code from step definitions so code can be easily reused.
3. Set up bash script for integrating with ci pipeline
4. Need to set up hooks to set states before and after test runs (e.g clearing browser cookies before).
5. Set up parrallel test run
6. Would be good to set up headless tests to make things faster


