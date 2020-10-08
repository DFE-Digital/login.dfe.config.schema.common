const SimpleSchema = require('simpl-schema').default;

module.exports = new SimpleSchema({
  url: {
    type: String,
    regEx: patterns.url,
    optional: true,
  },
  version: {
    type: String,
    optional: true,
  }
});