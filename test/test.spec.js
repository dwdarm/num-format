const assert = require('assert');
const sources =  {
  ['src/num-format.js']: require('../src/num-format.js'),
  ['/lib/num-format.js']: require('../lib/num-format.js'),
  ['/lib/num-format.min.js']: require('../lib/num-format.min.js')
}

describe('numFormat test', () => {
  Object.keys(sources).forEach(key => {
    const numFormat = sources[key];
    describe(`${key} test`, () => {
      it('It should return string of 1 when value is 1', () => {
        assert.strictEqual(numFormat(1), '1');
      });
      it('It should return string of 12 when value is 12', () => {
        assert.strictEqual(numFormat(12), '12');
      });
      it('It should return string of 123 when value is 123', () => {
        assert.strictEqual(numFormat(123), '123');
      });
      it('It should return string of 1.2k when value is 1234', () => {
        assert.strictEqual(numFormat(1234), '1.2k');
      });
      it('It should return string of 12k when value is 12345', () => {
        assert.strictEqual(numFormat(12345), '12k');
      });
      it('It should return string of 123k when value is 123456', () => {
        assert.strictEqual(numFormat(123456), '123k');
      });
      it('It should return string of 1.2m when value is 1234567', () => {
        assert.strictEqual(numFormat(1234567), '1.2m');
      });
      it('It should return string of 12m when value is 12345678', () => {
        assert.strictEqual(numFormat(12345678), '12m');
      });
      it('It should return string of 123m when value is 123456789', () => {
        assert.strictEqual(numFormat(123456789), '123m');
      });
      it('It should return string of 1.2b when value is 1234567890', () => {
        assert.strictEqual(numFormat(1234567890), '1.2b');
      });
      it('It should return string of 12b when value is 12345678900', () => {
        assert.strictEqual(numFormat(12345678900), '12b');
      });
      it('It should return string of 123b when value is 123456789000', () => {
        assert.strictEqual(numFormat(123456789000), '123b');
      });
    });
  });
});
