module.exports = {
    
    elements: {
        proizvodiText: 'div.block.product-details-info div.heading-wrapper div.title h1',
        shoeSize:'div.block.product-attributes-wrapper.clearfix ul li:nth-child(3)',
        plusArrow:'.icon.fa.fa-plus.quantity-up',
        dodajButton:'#nb_addToCartButton',
        cart:'.block.mini-cart.mini-cart-circle-top-right a',
        numberOfItemsInCart:'div#miniCartContent div.header-carthor-total'
    },
    
    commands: [{
        chackForItemName: function(){
          return this
                    .getText('@proizvodiText', function(result){
                      // console.log(result);
                      text=result.value;
                      if(text=="NIKE Patike NIKE AIR VAPORMAX PLUS FOA"){
                          console.log("Selected item is present");
                      }else{
                          console.log("Test failed");
                      }
                  })
        },

        selectSizeForItem: function(){
          return this 
                      .click('@shoeSize')
        },

        addMoreItems: function(n){
          for (var i=0; i<n; i++){
            this.click('@plusArrow')
                .pause(1000)
          }
        },
        addToCart: function(){
          return this
                    .click('@dodajButton')
        },
        clickOnCart: function(){
          return this
                    .assert.containsText('@numberOfItemsInCart', '3')
                    .click('@cart')
        }
    
    }]
};
