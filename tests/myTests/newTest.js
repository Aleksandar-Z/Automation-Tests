module.exports = {
    "login" : function (browser){
        browser
            .url('https://www.youtube.com/')
            .fullscreenWindow()
            .click('input#search')
            .setValue('input#search', 'Make a search')
            .clearValue('input#search')
            .pause(3000)
            .setValue('input#search', 'This is new search')
            .click('button#search-icon-legacy')
            .pause(3000)
            .back()
            .pause(3000)
            .forward()
            .refresh()
            .minimizeWindow()
            .pause(3000)
            .assert.urlContains('results?search', 'Url is good')
            .assert.visible('span#country-code', 'Country code is visible')
            .closeWindow()

            .end();
    }   
}

/* 
.moveToElement(selector, xoffset, yoffset, [callback]) - pomera mis na neki element 
.elementIdClear() - 
.getWindowSize() - pokazuje velicinu prozora 
.doubleClick()  

*/ 