var express = require('express'),
    app = express(),
    passport = require('passport'),
    path = require('path'),
    Poet = require('poet'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    routes = require('./routes/index');

(function(){
 "use strict";

  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');

  app.use(favicon(__dirname + '/public/favicon.ico'));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use('/', routes);
  app.use('/users', routes);
  app.use('/login', routes);
  app.use('/register', routes);

  var poet = new Poet(app, {
    posts: './_posts/',
    postsPerPage: 5,
    metaFormat: 'json'
  });

  poet.init().then(function () {
    // ready to go!
  });

  app.set('view engine', 'jade');
  app.set('views', __dirname + '/views');
  app.use(express.static(__dirname + '/public'));

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
      var err = new Error('Not Found');
      err.status = 404;
      next(err);
  });

  // error handlers

  //development error handler
  //will print stacktrace
  if (app.get('env') === 'development') {
      app.use(function(err, req, res, next) {
          res.status(err.status || 500);
          res.render('error', {
              message: err.message,
              error: err
          });
      });
  }

  //production error handler
  //no stacktraces leaked to user
  app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
          message: err.message,
          error: {}
      });
  });


  app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));

  module.exports = app;

  app.listen(3000);

})();
