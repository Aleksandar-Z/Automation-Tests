module.exports = {
    
    elements: {
        profileLink:'nav.block.user ul li:nth-child(1) a',
        searchButton:'.block.autocomplete-button.autocomplete-button-simple',
        placeholderChack:'#search-text'
    },
    
    commands: [{
        
      verifyThatYouLogin: function (){
        return this
                    .waitForElementPresent('@profileLink',3000, 'Profile link is present on page')
                    .getText('@profileLink', function(result){
                        // console.log(result);
                        text=result.value;
                        if(text=="Test Ing"){
                            console.log("Test for profile verification passed");
                        }else{
                            console.log("Test failed");
                        }
                    })
                    
    },
    clickOnSearchButton: function(){
        return this
                    .waitForElementPresent('@searchButton',3000, 'Search button present')
                    .click('@searchButton')
    }
    
    }]
};
