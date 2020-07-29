module.exports = {
    url:'https://www.saucedemo.com/index.html',
    
    elements: {
        finishBtn: {selector: '.cart_button'}
    
    },
    
    commands: [{
        finishShoping: function (){
            return this
            .waitForElementVisible('@finishBtn', 3000, 'Almost Finish')
            .click('@finishBtn')
        }

    
    }]
    };
    