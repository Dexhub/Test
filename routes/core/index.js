const express = require('express');

const router = express.Router();

/**
* import AWS controller
*/
const coreController = require('../../controllers/core-controller');

/**
* Route for core apis
*/

/**
* @api {get} /api//coin-price?pair=USD-BTC coin information
* @apiGroup Coins
* @apiSuccess {String} status "OK"
* @apiError {String} status "NOTOK".


*  @apiSuccessExample {json} Success-Response:
*  { "status":"OK",
        "info":[
        {
            "exchange": "bittrex",
            "coin":"USD-BTC",
            "value": 50.5,
            "updated": "",//timestamps (you can decide on the format thats the most suited)
        },
        {
            "exchange": "poloniex",
            "coin":"USD-BTC",
            "value": 50.5,
            "updated": "",//timestamps (you can decide on the format thats the most suited)
        }]
}
*  @apiErrorExample {json} Error-Response:
* {
    "status": "NOTOK",
        "errorcode":1001,
        "errormessage" : "Coin pair not found",
        "messagedetail": "Provide more info if needed"
}
*/
router.get('/coin-price', coreController.getCoinPrice);

/**
* @api {get} /api//coin-price?pair=USD-BTC coin information
* @apiGroup Coins
* @apiSuccess {String} status "OK"
* @apiError {String} status "NOTOK".


*  @apiSuccessExample {json} Success-Response:
*  {
    "status":"OK",
    "info": [
    {
        "coin":"USD-BTC",
        "value": 5700
    },
    {
        "coin":"USD-ETH",
        "value": 234
    },
    {
        "coin":"USD-LTC",
        "value": 50.5
    }]
}
*  @apiErrorExample {json} Error-Response:
*	{
    "status": "NOTOK",
        "errorcode":1002,
        "errormessage" : "Invalid exchange not found",
        "messagedetail": "Provide more info if needed"
}
*/
router.get('/exchange-info', coreController.getExchangeInfo);

/**
* export router
*/
module.exports = router;
