module.exports = {

     'add product' : function (browser) {

       const product = browser.page.verica.addProductPageVerica();
       var text;
    product.navigate()
          .addItemTocart()
          .verifyCartOpened()
          .addMoreItems(3)

    product.clickCheckoutButton()
    browser.getAlertText(function(result){
      console.log(result);
     text=result.value;
      if(text=="Checkout - Subtotal: $ 43.60"){
        console.log("test passed");
      }else{
        console.log("test failed");
      }
     browser.assert.equal(result.value, "Checkout - Subtotal: $ 43.60");
      })
    browser.acceptAlert()

    browser.end();
  }
};

// .acceptAlert() - Dismisses the currently displayed alert dialog. For confirm() and prompt() dialogs, this is equivalent to clicking the 'Cancel' button.
// For alert() dialogs, this is equivalent to clicking the 'OK' button.

// module.exports = {

//    'text' : function (browser) {
//         browser
//         .url('https://idp.trezor.gov.rs/')
//         .getAttribute('div.row.fill-height.no-gutters div.pt-9.pl-4.col div.col','textContent', function(result){
//           browser.assert.equal(result.value, "Р Р•РџРЈР‘Р›РРљРђ РЎР Р‘РР€РђРњРРќРРЎРўРђР РЎРўР’Рћ Р¤РРќРђРќРЎРР€РђРЈРџР РђР’Рђ Р—Рђ РўР Р•Р—РћР ");
//         })

//         .end();
//       }
// };