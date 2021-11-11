
describe('Czechitas Login Page', () => {

    it('should open login - excercise 1', () => {
        
        browser.reloadSession();
        
        browser.url('/prihlaseni');
        
        const windowSize = browser.getWindowSize();
        console.log(windowSize);

        const allCookies = browser.getCookies();
        console.log(allCookies);
        browser.saveScreenshot('login_page.png');

        browser.pause(5000);
        
    });
    
});