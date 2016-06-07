/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'tutorial-builder',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',

    firebase: {
      apiKey: 'AIzaSyBEngovFuK5B4FFoScc32ikHqShDKavun4',
      authDomain: 'tutorial-builder.firebaseapp.com',
      databaseURL: 'https://tutorial-builder.firebaseio.com',
      storageBucket: 'tutorial-builder.appspot.com',
    },

    // if using ember-cli-content-security-policy
    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-eval' apis.google.com",
      'frame-src': "'self' https://*.firebaseapp.com",
      'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    // Disable Mirage in development environment.
    ENV['ember-cli-mirage'] = {
      enabled: false
    };

    ENV.host = 'http://localhost:3000';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
