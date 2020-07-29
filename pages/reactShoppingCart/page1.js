module.exports = {
    url:'https://react-shopping-cart-67954.firebaseapp.com/',
    
    elements: {
        cartPage:{selector:'.filters h4 '},
        clickOnMSize:{selector:'div.filters div:nth-child(4)'},
        addToCartBtn:{selector:'.shelf-item__buy-btn'},
        cartIcon:{selector:'span.bag.bag--float-cart-closed'},
        increaseTheNumber:{selector:'.shelf-item__price button:nth-child(2)'},
        quantity:{selector:'span.bag__quantity'},
        subtotal:{selector:'p.sub-price__val'},
        emptyCartMessage: {selector: 'p.shelf-empty'}
    
    },
    
    commands: [{

      addItemTocart: function (){
        return this
                      .waitForElementVisible('@cartPage',3000,'Page is loaded')
                      .click('@clickOnMSize')
                      .click('@addToCartBtn')
                      .pause(5000)
    },

    increaseNumberOfItes: function(){
      return this
                  .click('@increaseTheNumber')
                  .click('@increaseTheNumber')
                  .click('@increaseTheNumber')
                  .pause(5000)
                  

    },
    quantityCheck: function (){
      return this 
      .assert.containsText('@quantity','4')
    },
   subtotalCheck: function (){
      return this 
      .assert.containsText('@subtotal','$ 29.45')
    },
    clickOncart: function (){
      return this 
                  .click('@cartIcon')
    },
    emptyCartMessageCheck: function (){
      return this
                  .waitForElementVisible('@emptyCartMessage',3000,'Cart is empty  ')
    }

    
    
    }]
};
