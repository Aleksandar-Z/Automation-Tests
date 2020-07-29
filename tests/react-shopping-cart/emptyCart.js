// const users = require ('../../data/ultimateqaOb.json');

module.exports = {
    'Verify that you can add product to a cart ': function(browser){

        const firstPage = browser.page.reactShoppingCart.page1();


        firstPage.navigate()
        .clickOncart()
        .emptyCartMessageCheck()


        browser.end();
    }
}       