module.exports = {
    url:'https://www.saucedemo.com/index.html',
    
    elements: {
        finish: {selector: '.pony_express'}
    
    },
    
    commands: [{
        finishWithPony: function (){
            return this
            .waitForElementVisible('@finish', 3000, 'Pony express SUCKS!!!')
            .pause(3000)
        }

    
    }]
    };
    