const fs = require('fs');
const path = require('path');
const ccxt = require('ccxt');
const PropertiesReader = require('properties-reader');

let property = PropertiesReader(path.resolve(__dirname, '../timer.properties'));
let polo;

let time = property.get('delay');

class PollExchange {
  constructor() {
    time = property.get('delay');

    polo = ccxt.poloniex();

    polo.load_markets()
    .then((data) => {
      console.log(data);
      const delay = 2000; // milliseconds = seconds * 1000
      // console.log(ccxt.exch);
      (async () => {
        for (const symbol in data) {
          // console.log(await polo.fetchOrderBook(symbol));
          await new Promise(resolve => setTimeout(resolve, delay)); // rate limit
        }
      })();
    }).catch((err) => {
      console.log(err);
    });
    // console.log(markets);

    fs.watch(path.resolve(__dirname, '../timer.properties'), 'utf-8', (eventType, filename) => {
      property = PropertiesReader(path.resolve(__dirname, '../timer.properties'));
      time = property.get('delay');
    });
  }
  invokePoller() {
    setTimeout(() => {
      this.invokePoller();
    }, time);
  }

  changePollTime(delay) {
    time = delay;
  }

  invokeTimer() {
    setTimeout(() => {
      // This place needs to get data from cctx and paste pass to database saver

    }, time);
  }
}
module.exports = new PollExchange();
