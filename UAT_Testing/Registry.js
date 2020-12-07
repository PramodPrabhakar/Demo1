describe('Registry', () => {
    it(' Creation of Registry', () => {

        browser.setTimeout({ 'script': 50000})
        browser.url('https://admin.in2tive.ai/#/login')
        browser.pause(2000)
        browser.getUrl()
        browser.maximizeWindow();
        browser.pause(2000)
        $('#username').addValue('Pramod@in2tive.ai');
        $('#password').addValue('Pramod@123');
        browser.pause(3000)
        $('[type="submit"]').click();
        browser.pause(2000)

 describe('Registry Name ', () => {
    it(' Select Registry Type', () => {

        $('[href="#/registry"]').click();
        browser.pause(2000)
        $('[href="#/registry/create"]').click()
        browser.pause(2000)
        $('#name').addValue('Testing_Registry')
        browser.pause(2000)
        $('#registry_type_id').click()
        browser.pause(2000)
        $('/html/body/div[2]/div[3]/ul/li[2]').click()
        browser.pause(2000)
        $('/html/body/div/div/div/div/main/div[2]/div/div/div/form/div[3]/div/button/span[1]').click()
        browser.pause(2000)

describe('Registry', () => {
   it(' Enter Valid Email id and Password to create the Registry ID ', () => {

        $('#username').addValue('Pramod@in2tive.ai');
        $('#password').addValue('Pramod@123');
        browser.pause(2000)
        $('[type="submit"]').click();
        browser.pause(2000)

    })

})
    })
})
  })
})