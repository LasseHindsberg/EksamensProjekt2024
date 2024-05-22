const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navigate to your local Vue application
        await driver.get('http://localhost:5173');

    } finally {
        await driver.quit();
    }
})();
