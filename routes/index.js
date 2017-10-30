const express = require('express');

const router = express.Router();

const core = require('./core');


/**
* all routes starting api /routes/core router
*/
router.use('/', core);

/**
* export router
*/
module.exports = router;
