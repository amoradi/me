var express = require('express'),
  app = express(),
  api = require('./api'),
  auth = require('./auth/routes'),
  config = require('./config'),
  pugStatic = require('pug-static'),
  path = require('path');

require('mongoose').connect(config.db.url);
require('./middleware/app')(app);

app.use('/api/', api);
app.use('/auth', auth);
app.set('view engine', 'pug')
app.use('/', express.static('public'));
app.use(pugStatic("public"));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
