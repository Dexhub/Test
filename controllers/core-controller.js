const con = require('../mysql');
const ccxt = require('ccxt');
const Promise = require('bluebird');
const constants = require('../config/constants');
const responseDispatcher = require('../response/responsedispatcher');


class CoreController {
  getCoinPrice(req, res) {
    const pair = req.params.pair;
    const sql = `select lastupdatedtimestmap updated,coinpair coin,price value,excahnge from  excahnges where coinpair='${pair}'`;
    this.executeQueryAndFetchResults(sql)
    .then((result) => {
      responseDispatcher.dispatch(res, result, constants.RES_CONSTANTS.ok);
    })
    .catch(() => {
      // send error
      responseDispatcher.dispatch(res, constants.COINPAIR_ERROR, constants.COINPAIR_ERROR.errorcode);
    });
    // const polo = ccxt.poloniex();
    // (async () => {
    //   console.log(await (polo.fetchTicker('BTC/USD'))); // ticker for BTC/USD
    //   const symbols = Object.keys(polo.markets);
    //   const random = Math.floor((Math.random() * symbols.length)) - 1;
    //   console.log(polo.fetchTicker(symbols[random])); // ticker for a random symbol
    // })();

    res.send('inserted');
  }

  getExchangeInfo(req, res) {
    const name = req.params.name;
    const sql = `select lastupdatedtimestmap updated,coinpair coin,price value,excahnge from  excahnges where excahnge='${name}'`;
    this.executeQueryAndFetchResults(sql)
    .then((result) => {
      // send result
      responseDispatcher.dispatch(res, result, constants.RES_CONSTANTS.ok);
    })
    .catch(() => {
      // send error
      responseDispatcher.dispatch(res, constants.EXCHANGE_ERROR, constants.EXCHANGE_ERROR.errorcode);
    });
  }

  insertIntoDatabase(coinpair, excahnge, price) {
    const sql = `insert into excahnges(lastupdatedtimestmap, coinpair, excahnge, price) values(now(),'${coinpair}','${excahnge}',${price})`;
    this.executeQuery(sql);
  }

  executeQuery(sql) {
    con.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      }
    });
  }

  executeQueryAndFetchResults(sql) {
    return new Promise((resolve, reject) => {
      con.query(sql, (err, result) => {
        if (err) {
          reject();
        } else {
          resolve(result);
        }
      });
    });
  }
}
module.exports = new CoreController();
