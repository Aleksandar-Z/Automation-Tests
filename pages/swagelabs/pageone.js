module.exports = {
    url:'https://www.saucedemo.com/index.html',
    
    elements: {
      userNameField: {selector:'input#user-name'},
      passwordField: {selector: 'input#password'},
      loginButton: {selector: 'input.btn_action'}
    
    },
    
    commands: [{
      addUserNameAndPassword: function(username, password){
        return this
                  .waitForElementPresent('@userNameField', 2000, "Username filed is present")
                  .click('@userNameField')
                  .setValue('@userNameField', username)
                  .assert.value('@userNameField', username)
                  .click('@passwordField')
                  .setValue('@passwordField', password)
                  .assert.value('@passwordField', password);
      },
    
      clickLoginButton: function(){
        return this.click('@loginButton');
      } 
    
    
    }]
};
