const SimpleSchema = require('simpl-schema').default;
const sequelizeConnection = require('./sequelizeConnection');

module.exports = new SimpleSchema({
  logLevel: {
    type: String,
    allowedValues: ['debug', 'info', 'warn', 'error']
  },
  applicationName: String,
  aiSendLiveMetrics: Boolean,
  auditDb: {
    type: sequelizeConnection,
    optional: true,
  },
});