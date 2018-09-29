
var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);


describe('tweets', function() {
  it("should list ALL tweets on /twitter/all-tweets GET and it should be an array and it shouldn't be empty", function(done) {
    chai.request('http://localhost:6300')
      .get('/twitter/all-tweets')
      .end(function(err, res) {
        res.should.have.status(200);
        expect(res.body.data).to.be.an('array').that.is.not.empty;
        done();
      });
  });
});
module.exports = server
