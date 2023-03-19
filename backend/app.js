const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const index = require('./routes/index');
const api = require('./routes/api');
const auth = require('./routes/auth');
const db = require('./mongodb');
const passportLocal = require('./passportLocal');
const passport = require('passport');
const session = require('express-session'); // 세션 설정
const app = express();

app.use(require('connect-history-api-fallback')())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: process.env.SESSION_SECRET || 'awesomecookiesecret',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize()); // passport 구동
app.use(passport.session()); // 세션 연결

db();
passportLocal();

app.use('/', index);
app.use('/api', api);
app.use('/auth', auth);

// app.use (function (req, res, next) {
//   if (req.protocol === 'https') {
//     console.log(req.protocol, req.secure);
//     next();
//   } else {
//     console.log('redirected');
//     res.redirect('https://' + req.headers.host + req.url);
//   }
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
