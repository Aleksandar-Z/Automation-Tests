// const users = require ('../data/users.json');

module.exports = {
    'Verify top bar ': function(browser){

        const firstPage = browser.page.ultimateqa.page1();
        const secondPage = browser.page.ultimateqa.page2();


        firstPage.navigate()
        .verifyElements()
        .clickOnAutomationExercies()
        secondPage.checkForText()
        .checkForLinks()


        browser.end();
    }
}

