const SimpleSchema = require('simpl-schema').default;
const common = require('./../lib');
const { getLogger, clone } = require('./utils');
const pick = require('lodash/pick');

const completeSecretConfig = {
  auth: {
    type: 'secret',
    secret: 'some-super-secret-string'
  }
};
const completeAADConfig = {
  auth: {
    type: 'aad',
    identityMetadata: 'https://login.microsoftonline.com/some-uuid/.well-known/openid-configuration',
    clientID: 'some-uuid',
  },
};
const schema = new SimpleSchema({
  auth: common.schemas.apiServerAuth,
});
const logger = getLogger();
const exit = jest.fn();

describe('when validating schema with an api server auth', () => {
  beforeEach(() => {
    logger.mockResetAll();

    exit.mockReset();
  });

  describe('and a type of secret', () => {
    it('then it should be valid with all options', () => {
      common.validateConfigAgainstSchema(completeSecretConfig, schema, logger, exit);

      expect(logger.warn).toHaveBeenCalledTimes(0);
      expect(logger.error).toHaveBeenCalledTimes(0);
      expect(exit).toHaveBeenCalledTimes(0);
    });

    it('then it should be invalid if missing secret', () => {
      const config = clone(completeSecretConfig);
      config.auth.secret = undefined;

      common.validateConfigAgainstSchema(config, schema, logger, exit);

      expect(logger.warn).toHaveBeenCalledTimes(0);
      expect(logger.error).toHaveBeenCalledTimes(1);
      expect(exit).toHaveBeenCalledTimes(1);
      expect(exit).toHaveBeenCalledWith(1);
    });
  });

  describe('and a type of aad', () => {
    it('then it should be valid with all options', () => {
      common.validateConfigAgainstSchema(completeAADConfig, schema, logger, exit);

      expect(logger.warn).toHaveBeenCalledTimes(0);
      expect(logger.error).toHaveBeenCalledTimes(0);
      expect(exit).toHaveBeenCalledTimes(0);
    });

    it('then it should be invalid if missing clientID', () => {
      const config = clone(completeAADConfig);
      config.auth.clientID = undefined;

      common.validateConfigAgainstSchema(config, schema, logger, exit);

      expect(logger.warn).toHaveBeenCalledTimes(0);
      expect(logger.error).toHaveBeenCalledTimes(1);
      expect(exit).toHaveBeenCalledTimes(1);
      expect(exit).toHaveBeenCalledWith(1);
    });

    it('then it should be invalid if missing identityMetadata', () => {
      const config = clone(completeAADConfig);
      config.auth.identityMetadata = undefined;

      common.validateConfigAgainstSchema(config, schema, logger, exit);

      expect(logger.warn).toHaveBeenCalledTimes(0);
      expect(logger.error).toHaveBeenCalledTimes(1);
      expect(exit).toHaveBeenCalledTimes(1);
      expect(exit).toHaveBeenCalledWith(1);
    });

    it('then it should be invalid if identityMetadata is not a url', () => {
      const config = clone(completeAADConfig);
      config.auth.identityMetadata = 'not-a-url';

      common.validateConfigAgainstSchema(config, schema, logger, exit);

      expect(logger.warn).toHaveBeenCalledTimes(0);
      expect(logger.error).toHaveBeenCalledTimes(1);
      expect(exit).toHaveBeenCalledTimes(1);
      expect(exit).toHaveBeenCalledWith(1);
    });
  });
});
