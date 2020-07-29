const ultimateqaOb = require ('../../data/ultimateqaOb.json');

module.exports = {
    'Verify top bar ': function(browser){

        const name = ultimateqaOb.input3.firstName;
        const message = ultimateqaOb.input3.textMessage;
        const number = ultimateqaOb.input3.number;
        const firstPage = browser.page.ultimateqa.page1();
        const secondPage = browser.page.ultimateqa.page2();
        const thirdPage = browser.page.ultimateqa.page3();


        firstPage.navigate()
        .verifyElements()
        .clickOnAutomationExercies()
        secondPage.checkForText()
        .checkForLinks()
        .clickOnFillOutForms()
        thirdPage.submitTextForm2(name,message,number)
        .messageAfterSubmitForm2()


        browser.end();
    }
}

