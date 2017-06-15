/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var QuestionSubAnswer = function() {
  var form = this.form = element(by.name('questionForm'));
  form.firstAnswer = element.all(by.css('.radio-answers')).first();
  form.next = form.element(by.id('btn-next'));

  this.answer = function() {
    form.firstAnswer.click();
    form.subAnswer = form.element(by.id('domicile-proprietaire'));
    form.subAnswer.click();
    return form.next.click();
  };
};

module.exports = new QuestionSubAnswer();
