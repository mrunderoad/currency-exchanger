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
    const input = $('.eur').val();  
  
  if (input === ".eur") {
    $('#eur').text(exchange);
    } else if (input === ".gbp") {
    $('#gbp').text(exchange)

    } 
  }
}
 





$(document).ready(function () {
  let promise = CurrencyExchange.getExchange();
  promise.then(function () {
  });
  $('#formOne').submit(function (event) {
    event.preventDefault();  
    //getExchange 
  });
  


  // function showError (error) {
  //   $('.showErrors').text(`There was an error processing your request: ${error}`);
  // }
});