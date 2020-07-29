module.exports = {
    "login" : function (browser){
        browser
        .url('https://www.buzzsneakers.com/SRB_rs')
        .resizeWindow(1280, 800)
        // .click('div.block.autocomplete-button.autocomplete-button-simple i.icon.fa.fa-search')
        // .pause(5000)
        // .moveToElement('div.block.autocomplete-button.autocomplete-button-simple i.icon.fa.fa-search',1,1)
        // .pause(1000)
        // .doubleClick()
        // .mouseButtonClick('left')
        // .pause(3000)

        .end();
    }
}

