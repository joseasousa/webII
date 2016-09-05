var express = require('express'),
  load = require('express-load'),
  bodyParser = require('body-parser');

module.exports = function () {
  var app = express();
  app.set('port', 3000);

  if (process.env.NODE_ENV = 'production') {
    app.use(express.static('./dist'));
  } else {
    app.use(express.static('./public'));
  }

  // configuracao bodyParser e method override
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(require('method-override')());

  load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes')
    .into(app);

  return app;
};
