import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency.js';

$(document).ready(function () {
  $('#exchangeRate').click(function (event) {
    event.preventDefault();
    const number = $('#amount').val;
    console.log(number);
    $('#exchangeRate').val("");

    let promise = CurrencyExchange.getExchange();
    promise.then(function (response) {
      const body = JSON.parse(response);
      const currencyExchange = new CurrencyExchange.converter(body, number);

      let currencyExchange = [];
      for (let i = 0; i < body.length; i++) {
        currencyExchange.push();
        $('.showEur').text(currencyExchange);
      }
    });
  });
});