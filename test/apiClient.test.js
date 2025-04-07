const SimpleSchema = require("simpl-schema").default;
const common = require("./../lib");
const { getLogger, clone } = require("./utils");
const pick = require("lodash/pick");

const completeStaticConfig = {
  someApi: {
    type: "static",
  },
};
const completeApiConfig = {
  someApi: {
    type: "api",
    service: {
      url: "https://some.api.test",
      auth: {
        type: "aad",
        tenant: "name.onmicrosoft.com",
        authorityHostUrl: "https://login.microsoftonline.com/some-uuid",
        clientId: "some-uuid",
        clientSecret: "some-random-string",
        resource: "some-uuid",
      },
    },
  },
};
const schema = new SimpleSchema({
  someApi: common.schemas.apiClient,
});
const logger = getLogger();
const exit = jest.fn();

describe("when validating schema with an api client", () => {
  beforeEach(() => {
    logger.mockResetAll();

    exit.mockReset();
  });

  describe("and the type is static", () => {
    it("then it should only require type", () => {
      common.validateConfigAgainstSchema(
        completeStaticConfig,
        schema,
        logger,
        exit,
      );

      expect(logger.warn).toHaveBeenCalledTimes(0);
      expect(logger.error).toHaveBeenCalledTimes(0);
      expect(exit).toHaveBeenCalledTimes(0);
    });
  });

  describe("and the type is api", () => {
    it("then it should be valid with auth type of aad", () => {
      common.validateConfigAgainstSchema(
        completeApiConfig,
        schema,
        logger,
        exit,
      );

      expect(logger.warn).toHaveBeenCalledTimes(0);
      expect(logger.error).toHaveBeenCalledTimes(0);
      expect(exit).toHaveBeenCalledTimes(0);
    });

    it("then it should be valid with auth type of secret", () => {
      const config = clone(completeApiConfig);
      config.someApi.service.auth = {
        type: "secret",
        jwt: "some-jwt-string",
      };

      common.validateConfigAgainstSchema(config, schema, logger, exit);

      expect(logger.warn).toHaveBeenCalledTimes(0);
      expect(logger.error).toHaveBeenCalledTimes(0);
      expect(exit).toHaveBeenCalledTimes(0);
    });

    it("then it should be invalid if url missing", () => {
      const config = clone(completeApiConfig);
      config.someApi.service.url = undefined;

      common.validateConfigAgainstSchema(config, schema, logger, exit);

      expect(logger.warn).toHaveBeenCalledTimes(0);
      expect(logger.error).toHaveBeenCalledTimes(1);
      expect(exit).toHaveBeenCalledTimes(1);
      expect(exit).toHaveBeenCalledWith(1);
    });

    it("then it should be invalid if auth missing", () => {
      const config = clone(completeApiConfig);
      config.someApi.service.auth = undefined;

      common.validateConfigAgainstSchema(config, schema, logger, exit);

      expect(logger.warn).toHaveBeenCalledTimes(0);
      expect(logger.error.mock.calls.length).toBeGreaterThanOrEqual(1); // auth & all sub types
      expect(exit).toHaveBeenCalledTimes(1);
      expect(exit).toHaveBeenCalledWith(1);
    });

    it("then it should be invalid if auth type not aad or secret", () => {
      const config = clone(completeApiConfig);
      config.someApi.service.auth.type = "something-else";

      common.validateConfigAgainstSchema(config, schema, logger, exit);

      expect(logger.warn).toHaveBeenCalledTimes(0);
      expect(logger.error).toHaveBeenCalledTimes(1);
      expect(exit).toHaveBeenCalledTimes(1);
      expect(exit).toHaveBeenCalledWith(1);
    });

    it("then it should be invalid if auth type secret and jwt missing", () => {
      const config = clone(completeApiConfig);
      config.someApi.service.auth = {
        type: "secret",
      };

      common.validateConfigAgainstSchema(config, schema, logger, exit);

      expect(logger.warn).toHaveBeenCalledTimes(0);
      expect(logger.error).toHaveBeenCalledTimes(1);
      expect(exit).toHaveBeenCalledTimes(1);
      expect(exit).toHaveBeenCalledWith(1);
    });

    it("then it should be invalid if auth type aad and tenant missing", () => {
      const config = clone(completeApiConfig);
      config.someApi.service.auth.tenant = undefined;

      common.validateConfigAgainstSchema(config, schema, logger, exit);

      expect(logger.warn).toHaveBeenCalledTimes(0);
      expect(logger.error).toHaveBeenCalledTimes(1);
      expect(exit).toHaveBeenCalledTimes(1);
      expect(exit).toHaveBeenCalledWith(1);
    });

    it("then it should be invalid if auth type aad and authorityHostUrl missing", () => {
      const config = clone(completeApiConfig);
      config.someApi.service.auth.authorityHostUrl = undefined;

      common.validateConfigAgainstSchema(config, schema, logger, exit);

      expect(logger.warn).toHaveBeenCalledTimes(0);
      expect(logger.error).toHaveBeenCalledTimes(1);
      expect(exit).toHaveBeenCalledTimes(1);
      expect(exit).toHaveBeenCalledWith(1);
    });

    it("then it should be invalid if auth type aad and clientId missing", () => {
      const config = clone(completeApiConfig);
      config.someApi.service.auth.clientId = undefined;

      common.validateConfigAgainstSchema(config, schema, logger, exit);

      expect(logger.warn).toHaveBeenCalledTimes(0);
      expect(logger.error).toHaveBeenCalledTimes(1);
      expect(exit).toHaveBeenCalledTimes(1);
      expect(exit).toHaveBeenCalledWith(1);
    });

    it("then it should be invalid if auth type aad and clientSecret missing", () => {
      const config = clone(completeApiConfig);
      config.someApi.service.auth.clientSecret = undefined;

      common.validateConfigAgainstSchema(config, schema, logger, exit);

      expect(logger.warn).toHaveBeenCalledTimes(0);
      expect(logger.error).toHaveBeenCalledTimes(1);
      expect(exit).toHaveBeenCalledTimes(1);
      expect(exit).toHaveBeenCalledWith(1);
    });

    it("then it should be invalid if auth type aad and resource missing", () => {
      const config = clone(completeApiConfig);
      config.someApi.service.auth.resource = undefined;

      common.validateConfigAgainstSchema(config, schema, logger, exit);

      expect(logger.warn).toHaveBeenCalledTimes(0);
      expect(logger.error).toHaveBeenCalledTimes(1);
      expect(exit).toHaveBeenCalledTimes(1);
      expect(exit).toHaveBeenCalledWith(1);
    });
  });

  describe("and the type is not api or static", () => {
    it("then it should be invalid", () => {
      const config = clone(completeApiConfig);
      config.type = "something-else";

      common.validateConfigAgainstSchema(config, schema, logger, exit);

      expect(logger.warn).toHaveBeenCalledTimes(0);
      expect(logger.error).toHaveBeenCalledTimes(1);
      expect(exit).toHaveBeenCalledTimes(1);
      expect(exit).toHaveBeenCalledWith(1);
    });
  });
});
