const fs = require('fs');
const path = require('path');
const ccxt = require('ccxt');
const PropertiesReader = require('properties-reader');
const coreController = require('../controllers/core-controller');

let property = PropertiesReader(path.resolve(__dirname, '../timer.properties'));
let time;

class PollExchange {
  constructor() {
    time = property.get('delay');

    fs.watch(path.resolve(__dirname, '../timer.properties'), 'utf-8', (eventType, filename) => {
      property = PropertiesReader(path.resolve(__dirname, '../timer.properties'));
      time = property.get('delay');
      this.updateExchange('bittrex');
      this.updateExchange('poloniex');
    });
  }


  updateExchange(exchange) {
    setTimeout(() => {
      try {
        const polo = ccxt[exchange]();
        polo.loadMarkets()
        .catch((err) => {
          console.log(err);
        });
        polo.fetchTickers()
        .then((data) => {
          for (const key in data) {
            if (data[key].info.MarketName === 'USDT-BTC') {
              const price = (data[key].bid + data[key].ask) / 2;
              coreController.insertIntoDatabase('USDT-BTC', exchange, price, data[key].high, data[key].low, data[key].bid, data[key].ask);
              console.log('inserted');
            }
          }
        }).catch((err) => {
          console.log('reject', err);
        });
      } catch (e) {
        console.log(e);
      }
      this.updateExchange(exchange);
    }, time);
  }
}
module.exports = new PollExchange();
