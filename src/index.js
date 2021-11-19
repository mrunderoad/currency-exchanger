import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currency.js';

// function clearFields() {
//   $('.amount').val("");
// } 

function getExchange(response) {
  for(let i=0;i<response.exchange.length; i++) {
    let exchange = response.exchange[i].currency;
    let uinput = userInput;  
  
  if (userInput === ".eur") {
    $('#eur').text(uinput, exchange);
    } else if (userInput === ".gbp") {
    $('#gbp').text(uinput, exchange);

    } 
  }
}
 





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
  


  // function showError (error) {
  //   $('.showErrors').text(`There was an error processing your request: ${error}`);
  // }
});