const getLogger = () => {
  return {
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
    mockResetAll: function () {
      this.info.mockReset();
      this.warn.mockReset();
      this.error.mockReset();
    },
  };
};

const clone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

module.exports = {
  getLogger,
  clone,
};
