'use strict';

var Calculator = require('./PageObject.js');

describe('To add', function () {
    var calc;
    beforeEach(function () {
        calc = new Calculator();
    });
    it('add value', function () {
        calc.firstValue('10');
        calc.secondValue('2');
        calc.dropDown('/');
       // element(by.cssContainingText('option', '-')).click();
       // element(by.buttonText('Go!')).click(); 
        calc.button.click();
        expect(calc.output).toEqual('5');
    });
});