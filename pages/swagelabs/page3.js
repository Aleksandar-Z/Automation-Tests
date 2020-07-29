module.exports = {
    url:'https://www.saucedemo.com/index.html',
    
    elements: {
    itemInCart:{selector: '.cart_item'},
    checkoutButton:{selector: '.btn_action'}
    
    },
    
    commands: [{
        chackForItemInCart: function (){
            return this
            .waitForElementVisible('@itemInCart',3000, 'Item is in cart')
        },
        goToChackout: function (){
            return this
                        .click('@checkoutButton')
                        

        }

    
    }]
    };
    