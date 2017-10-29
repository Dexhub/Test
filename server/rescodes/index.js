// # Middleware
// Handles all error code files
// Index file to manage multiple error code files at scale

const gError = require('./error.js');
const gSuccess = require('./success.js');
const logger = require('../winston');

module.exports = {
	errBody: (error) => {
		const message = gError[error.message];
		if (message) {
			return {
				status: 'NOTOK',
				errorcode: parseInt(error.message, 10),
				errormessage: message.errormessage,
				messagedetail: message.messagedetail
			};
		} else {
			logger.log(error);
			return {
				status: 'NOTOK',
				errorcode: 1000,
				errormessage: 'Something went wrong from our side',
				messagedetail: 'We are looking into it!! please try after some time'
			};
		}
	},

	successMsg: (data, code) => {
		return {
			status: 'OK',
			info: data,
		};
	},

	generateErrorRes: (e, data) => module.exports.errBody(e),

	generateSuccessRes: (data, message) => module.exports.successMsg(data, message),
};