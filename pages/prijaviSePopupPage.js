module.exports = {
    
    elements: {
        prijavaText: 'form.login_form .modal-header h4', 
        emailInput:'#login_email',
        lozinkaInput: '#login_password',
        prijavaButton:'button.btn.btn-success.btn-login.confirm-loader'
    },
    
    commands: [{
        
      verifyThatLoginPageIsOpen: function (){
        return this
        .waitForElementPresent('@prijavaText', 2000,)
        .pause(1000)
        .getText('form.login_form .modal-header h4', function(result){
          // console.log(result);
         text=result.value;
         if(text==="PRIJAVA"){
             console.log("Prijava page is present");
         }else{
             console.log("Test faild");
         }
     })
        .getAttribute('@emailInput', 'placeholder', function(result) {
            // console.log(result);
            placeholderTxt=result.value
            if(placeholderTxt='Email'){
                console.log('Email placeholder is present')
            }else{
                console.log('Test failed')
            }
          })
          .getAttribute('@lozinkaInput', 'placeholder', function(result) {
            // console.log(result);
            placeholderTxt1=result.value
            if(placeholderTxt1='Lozinka'){
                console.log('Lozinka placeholder is present')
            }else{
                console.log('Test failed')
            }
          })
    },
    wholeLogin: function(email, password){
        return this
                  .waitForElementPresent('@emailInput',3000, 'Email input present on page')
                  .click('@emailInput')
                  .pause(1000)
                  .waitForElementPresent('@emailInput',3000, 'Email input present on page')
                  .pause(1000)
                  .setValue('@emailInput',email)
                  .pause(1000)
                  .click('@lozinkaInput')
                  .waitForElementPresent('@lozinkaInput',3000, 'Lozinka input present on page')
                  .setValue('@lozinkaInput',password)
      },
      clickOnPrijaviSe: function(){
          return this
                    .waitForElementPresent('@prijavaButton',3000)
                    .click('@prijavaButton')
                    
      }

    
    }]
};
