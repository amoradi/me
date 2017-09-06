var config = require('./server/config'),
  app = require('./server'),
  logger = require('./server/util/logger');

app.listen(config.port);
logger.log('listening on http://localhost:' + config.port);
