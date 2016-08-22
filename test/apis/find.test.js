const findData = require('../../server/dbs/find-from-db');
const expect = require('chai').expect;
var config = require('config');
const db = require('mongodb').MongoClient;
var dbConfig = config.get('Customer.dbConfig');

const url = `mongodb://localhost:27017/${dbConfig.dbName}`;

describe('GET /', function () {

  beforeEach(() => {
    db.connect(url,(err,db)=>{
      const collection = db.collection('hello');
      collection.insert([{hello:"world"}],(err,result)=>{
      })
    })
  });
  it('hello', function () {
    findData((result) => {
      expect(result).to.be.equal('world');
    })
  });
});