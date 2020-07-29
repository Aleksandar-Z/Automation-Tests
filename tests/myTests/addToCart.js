module.exports = {
    "login" : function (browser){
        browser
        .url('https://www.saucedemo.com/index.html')
        .click('#user-name')
        .assert.attributeContains('#user-name', 'placeholder', 'Username')
        .setValue('#user-name',"standard_user")
        .click('#password')
        .assert.attributeContains('#password', 'placeholder', 'Password')
        .setValue('#password', "secret_sauce")
        .click('.btn_action')
        .waitForElementVisible('.inventory_list', 2000, "Product page is visible")
        .assert.containsText('div.product_label',"Products")
        .click('.btn_primary.btn_inventory')
        .click('.shopping_cart_link')
        .waitForElementPresent('.cart_item', 3000, "Item added to cart")
        .click('.checkout_button')
        .click('#first-name')
        .assert.attributeContains('#first-name', 'placeholder', 'First Name')
        .setValue('#first-name',"myName")
        .click('#last-name')
        .assert.attributeContains('#last-name', 'placeholder', 'Last Name')
        .setValue('#last-name',"myLastName")
        .click('#postal-code')
        .assert.attributeContains('#postal-code', 'placeholder', 'Zip/Postal Code')
        .setValue('#postal-code',"1100")
        .click('.btn_primary.cart_button')
        .waitForElementPresent('.cart_item', 3000, "Item is redy")
        .click('.btn_action.cart_button')
        .waitForElementPresent('.pony_express', 3000, "Pony express is the best")


        .end();
    }   
}

