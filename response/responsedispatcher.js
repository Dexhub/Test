const constants = require('../response/constants');

/**
* a single point response dispatcher
* error and success results are dispatched
*/
class ResponseDispatch {
  dispatch(res, data, statusCode) {
    res.setHeader('Content-Type', constants.RES_HEADER.CONTENT_TYPE);
    res.setHeader('charset', constants.RES_HEADER.CHAR_SET);
    res.writeHead(statusCode);
    res.write(data);
    res.end();
  }
  dispatchError(res, data, statusCode) {
    res.setHeader('Content-Type', constants.RES_HEADER.CONTENT_TYPE);
    res.setHeader('charset', constants.RES_HEADER.CHAR_SET);
    res.writeHead(statusCode);
    res.write(data);
    res.end();
  }
}


module.exports = new ResponseDispatch();
