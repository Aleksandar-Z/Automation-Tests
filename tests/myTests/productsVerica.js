module.exports = {

    'add product' : function (browser) {

      const product = browser.page.addProductPage();
      var text;
   product.navigate()
         .addItemTocart()
         .verifyCartOpened()
         .addMoreItems(4)

   product.clickCheckoutButton()
   browser.getAlertText(function(result){
     text=result.value;
     if(text=="Checkout - Subtotal: $ 43.60"){
       console.log("test passed");
     }else{
       console.log("test failed");
     }
     browser.assert.equal(text, "Checkout - Subtotal: $ 43.60");
     })
   browser.acceptAlert()


    browser.end();
 }
};