const ultimateqaOb = require ('../../data/ultimateqaOb.json');

module.exports = {
    'Verify top bar ': function(browser){

        const name = ultimateqaOb.input4.firstName;
        const message = ultimateqaOb.input4.textMessage;
        const number = ultimateqaOb.input4.number;
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
        .messageAfterSubmitWrongForm2()


        browser.end();
    }
}

