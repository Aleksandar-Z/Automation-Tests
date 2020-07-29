module.exports = {
    
    elements: {
        searchInput: '#search-text',
        suggestionProducts:'div.block.search-sugest div.items-wrapper.products-list-simple',
        prikaziSveRezBtn:'div.block.search-sugest div.heading-append a',
        profileLink:'nav.block.user ul li:nth-child(1) a',
        firstItem:'div.items-wrapper.products-list-simple div.row div.col-xs-12.col-sm-12.col-md-6.col-lg-6.two-in-row-search:nth-child(1)'
    },
    
    commands: [{
        
      verifyPretragaPageIsOpen: function (){
        return this
        .getAttribute('@searchInput', 'placeholder', function(result) {
            // console.log(result);
            placeholderTxt=result.value
            if(placeholderTxt='Pretraži sajt'){
                console.log('Search page is open')
            }else{
                console.log('Test failed')
            }})
    },
    searchText: function(){
        return this
                    .click('@searchInput')
                    .setValue('@searchInput', 'Nike')
    },
    selectFirstItem: function(){
        return this
                    .waitForElementPresent('@firstItem',3000, 'Items are visible')
                    .click('@firstItem')

    }
    
    }]
};
