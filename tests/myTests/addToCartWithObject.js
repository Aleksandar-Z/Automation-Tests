const users = require ('../../data/users.json');

module.exports = {
    'Standard user login': function(browser){
        const firstUsername = users.user1.username;
        const firstPassword = users.user1.password;
        const firstName = users.input.firstName1;
        const lastName = users.input.lastName1;
        const zipCode = users.input.zipCode1;
        const login = browser.page.swagelabs.pageone();
        const productPage = browser.page.swagelabs.pagetwo();
        const checkoutPage = browser.page.swagelabs.page3();
        const chackoutOnPage4 = browser.page.swagelabs.page4();
        const chackoutOnPage5 = browser.page.swagelabs.page5();
        const chackoutOnPage6 = browser.page.swagelabs.page6();

        login.navigate()
        .addUserNameAndPassword(firstUsername,firstPassword)
        .clickLoginButton()
        productPage.verifyLoggedIn()
        .addToCartAndChackout()
        checkoutPage.chackForItemInCart()
        .goToChackout()
        chackoutOnPage4.inputField(firstName,lastName,zipCode)
        .continueWithShoping()
        chackoutOnPage5.finishShoping()
        chackoutOnPage6.finishWithPony()

        browser.end();
    }
}