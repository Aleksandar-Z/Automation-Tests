module.exports = {
    
    elements: {
        vasaKorpaText:'div#order_cart_content div.cart-step.appear.appeared div.heading-wrapper.heading-underlined div.title h2',
        itemInCart:'.table.cart-table tr.item',
        removeItemFromCart:'.table.cart-table .text-center.cart-action a',
        potvrdiButton:'.bootbox.modal.fade.bootbox-confirm.in .modal-dialog .modal-content button.btn.btn-primary',
        emptyCartAlert:'.empty-cart-alert-wrapper .alert.alert-danger'
    },
    
    commands: [{
        
      cartPageLoaded: function (){
        return this
                      .waitForElementPresent('@vasaKorpaText', 2000, "Text is present")
                      .getText('@vasaKorpaText', function(result){
                        // console.log(result);
                        text=result.value;
                        if(text=="VAŠA KORPA"){
                            console.log("Cart page is loaded");
                        }else{
                            console.log("Test failed");
                        }
                    })
    },
    removeItemsFromCart: function(){
      return this 
                  .waitForElementPresent('@itemInCart', 3000, 'Cart item is present on page')
                  .click('@removeItemFromCart')
                  .waitForElementPresent('@potvrdiButton', 3000, 'Potvrdi button is present on page')
                  .click('@potvrdiButton')
    },
    verifyMessageForEmptyCart: function(){
      return this
                  .waitForElementPresent('@emptyCartAlert', 3000, 'Message is present on page')
                  .getText('@emptyCartAlert', function(result){
                    // console.log(result);
                    text=result.value;
                    if(text=="Vaša korpa je prazna!"){
                        console.log("Cart is empy message is present");
                    }else{
                        console.log("Test failed");
                    }
                })
    }

    
    }]
};
