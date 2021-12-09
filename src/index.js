import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeCurrency from './js/currency.js';

function clearField() {
  $('#amount').val("");
}

function displayRate(response, currencyChosen) {
  let pickedCurrency = response.currency;
  if (response.currency === currencyChosen)
  return $('#result').text(pickedCurrency);
}

$(document).ready(function() {
  $('#formOne').submit(function(event) {
    event.preventDefault();
    let currency = $('formOne').val();
    ExchangeCurrency.getExchangeRate(currencyChosen);

    displayRate(currency);
    clearField();
    });
    $('#result').text();
});