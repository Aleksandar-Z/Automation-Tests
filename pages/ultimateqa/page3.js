module.exports = {
    url:'https://ultimateqa.com/',
    
    elements: {
        nameInput: {selector: 'input#et_pb_contact_name_0'},
        messageInput: {selector: '#et_pb_contact_message_0'},
        submitBtn: {selector: '#et_pb_contact_form_0 button'},
        textAfterSubmition: {selector: '.et-pb-contact-message p'},
        textWithEmptyImputs: {selector: '.et-pb-contact-message p'},
        nameInput2: {selector:'input#et_pb_contact_name_1'},
        messageInput2: {selector: '#et_pb_contact_message_1'},
        submitBtn2: {selector: '#et_pb_contact_form_1 button'},
        sumInput: {selector:'input.input.et_pb_contact_captcha'},
        secondTextAfterSubmitting:{selector:'.et-pb-contact-message p'},
        wrongNumberSubmitMessage: {selector:'.et-pb-contact-message ul li'}
    },
    
    commands: [{


      
      submitTextForm: function (name,message){
        return this
                      .click('@nameInput')
                      .assert.attributeContains('@nameInput', 'placeholder', 'Name')
                      .setValue('@nameInput', name)
                      .click('@messageInput')
                      .assert.attributeContains('@messageInput', 'placeholder', 'Message')
                      .setValue('@messageInput',message)
                      
    },

    clickOnSubmitBtn: function(){
        return this.click('@submitBtn')
    },

    textVerification: function (){
        return this
                    .waitForElementPresent('@textAfterSubmition', 2000, "Text was successfully submit")
    },
    textVerificationForEmptyInputs: function (){
        return this
                    .waitForElementPresent('@textWithEmptyImputs', 2000, "Error message is present")
                    .assert.containsText('@textWithEmptyImputs','Please, fill in the following fields:')
    },

    submitTextFormWithoutMessage: function (name,message){
        return this
                      .click('@nameInput')
                      .assert.attributeContains('@nameInput', 'placeholder', 'Name')
                      .setValue('@nameInput', name)
                      .click('@messageInput')
                      .assert.attributeContains('@messageInput', 'placeholder', 'Message')
                      .setValue('@messageInput',message)
                      
    },

    submitTextForm2: function (name,message,number){
        return this
                      .click('@nameInput2')
                      .assert.attributeContains('@nameInput2', 'placeholder', 'Name')
                      .setValue('@nameInput2', name)
                      .click('@messageInput2')
                      .assert.attributeContains('@messageInput2', 'placeholder', 'Message')
                      .setValue('@messageInput2',message)
                      .click('@sumInput')
                      .setValue('@sumInput',number)
                      .click('@submitBtn2')

    },

    messageAfterSubmitForm2: function (){
        return this
        .waitForElementPresent('@secondTextAfterSubmitting', 2000, "Second submit form is Success!!!")
        .assert.containsText('@secondTextAfterSubmitting','Success')

    },
    messageAfterSubmitWrongForm2: function (){
        return this
        .waitForElementPresent('@wrongNumberSubmitMessage', 2000, "Wrong number submit")
        .assert.containsText('@wrongNumberSubmitMessage','You entered the wrong number in captcha.')

    }

    
    
    }]
};
