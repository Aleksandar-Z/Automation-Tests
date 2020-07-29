module.exports = {
    "login" : function (browser){
        browser
            .url('https://nightwatchjs.org/')

            .waitForElementVisible('.container-fluid', 3000, 'Page is loaded')
            .assert.containsText('.col-sm-8.col-lg-10 h2', 'Browser Automation')
            .click('.container-fluid li:nth-child(4)')
            .waitForElementPresent('.col-md-8.col-xs-6', 3000, 'API Page is loaded')
            .click('.search-input.ds-input')
            .setValue('.search-input.ds-input', 'expect')
            .assert.valueContains('.search-input.ds-input', 'expect')
            .keys(browser.Keys.ENTER)
            .waitForElementVisible('.search-input.ds-input', 3000)
            .assert.urlContains('#expect')
            .fullscreenWindow ()
            .waitForElementVisible('.col-md-3 .bs-sidebar.hidden-print.affix-top',3000, 'Successful search')
            .click('.version-dropdown')
            .waitForElementPresent('.version-dropdown option:nth-child(4)',3000, 'Dropdown is visible')
            .click('.version-dropdown option:nth-child(4)')
            .waitForElementVisible('.logo-small', 3000,'Logo is visible')
            .click('.btn-github')
            .pause(3000)
            .assert.urlContains('http://v09.nightwatchjs.org/')
            .saveScreenshot('screenshots/Chrome/image.png')
            .end();
    }   
}
