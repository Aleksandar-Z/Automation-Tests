module.exports = {
    url:'https://www.saucedemo.com/index.html',
    
    elements: {
    productLabel:{selector:'div#inventory_filter_container div.product_label'},
    productForCart:{selector: '.inventory_item:nth-child(4) button'},
    cartIcon:{selector: '#shopping_cart_container'},
    
    },
    
    commands: [{
    
    verifyLoggedIn: function(){
      return this
                .waitForElementPresent('@productLabel', 3000, "product page is opened")
                .assert.containsText('@productLabel', "Products");
    },
    addToCartAndChackout: function(){
      return this
                .click('@productForCart')
                .click('@cartIcon')
    }
    
    }]
    };
    