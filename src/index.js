import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency.js';

$(document).ready(function () {
  $('#exchangeRate').click(function (event) {
    event.preventDefault();
    const number = $('#amount').val();
    const eur = $('#eur').val();
    const gbp = $('#gpb').val();
    const cad = $('#cad').val();
    const aud = $('#aud').val();
    const jpy = $('#jpy').val();
    $('#exchangeRate').val("");

    let promise = CurrencyExchange.getExchange();
    promise.then(function (response) {
      const body = JSON.parse(response);
      const currencyConverter = new CurrencyExchange(body, number);

      
    });
  });
});