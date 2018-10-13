const SimpleSchema = require('simpl-schema').default;

module.exports = new SimpleSchema({
  type: {
    type: String,
    allowedValues: ['secret', 'aad']
  },
  identityMetadata: {
    type: String,
    optional: true,
    custom: function () {
      if (this.siblingField('type').value !== 'secret' && !this.isSet) {
        return SimpleSchema.ErrorTypes.REQUIRED
      }
    },
  },
  clientID: {
    type: String,
    optional: true,
    custom: function () {
      if (this.siblingField('type').value !== 'secret' && !this.isSet) {
        return SimpleSchema.ErrorTypes.REQUIRED
      }
    },
  },
  secret: {
    type: String,
    optional: true,
    custom: function () {
      if (this.siblingField('type').value === 'secret' && !this.isSet) {
        return SimpleSchema.ErrorTypes.REQUIRED
      }
    },
  },
});