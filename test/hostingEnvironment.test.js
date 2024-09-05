const SimpleSchema = require('simpl-schema').default;
const common = require('./../lib');
const { getLogger, clone } = require('./utils');

const completeConfig = {
  hostingEnvironment: {
    useDevViews: true,
    env: 'prod',
    host: 'localhost',
    port: 443,
    protocol: 'https',
    sslCert: 'some-pem',
    sslKey: 'some-other-pem',
    sessionSecret: 'super-duper-secret',
    applicationInsights: 'some-ai-key',
    sessionCookieExpiryInMinutes: 60,
    gaTrackingId: 'some-analytics-key',
    interactionsUrl: 'https://interactions.unit.tests',
    profileUrl: 'https://profile.unit.tests',
    helpUrl: 'https://help.unit.tests',
    helpAssistantUrl: 'https://help-assistant.unit.tests',
    servicesUrl: 'https://services.unit.tests',
    supportUrl: 'https://support.unit.tests',
    redisPingInSeconds: 15,
    agentKeepAlive: {
      maxSockets: 123,
      maxFreeSockets: 123,
      timeout: 123,
      keepAliveTimeout: 123,
    },
  },
};
const schema = new SimpleSchema({
  hostingEnvironment: common.schemas.hostingEnvironment,
});
const logger = getLogger();
const exit = jest.fn();

describe('when validating schema with an api server auth', () => {
  beforeEach(() => {
    logger.mockResetAll();

    exit.mockReset();
  });

  it('then it should be valid with all options' , () => {
    common.validateConfigAgainstSchema(completeConfig, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with useDevViews missing' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.useDevViews = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with sslCert missing' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.sslCert = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with sslKey missing' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.sslCert = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with sessionSecret missing' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.sessionSecret = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with applicationInsights missing' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.applicationInsights = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with sessionCookieExpiryInMinutes missing' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.sessionCookieExpiryInMinutes = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with gaTrackingId missing' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.gaTrackingId = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with interactionsUrl missing' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.interactionsUrl = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with profileUrl missing' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.profileUrl = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with helpUrl missing' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.helpUrl = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with helpAssistantUrl missing' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.helpAssistantUrl = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);
    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with servicesUrl missing' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.servicesUrl = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with supportUrl missing' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.supportUrl = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with redisPingInSeconds missing' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.redisPingInSeconds = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });


  it('then it should be invalid if useDevViews is not a boolean' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.useDevViews = 'no';

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if port is not a number' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.port = 'not-a-number';

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if port is not an integer number' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.port = 123.456;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if protocol is not a http or https' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.protocol = 'ftp';

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if sessionCookieExpiryInMinutes is not a number' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.sessionCookieExpiryInMinutes = 'not-a-number';

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if sessionCookieExpiryInMinutes is not an integer number' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.sessionCookieExpiryInMinutes = 123.456;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if interactionsUrl is not a url' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.interactionsUrl = 'not-a-url';

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if profileUrl is not a url' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.profileUrl = 'not-a-url';

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if helpUrl is not a url' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.helpUrl = 'not-a-url';

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if helpAssistantUrl is not a url' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.helpAssistantUrl = 'not-a-url';

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if servicesUrl is not a url' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.servicesUrl = 'not-a-url';

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if supportUrl is not a url' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.supportUrl = 'not-a-url';

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if redisPingInSeconds is not a number' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.redisPingInSeconds = 'not-a-number';

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if redisPingInSeconds is not an integer number' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.redisPingInSeconds = 123.456;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });


  it('then it should be invalid if env is missing' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.env = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if host is missing' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.host = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if port is missing' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.port = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if protocol is missing' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.protocol = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if agentKeepAlive is missing' , () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.agentKeepAlive = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be valid if environmentBannerMessage is present', () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.environmentBannerMessage = 'This is the unit tests. Do not make changes here';

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid if environmentBannerMessage is a string with the value \'null\'', () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.environmentBannerMessage = 'null';

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be invalid if environmentBannerMessage is present but too short', () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.environmentBannerMessage = 'short';

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if environmentBannerMessage is present but too long', () => {
    const config = clone(completeConfig);
    config.hostingEnvironment.environmentBannerMessage = 'this is a very long banner, with way tooooooooooooooo much content. It would just wrap in the UI and look terrible; so lets just not allow this';

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });
});
