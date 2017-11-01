module.exports = {

  /*
  * Database constants
  */
  DB_CONSTANTS: {
    DB_USER: 'root',
    DB_PASSWORD: 'root',
  },

  /*
  * API response constants
  */
  RES_CONSTANTS: {
    OK: 'OK',
    NOTOK: 'NOTOK',
  },

  /*
  * API response status codes
  */
  HTTP_STATUS: {
    OK: 200,
    NOTOK: 400,
  },

  /*
	* Response Header constants
	*/
  RES_HEADER: {
    CONTENT_TYPE: 'application/json',
    CHAR_SET: 'utf-8',
  },

  /*
  *
  */
  COINPAIR_ERROR: {
    status: 'NOTOK',
    errorcode: 1001,
    errormessage: 'Coin pair not found',
    messagedetail: 'Provide more info if needed',
  },

  EXCHANGE_ERROR: {
    status: 'NOTOK',
    errorcode: 1002,
    errormessage: 'Invalid exchange not found',
    messagedetail: 'Provide more info if needed',
  },
};
