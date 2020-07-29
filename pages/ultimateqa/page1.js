module.exports = {
    url:'https://ultimateqa.com/',
    
    elements: {
      courses: {selector: 'nav #menu-item-504 a'},
      seleniumResources: {selector: 'nav #menu-item-6838 a'},
      automationExercises: {selector: 'nav #menu-item-587 a'},
      podcast: {selector: 'nav #menu-item-213095 a'},
      blog: {selector: 'nav #menu-item-214031 a'},
      textVerification: {selector: 'div.header-content'}
    
    },
    
    commands: [{
        
    
      verifyElements: function (){
        return this
                    .waitForElementPresent('@courses', 2000, "Courses is present")
                    .waitForElementPresent('@seleniumResources', 2000, "Selenium Resources is present")
                    .waitForElementPresent('@automationExercises', 2000, "Automation Exercises is present")
                    .waitForElementPresent('@podcast', 2000, "Podcast is present")
                    .waitForElementPresent('@blog', 2000, "Blog is present")
      },
      clickOnAutomationExercies: function (){
        return this
                      .click('@automationExercises')
                      .waitForElementPresent('@textVerification', 2000, "Text is present")
    }
    
    
    }]
};
