const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');
const assert = require('assert');

describe('Test', function() {
  let driver;

  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async function() {
    await driver.quit();
  });

  it('should check if the <div class="localdatacontainer"> contains data', async function() {
    await driver.get('http://localhost:5173');
    const element = await driver.findElement(By.className('localdatacontainer'));
    const text = await element.getText();
    assert.notStrictEqual(text, '');
  });
});