const users = require('../../Data/users.json');
var price="$15.99";
module.exports = {
     'Standard user login' : function (browser) {

     const firstUsername = users.user1.username;
     const firstPassword = users.user1.password;
     const login=browser.page.pageTemplate();
     const productPage = browser.page.pageproductone();

     login.navigate()
     browser.maximizeWindow()
     login.addUserNameAndPassword(firstUsername,firstPassword)
          .clickLoginButton()
    productPage.verifyLoggedIn()
    browser.getText('div.inventory_item:nth-child(1) div.pricebar div.inventory_item_price', function(result){
      console.log(result);
      if(result.value==price){
        return this.click('div.inventory_item:nth-child(1) div.pricebar button.btn_primary.btn_inventory')
      }else

      browser.getText('div.inventory_item:nth-child(2) div.pricebar div.inventory_item_price', function(result){
        if(result.value==price){
          return this.click('div.inventory_item:nth-child(2) div.pricebar button.btn_primary.btn_inventory')
          .pause(5000);
        }else {
          
          browser.getText('div.inventory_item:nth-child(3) div.pricebar div.inventory_item_price', function(result){
            if(result.value==price){
              return this.click('div.inventory_item:nth-child(3) div.pricebar button.btn_primary.btn_inventory')
              .pause(5000);
            }
          })
        }
      })
    })


     browser.end();
  }
};