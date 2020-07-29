module.exports = {
    url:'https://ultimateqa.com/',
    
    elements: {

      textVerification: {selector: 'div.header-content'},
      automationText: {selector: '.et_pb_module_header'},
      useYourSkillsText: {selector: '.et_pb_fullwidth_header_subhead'},
      link1: {selector: 'div.et_pb_text_inner ul li:nth-child(1)'},
      link2: {selector: 'div.et_pb_text_inner ul li:nth-child(2)'},
      link3: {selector: 'div.et_pb_text_inner ul li:nth-child(3)'},
      link4: {selector: 'div.et_pb_text_inner ul li:nth-child(4) a'},
      link5: {selector: 'div.et_pb_text_inner ul li:nth-child(5)'},
      link6: {selector: 'div.et_pb_text_inner ul li:nth-child(6)'},
      link7: {selector: 'div.et_pb_text_inner ul li:nth-child(7)'},
      loadedFillOutForms: {selector: '#et_pb_contact_form_0'}
    
    },
    
    commands: [{
        
        checkForText: function(){
            return this
                        .waitForElementPresent('@textVerification', 2000, "Text is present")
                        .assert.containsText('@automationText','Automation Practice')
                        .assert.containsText('@useYourSkillsText','Use your skills to learn how to automate different scenarios')
                        
        },
        checkForLinks: function(){
            return this
                        .waitForElementPresent('@link1', 2000, "Link 1 present")
                        .waitForElementPresent('@link2', 2000, "Link 2 present")
                        .waitForElementPresent('@link3', 2000, "Link 3 present")
                        .waitForElementPresent('@link4', 2000, "Link 4 present")
                        .waitForElementPresent('@link5', 2000, "Link 5 present")
                        .waitForElementPresent('@link6', 2000, "Link 6 present")
                        .waitForElementPresent('@link7', 2000, "Link 7 present")
        },
        clickOnFillOutForms: function (){
            return this
                        .click('@link4')
                        .waitForElementPresent('@loadedFillOutForms', 2000, "Successful click on fill out forms")
        }
    
    }]
};

