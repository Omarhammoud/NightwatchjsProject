module.exports = {
    'Test case'(browser){

        const page = browser.page.login();
        page
            .navigate()
            .assert.title('Web Scraper Testing Ground')
            .login('admin','123')


        browser.saveScreenshot('tests_output/image.png')



    }

}