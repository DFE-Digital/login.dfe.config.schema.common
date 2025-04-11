const SimpleSchema = require("simpl-schema").default;
const patterns = require("./patterns");

module.exports = new SimpleSchema({
  url: {
    type: String,
    regEx: patterns.url,
    optional: true,
  },
  version: {
    type: String,
    optional: true,
  },
});
