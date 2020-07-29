const users = require ('../data/buzzLogin.json');

module.exports = {
    'Buzz': function(browser){

        const email = users.user1.email;
        const password = users.user1.password;
        const homePage = browser.page.buzzHomePage();
        const loginPopup = browser.page.prijaviSePopupPage();
        const loggedInPage = browser.page.loggedInPage();
        const pretragaPopupPage = browser.page.pretragaPopupPage();
        const selectedItem = browser.page.selectedItem();
        const cartPage = browser.page.cartPage();

        homePage.navigate()
                .acceptCookie()
                .clickOnPrijaviSeButton()
        loginPopup.verifyThatLoginPageIsOpen()
                  .wholeLogin(email,password)
                  .clickOnPrijaviSe()
        loggedInPage.verifyThatYouLogin()
                    .clickOnSearchButton()
        pretragaPopupPage.verifyPretragaPageIsOpen()
                        .searchText()
                        .selectFirstItem()
        selectedItem.chackForItemName()
                    .selectSizeForItem()
                    .addMoreItems(2)
        selectedItem.addToCart()
                    .clickOnCart()
        cartPage.cartPageLoaded()
                .removeItemsFromCart()
                .verifyMessageForEmptyCart()
        browser.end();
    }
}