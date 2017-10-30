const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const index = require('./routes');

const app = express();
const constants = require('./config/constants');
const pollExchange = require('./helpers/poller');

app.use(bodyParser.json());

app.use(cors());

// test endopoint /ping
app.get('/ping', (req, res) => {
  res.status(200).send({
    status: constants.RES_CONSTANTS.OK,
    message: 'pong',
  });
});

// routes starting with /api is handled
app.use('/api', index);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({
    message: err.message || err,
  });
});


app.listen(9000);
console.log('server started on port', 9000);
module.exports = app;
