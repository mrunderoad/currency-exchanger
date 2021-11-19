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
  
  $(".showResult").append("<li>" + exchange + "</li>");
  }
}
 





$(document).ready(function () {
  let promise = CurrencyExchange.getExchange();
  promise.then(function () {
    console.log(getExchange);
  });
  $('#formOne').submit(function (event) {
    event.preventDefault();
    const input = $('.amount').val();
    $('.showResult').text(input);
  });
});