'use strict';

var controllers = require('./controllers/index'),
  bodyParser = require('body-parser'),
  urlencodeParser = bodyParser.urlencoded({ extended: false });

exports = module.exports = function(app) {
  // proxy
  app.get('/jobs', controllers.jobs.list);
  app.get('/api/profiles/v1/jobs/:id.json', controllers.jobs.get);
  app.get('/api/profiles/v2/search/jobs.json', controllers.jobs.list);
  app.get('/api/profiles/v2/metadata/categories.json', controllers.jobs.categoriesList);
  // account
  app.post('/account', urlencodeParser, controllers.account.create);
  app.post('/account/:userid', urlencodeParser, controllers.account.update); // TODO: actually should be PUT
  app.get('/account/:userid', controllers.account.get);
};
