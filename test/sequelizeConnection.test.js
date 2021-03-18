const SimpleSchema = require('simpl-schema').default;
const common = require('./../lib');
const { getLogger, clone } = require('./utils');

const completeConfig = {
  database: {
    host: 'localhost',
    username: 'user-890a76f2-8932-4516-a933-28aea42b50f4',
    password: 'ready-2f5b5d0f-7b31-4e1b-a23d-b5bab0620501',
    dialect: 'mssql',
    name: 'audit',
    encrypt: true,
    schema: 'dbo',
    pool: {
      max: 100,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
const schema = new SimpleSchema({
  database: common.schemas.sequelizeConnection,
});
const logger = getLogger();
const exit = jest.fn();

describe('when validating a schema with sequelize connection settings', () => {
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

  it('then it should be valid with host missing', () => {
    const config = clone(completeConfig);
    config.database.host = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with username missing', () => {
    const config = clone(completeConfig);
    config.database.username = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with password missing', () => {
    const config = clone(completeConfig);
    config.database.password = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with dialect missing', () => {
    const config = clone(completeConfig);
    config.database.dialect = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with dialect of mssql', () => {
    const config = clone(completeConfig);
    config.database.dialect = 'mssql';

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with dialect of postgres', () => {
    const config = clone(completeConfig);
    config.database.dialect = 'postgres';

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with name missing', () => {
    const config = clone(completeConfig);
    config.database.name = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with encrypt missing', () => {
    const config = clone(completeConfig);
    config.database.encrypt = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with schema missing', () => {
    const config = clone(completeConfig);
    config.database.schema = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with pool missing', () => {
    const config = clone(completeConfig);
    config.database.pool = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with pool.max missing', () => {
    const config = clone(completeConfig);
    config.database.pool.max = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with pool.min missing', () => {
    const config = clone(completeConfig);
    config.database.pool.min = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with pool.acquire missing', () => {
    const config = clone(completeConfig);
    config.database.pool.acquire = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });

  it('then it should be valid with pool.idle missing', () => {
    const config = clone(completeConfig);
    config.database.pool.idle = undefined;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(0);
    expect(exit).toHaveBeenCalledTimes(0);
  });


  it('then it should be invalid if encrypt not boolean', () => {
    const config = clone(completeConfig);
    config.database.encrypt = 'string';

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if pool.max is not a number' , () => {
    const config = clone(completeConfig);
    config.database.pool.max = 'not-a-number';

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if pool.max is not an integer number' , () => {
    const config = clone(completeConfig);
    config.database.pool.max = 123.456;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if pool.min is not a number' , () => {
    const config = clone(completeConfig);
    config.database.pool.min = 'not-a-number';

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if pool.min is not an integer number' , () => {
    const config = clone(completeConfig);
    config.database.pool.min = 123.456;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if pool.acquire is not a number' , () => {
    const config = clone(completeConfig);
    config.database.pool.acquire = 'not-a-number';

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if pool.acquire is not an integer number' , () => {
    const config = clone(completeConfig);
    config.database.pool.acquire = 123.456;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if pool.idle is not a number' , () => {
    const config = clone(completeConfig);
    config.database.pool.idle = 'not-a-number';

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });

  it('then it should be invalid if pool.idle is not an integer number' , () => {
    const config = clone(completeConfig);
    config.database.pool.idle = 123.456;

    common.validateConfigAgainstSchema(config, schema, logger, exit);

    expect(logger.warn).toHaveBeenCalledTimes(0);
    expect(logger.error).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledTimes(1);
    expect(exit).toHaveBeenCalledWith(1);
  });
});
