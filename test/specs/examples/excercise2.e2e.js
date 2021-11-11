
import {username, password} from '../fixtures.js'

describe('Login And Applications Page', () => {

    it('should login and list applications - excercise 2', () => {

        browser.reloadSession();
        
        browser.url('/prihlaseni');

        // zjištění stavu políčka email
        const emailField = $('#email');
        console.log('Email field s displayed: ' + emailField.isDisplayed());
        console.log('Email field s enabled: ' + emailField.isEnabled());
        
        // zjištění stavu políčka password
        const passwordField = $('#password');
        console.log('Password field s displayed: ' + passwordField.isDisplayed());
        console.log('Password field s enabled: ' + passwordField.isEnabled());

        // výpis textu tlačítka na přihlášení
        const loginButton = $('.btn-primary');
        console.log('Login button text: ' + loginButton.getText());

        // přihlášení
        emailField.setValue(username);
        passwordField.setValue(password);
        loginButton.click();

        // výpis přihlášených kurzů
        const rows = $('.dataTable').$('tbody').$$('tr')
        console.log('There are ' + rows.length + ' rows in the table');
        rows.forEach(row => {
            console.log(row.getText());
        })

        // Bonus - filtrování tabulky
        $('input[type="search"]').setValue('Novák');
        const filteredRows = $('.dataTable').$('tbody').$$('tr')
        console.log('There are ' + filteredRows.length + ' filtered rows in the table');
        rows.forEach(row => {
            console.log(row.getText());
        });

    });
    
});