var expect = require('chai').expect;
var fail = require('../lib/fail');

describe('a code dojo', function () {
  it('should return bar', function () {
    expect(fail.foo()).to.equal('bar');
  });
});

