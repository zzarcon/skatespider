/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'skatespider',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {}
    },
    contentSecurityPolicy: {
      'img-src': "* 'self' 'unsafe-inline'",
      'connect-src': "*",
      'style-src': "* 'self' 'unsafe-inline'",
      'report-uri': "*",
      'script-src': "* 'self' 'unsafe-inline' 'unsafe-eval'",
      'font-src': "* 'self' 'unsafe-inline' 'unsafe-eval'",
      'default-src': "* 'self' 'unsafe-inline' 'unsafe-eval'",
      'media-src': "* 'self' 'unsafe-inline' 'unsafe-eval'"
    },
    APP: {}
  };

  if (environment === 'development') {

  }

  if (environment === 'test') {
    ENV.baseURL = '/';
    ENV.locationType = 'none';
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV['ember-cli-mirage'] = {
      enabled: true
    };
  }

  return ENV;
};