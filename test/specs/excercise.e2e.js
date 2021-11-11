import { username, password, userFullName } from './fixtures.js'

//Mat_Team_admin@gmail.com    Mat1234    Mat_Team_Admin
//Lenka123@gmail.com         Lenka123    Lenka

describe('login / logout', () => {

    beforeEach(() => {
        browser.reloadSession();

        browser.url('/prihlaseni');
    });

    it('přihlašovací stránka', () => {

        const emailField = $('#email')
        expect(emailField).toBeDisplayed()
        expect(emailField).toBeEnabled()

        const passwordField = $('#password')
        expect(passwordField).toBeDisplayed()
        expect(passwordField).toBeEnabled()

        const loginButton = $('.btn-primary')
        expect(loginButton).toBeEnabled()
        expect(loginButton).toHaveText('Přihlášit')
    });

    it('přihlášení uživatele', () => {

        const emailField = $('#email')
        const passwordField = $('#password')
        const loginButton = $('.btn-primary')

        emailField.setValue('Lenka123@gmail.com')
        passwordField.setValue('Lenka123')
        loginButton.click()

        const uzivatelJmeno = $('.navbar-right').$('[data-toggle="dropdown"]');
        expect(uzivatelJmeno.getText()).toEqual('Lenka')
    });

    it('odhlášení uživatele', () => {
        const emailField = $('#email')
        const passwordField = $('#password')
        const loginButton = $('.btn-primary')

        emailField.setValue('Lenka123@gmail.com')
        passwordField.setValue('Lenka123')
        loginButton.click()

        const uzivatelJmeno = $('.navbar-right').$('[data-toggle="dropdown"]');
        expect(uzivatelJmeno.getText()).toEqual('Lenka')
        uzivatelJmeno.click()
        $('#logout-link').click();

        const loginLink = $('#login');
        expect(loginLink.getText()).toEqual('Přihlášit')
    });
});

describe('Přihlášky na kurzy', () => {
    beforeEach(() => {
        browser.reloadSession();
        browser.url('/prihlaseni');
        $('#email').setValue('Lenka123@gmail.com');
        $('#password').setValue('Lenka123');
        $('.btn-primary').click();
        $('=Přihlášky').click();
    });
    it('ověření správných přihlášek', () => {
        const rows = $('.dataTable').$('tbody').$$('tr')
        //expect(rows).toBeElementsArrayOfSize(30);
        expect(rows).toBeElementsArrayOfSize(3);
        rows.forEach(row => {
            const cols = row.$$('td');
            expect(cols[0].getText()).toMatch(/[a-zA-Z]{3,}/);
            expect(cols[1].getText()).toMatch(/(Python|JavaScript|PUB_TEAM_Testovaní_test)/);
            expect(cols[2].getText()).toMatch(/(\d{2}.\d{2}.\d{4}|\d{2}.\d{2}. - \d{2}.\d{2}.\d{4})/);
            expect(cols[3].getText()).toMatch(/\d{1,3}(| \d{0,3}) Kč/);
            // expect(cols[0].getText()).toMatch(/[a-zA-Z]{3,}/);
            // expect(cols[1].getText()).toMatch(/(\d{2}.\d{2}.\d{4}|\d{2}.\d{2}. -\d{ 2}.\d{ 2}.\d{ 4}) /);
            // expect(cols[2].getText()).toMatch(/(Bankovní převod|FKSP|Hotově|Složenka) /);
            // expect(cols[3].getText()).toMatch(/\d{1,3}(| \d{0,3}) Kč/);
        });

    });


})