const SimpleSchema = require('simpl-schema').default;
const agentKeepAlive = require('./agentKeepAlive');
const patterns = require('./patterns');

module.exports = new SimpleSchema({
  useDevViews: {
    type: Boolean,
    optional: true,
  },
  redirectPrefix: {
    type: String,
    optional: true,
  },
  env: String,
  host: String,
  port: {
    type: SimpleSchema.Integer,
  },
  protocol: {
    type: String,
    allowedValues: ['http', 'https'],
  },
  sslCert: {
    type: String,
    optional: true,
  },
  sslKey: {
    type: String,
    optional: true,
  },
  sessionSecret: {
    type: String,
    optional: true,
  },
  applicationInsights: {
    type: String,
    optional: true,
  },
  sessionCookieExpiryInMinutes: {
    type: SimpleSchema.Integer,
    optional: true,
  },
  gaTrackingId: {
    type: String,
    optional: true,
  },
  interactionsUrl: {
    type: String,
    regEx: patterns.url,
    optional: true,
  },
  serviceId: {
    type: String,
    optional: true,
  },
  profileUrl: {
    type: String,
    regEx: patterns.url,
    optional: true,
  },
  helpUrl: {
    type: String,
    regEx: patterns.url,
    optional: true,
  },
  servicesUrl: {
    type: String,
    regEx: patterns.url,
    optional: true,
  },
  supportUrl: {
    type: String,
    regEx: patterns.url,
    optional: true,
  },
  assetsUrl: {
    type: String,
    regEx: patterns.url,
    optional: true,
  },
  surveyUrl: {
    type: String,
    regEx: patterns.url,
    optional: true,
  },
  redisPingInSeconds: {
    type: SimpleSchema.Integer,
    optional: true,
  },
  agentKeepAlive,
  environmentBannerMessage: {
    type: String,
    optional: true,
    custom: function () {
      if (this.value === 'null') {
        return
      }
      if (this.value !== undefined && this.value.length < 25) {
        return SimpleSchema.ErrorTypes.MIN_STRING;
      }
      if(this.value !== undefined && this.value.length > 120) {
        return SimpleSchema.ErrorTypes.MAX_STRING;
      }
    },
  }
});
