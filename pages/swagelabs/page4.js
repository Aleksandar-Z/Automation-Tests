module.exports = {
    url:'https://www.saucedemo.com/index.html',
    
    elements: {
        firstName: {selector:'#first-name'},
        lastName: {selector:'#last-name'},
        zipCode: {selector:'#postal-code'},
        continueBtn: {selector: '.cart_button'}
    
    },
    
    commands: [{
        inputField: function (firstName, lastName, zipCode) {
            return this
                        .click('@firstName')
                        .setValue('@firstName',firstName)
                        .click('@lastName')
                        .setValue('@lastName',lastName)
                        .click('@zipCode')
                        .setValue('@zipCode',zipCode)
        },
        continueWithShoping: function (){
            return this
                        .waitForElementVisible('@continueBtn', 3000, 'Redy to continue')
                        .click('@continueBtn')
        }

    
    }]
    };
    