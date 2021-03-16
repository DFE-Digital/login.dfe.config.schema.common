const SimpleSchema = require('simpl-schema').default;
const common = require('./../lib');
const { getLogger, clone } = require('./utils');

const completeConfig = {
  loggerSettings: {
    logLevel: 'debug',
    applicationName: 'unit tests',
    auditDb: {
      host: 'localhost',
      username: 'user-890a76f2-8932-4516-a933-28aea42b50f4',
      password: 'ready-2f5b5d0f-7b31-4e1b-a23d-b5bab0620501',
      dialect: 'mssql',
      name: 'audit',
      encrypt: true,
      schema: 'dbo',
    },
  },
};
const schema = new SimpleSchema({
  loggerSettings: common.schemas.loggerSettings,
});
const logger = getLogger();
const exit = jest.fn();

describe('when validating a schema with logger settings', () => {
  beforeEach(() => {
    logger.mockResetAll();

    exit.mockReset();
  });

  it('then it should be valid with all options', () => {
    common.validateConfigAgainstSchema(completeConfig, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with auditDb missing', () => {
    const config = clone(completeConfig);
    config.loggerSettings.auditDb = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with log level of info', () => {
    const config = clone(completeConfig);
    config.loggerSettings.logLevel = 'info';

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with log level of warn', () => {
    const config = clone(completeConfig);
    config.loggerSettings.logLevel = 'warn';

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with log level of error', () => {
    const config = clone(completeConfig);
    config.loggerSettings.logLevel = 'error';

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });


  it('then it should be invalid with logLevel missing', () => {
    const config = clone(completeConfig);
    config.loggerSettings.logLevel = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid with applicationName missing', () => {
    const config = clone(completeConfig);
    config.loggerSettings.applicationName = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid with log level othat is not debug, info, warn or error', () => {
    const config = clone(completeConfig);
    config.loggerSettings.logLevel = 'everything';

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });
});
