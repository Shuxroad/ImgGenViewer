const express = require("express");

const app = express();
const port = process.env.PORT || 3001;
var path = require('path');
var indexRouter = require('./routes/index');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);


const server = app.listen(port, () => console.log(`app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

module.exports = app;
