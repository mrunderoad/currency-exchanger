import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeCurrency from './js/currency.js';

function display(response) {
  // let inputCash = result.
  let pickedCurrency = response.currency;
  $('#result').text(pickedCurrency)
}

$(document).ready(function() {
  $('#formOne').submit(function(event) {
    event.preventDefault();
    let currency = $('formOne').val()
    ExchangeCurrency.getExchangeRate(currency)
    .then(function(display){
      

    display(currency)

    });
    $('#result').text();
  });
});