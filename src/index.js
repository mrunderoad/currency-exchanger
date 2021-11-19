import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency.js';

$(document).ready(function () {
  let promise = CurrencyExchange.getExchange();
  promise.then(function () {
    const exchange = userInput;
  });
  $('#formOne').submit(function (event) {
    event.preventDefault(); 
    const input = $('.amount').val();
    if (exchange.includes(input)) {
      exchange.forEach(function (number, index) {
        if (input === ".eur") {
          $('.eur').text();
        }
      })
    }
  });
  


//   // function showError (error) {
//   //   $('.showErrors').text(`There was an error processing your request: ${error}`);
//   // }
 });