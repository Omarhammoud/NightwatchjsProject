module.exports ={
    url: 'http://testing-ground.scraping.pro/login',
    elements: {
        userfield : 'input[name="usr"]',
        passfield : 'input[name="pwd"]',
        submitButton : '[type="submit"]',


    },
    commands :[{
        login(username, password){
            const page = this;
            page
                .setValue('input[name="usr"]', username)
                .setValue('input[name="pwd"]', password)
                .click('@submitButton')

        }
    }]




}


