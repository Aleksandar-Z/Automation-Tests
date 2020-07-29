module.exports = {
    url:'https://www.buzzsneakers.com/SRB_rs',
    
    elements: {
        prijaviSeButton: 'a.login-btn',
        searchButton:'.block.autocomplete-button.autocomplete-button-simple ',
        logoImg: '.block.logo a img',
        cookieAcception:'.cookie-agree'
    },
    
    commands: [{
        
      acceptCookie: function (){
        return this
                    .waitForElementPresent('@logoImg',2000,'Logo is present on page')
                    .waitForElementPresent('@cookieAcception', 2000, "Cookies are present on page")
                    .click('@cookieAcception')
                    .resizeWindow(1280, 800)
    },
    clickOnPrijaviSeButton: function (){
        return this
                    .waitForElementPresent('@prijaviSeButton',2000,'Prijavi se link present')
                    .getText('@prijaviSeButton', function(result){
                        // console.log(result);
                        text=result.value;
                        if(text=="Prijavi se"){
                            console.log("Test for prijavi se link passed");
                        }else{
                            console.log("Test failed");
                        }
                    })
                    .click('@prijaviSeButton')
    }
    
    }]
};
