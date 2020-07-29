module.exports = {

    'mojaPijaca' : function (browser) {

      const product = browser.page.practice.mojaPijPage();
      
    product.navigate()
    .verifySearchInput()
    .searchForProduct()
    .searchBtn()
    .checkForText()
    

    browser.end();
 }
};