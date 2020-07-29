const user = require('../../data/users.json');
module.exports = {
     'Successfull login swag' : function (browser) {

      const username = user.user1.username;
      const password = user.user1.password;

        browser
        .url('https://www.saucedemo.com/index.html')
        .waitForElementVisible('#user-name', 3000, "Username field is present on the page")
        .click('#user-name')
        .assert.attributeContains('#user-name', 'placeholder', "Username")
        .setValue('#user-name', username)
        .assert.valueContains('#user-name', username)
        .click('#password')
        .assert.attributeContains('#password', 'placeholder', "Password")
        .setValue('#password', password)
        .assert.valueContains('#password', password)
        .click('input.btn_action')
        .waitForElementVisible('div.product_label', 2000, "Product page is visible")
        .assert.containsText('div.product_label',"Products")
        
        .end();

      }
};

