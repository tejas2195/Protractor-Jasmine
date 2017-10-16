'use strict';
var Calculator = function () {
    browser.get('http://juliemr.github.io/protractor-demo/');
};
Calculator.prototype = Object.create({}, {
    first: { get: function () { return element(by.model('first')); } },
    second: { get: function () { return element(by.model('second')); } },
    firstValue: { value: function (keys) { return this.first.sendKeys(keys); } },
    secondValue: { value: function (keys) { return this.second.sendKeys(keys); } },
    //operator: { get: function () { return element(by.model('operator')) } },
    dropDown: { value: function (values) { return element(by.cssContainingText('option', values)).click(); } },
   button: { get: function () { return element(by.buttonText('Go!')); } },
    output: { get: function () { return (element(by.binding('latest')).getText()); } }
});
module.exports = Calculator;
