# login.dfe.config.schema.common
[![Build Status](https://travis-ci.org/DFE-Digital/login.dfe.config.schema.common.svg?branch=master)](https://travis-ci.org/DFE-Digital/login.dfe.config.schema.common)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) [![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

Common config schema components of DfE Sign-in

# Available schemas

1. agentKeepAlive - Keep alive settings for HTTP(S) connections
2. apiClient - For consumer of internal apis
3. apiServerAuth - Auth settings for api servers
4. hostingEnvironment - Environment settings for service
5. loggerSettings - Settings for logging
6. sequelizeConnection - Settings for sequelize connection

`patterns` is also exposed, which includes various common regex patterns

# Usage
```
const common = require('login.dfe.config.schema.common');
const SimpleSchema = require('simpl-schema').default;

const schema = new SimpleSchema({
  loggerSettings: common.schemas.loggerSettings,
  hostingEnvironment: common.schemas.hostingEnvironment,
  directories: common.schemas.apiClient,
  cache: {
    database: common.schemas.sequelizeConnection,
  },
  redirect: {
    url: common.patterns.url,
  },
});
```