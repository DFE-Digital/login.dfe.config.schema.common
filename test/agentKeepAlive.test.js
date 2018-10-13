const SimpleSchema = require('simpl-schema').default;
const common = require('./../lib');
const { getLogger } = require('./utils');
const pick = require('lodash/pick');

const completeConfig = {
  keepAlive: {
    maxSockets: 123,
    maxFreeSockets: 123,
    timeout: 123,
    keepAliveTimeout: 123,
  },
};
const schema = new SimpleSchema({
  keepAlive: common.schemas.agentKeepAlive,
});
const logger = getLogger();
const exit = jest.fn();

describe('when validating a schema with a keep alive', () => {
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

  it('then it should be valid with only maxSockets', () => {
    const config = pick(completeConfig, ['keepAlive.maxSockets']);

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with only maxFreeSockets', () => {
    const config = pick(completeConfig, ['keepAlive.maxFreeSockets']);

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with only timeout', () => {
    const config = pick(completeConfig, ['keepAlive.timeout']);

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with only keepAliveTimeout', () => {
    const config = pick(completeConfig, ['keepAlive.keepAliveTimeout']);

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be invalid if maxSockets is a decimal', () => {
    const config = Object.assign({}, completeConfig, { keepAlive: { maxSockets: 123.456 } });

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if maxSockets is not a number', () => {
    const config = Object.assign({}, completeConfig, { keepAlive: { maxSockets: 'not-a-number' } });

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if maxFreeSockets is a decimal', () => {
    const config = Object.assign({}, completeConfig, { keepAlive: { maxFreeSockets: 123.456 } });

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if maxFreeSockets is not a number', () => {
    const config = Object.assign({}, completeConfig, { keepAlive: { maxFreeSockets: 'not-a-number' } });

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if timeout is a decimal', () => {
    const config = Object.assign({}, completeConfig, { keepAlive: { timeout: 123.456 } });

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if timeout is not a number', () => {
    const config = Object.assign({}, completeConfig, { keepAlive: { timeout: 'not-a-number' } });

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if keepAliveTimeout is a decimal', () => {
    const config = Object.assign({}, completeConfig, { keepAlive: { keepAliveTimeout: 123.456 } });

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if keepAliveTimeout is not a number', () => {
    const config = Object.assign({}, completeConfig, { keepAlive: { keepAliveTimeout: 'not-a-number' } });

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });
});