const ultimateqaOb = require ('../../data/ultimateqaOb.json');

module.exports = {
    'Verify top bar ': function(browser){

        const name = ultimateqaOb.input1.firstName;
        const message = ultimateqaOb.input1.textMessage;
        const firstPage = browser.page.ultimateqa.page1();
        const secondPage = browser.page.ultimateqa.page2();
        const thirdPage = browser.page.ultimateqa.page3();


        firstPage.navigate()
        .verifyElements()
        .clickOnAutomationExercies()
        secondPage.checkForText()
        .checkForLinks()
        .clickOnFillOutForms()
        thirdPage.clickOnSubmitBtn()
        .textVerificationForEmptyInputs()


        browser.end();
    }
}

