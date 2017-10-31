const con = require('../mysql');
const Promise = require('bluebird');
const constants = require('../config/constants');
const responseDispatcher = require('../response/responsedispatcher');

class CoreController {
  getCoinPrice(req, res) {
    const pair = req.query.pair;
    const sql = `(select lastupdatedtimestmap updated,coinpair coin,price value,excahnge from  exchanges where coinpair='${pair}' and excahnge='bittrex' order by lastupdatedtimestmap limit 1)
                  union all
                  (select lastupdatedtimestmap updated,coinpair coin,price value,excahnge from  exchanges where coinpair='${pair}' and excahnge='poloniex' order by lastupdatedtimestmap limit 1);`;
    const info = [];
    con.query(sql, (err, result) => {
      if (!err) {
        result.forEach((dbres) => {
          info.push(JSON.parse(JSON.stringify(dbres)));
        });
        // console.log(info);
        const response = {
          status: constants.RES_CONSTANTS.OK,
          info,
        };
        responseDispatcher.dispatch(res, JSON.stringify(response), constants.HTTP_STATUS.OK);
      } else {
        responseDispatcher.dispatch(res, JSON.stringify(constants.EXCHANGE_ERROR), constants.HTTP_STATUS.NOTOK);
      }
      // responseDispatcher.dispatch(res, constants.EXCHANGE_ERROR, constants.HTTP_STATUS.NOTOK);
    });
  }

  getExchangeInfo(req, res) {
    const name = req.query.name;
    const sql = `select coinpair coin,price value from  exchanges where excahnge='${name}' order by lastupdatedtimestmap desc`;

    const info = [];
    con.query(sql, (err, result) => {
      if (!err) {
        result.forEach((dbres) => {
          info.push(JSON.parse(JSON.stringify(dbres)));
        });
        // console.log(info);
        const response = {
          status: constants.RES_CONSTANTS.OK,
          info,
        };
        responseDispatcher.dispatch(res, JSON.stringify(response), constants.HTTP_STATUS.OK);
      } else {
        responseDispatcher.dispatch(res, JSON.stringify(constants.EXCHANGE_ERROR), constants.HTTP_STATUS.NOTOK);
      }
    });
  }

  insertIntoDatabase(coinpair, excahnge, price, high, low, bid, ask) {
    const sql = `insert into exchanges(lastupdatedtimestmap, coinpair, excahnge, price,highprice,lowprice,bidprice,askprice) values(now(),'${coinpair}','${excahnge}',${price},${high},${low},${bid},${ask}) `;
    db.executeQuery(sql);
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
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}
module.exports = new CoreController();
