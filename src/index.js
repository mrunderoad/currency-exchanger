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

// function displayErrors(){

// }

$(document).ready(function() {
  $('#formOne').submit(function(event) {
    event.preventDefault();
    let amount = $('#amount').val();
    let selectedCurrency = $('input[name="currency"]:checked').val();
    let promise = ExchangeCurrency.getExchange();
    promise.then(function(response){
      let body = JSON.parse(response)
      let conversionRate = body.conversion_rates[selectedCurrency]
      console.log(amount, selectedCurrency, conversionRate);
      $('#result').text(`${amount} USD = ${conversionRate * amount} ${selectedCurrency}`);
      $('#showErrors').text();
    })
    
    clearField();
    });
   
});