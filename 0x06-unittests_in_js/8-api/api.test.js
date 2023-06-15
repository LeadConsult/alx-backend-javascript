const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api'); // Assuming the API code is in api.js

chai.use(chaiHttp);
const expect = chai.expect;

describe('Index Page', () => {
  it('should return the correct status code', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        // Assuming the expected status code is 200
        expect(res).to.have.status(200); 
        done();
      });
  });

  it('should return the correct result', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        // Assuming the expected result is 'Welcome to the payment system'
        expect(res.text).to.equal('Welcome to the payment system'); 
        done();
      });
  });

  // Add more test cases for other scenarios if needed
});
