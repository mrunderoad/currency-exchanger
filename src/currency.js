export default class CurrencyExchange {
  static getExchange() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/b7ee77d7091e7244292a214e/latest/USD`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
  converter(body, number) {
  const eur = parseFloat(body[0].cost)
  const gbp = parseFloat(body[0].cost)
  const cad = parseFloat(body[0].cost)
  const aud = parseFloat(body[0].cost)
  const jpy = parseFloat(body[0].cost)
  let convertedArray = [];

  if (number !== 0) {
    convertedArray.push(`USD to EUR : ${number/eur}`);
    convertedArray.push(`USD to GBP : ${number/gbp}`);
    convertedArray.push(`USD to CAD : ${number/cad}`);
    convertedArray.push(`USD to AUD : ${number/aud}`);
    convertedArray.push(`USD to JPY : ${number/jpy}`);
  } else {
    return NaN;
  }
  return convertedArray;
  }
}