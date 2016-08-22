const findData = require('../../server/dbs/find-from-db');
const expect = require('chai').expect;

describe('GET /', function () {

  it('hello', function () {
    findData((result) => {
      expect(result).to.be.equal('world');
    })
  });
});