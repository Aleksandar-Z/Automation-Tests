// const users = require ('../../data/ultimateqaOb.json');

module.exports = {
    'Verify top bar ': function(browser){

        const firstPage = browser.page.ultimateqa.page1();


        firstPage.navigate()
        .verifyElements()


        browser.end();
    }
}       