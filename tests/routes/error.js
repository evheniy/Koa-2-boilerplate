const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('./../app');
chai.use(chaiHttp);

describe('Error test', () => {

    it('it should test 404 error', async () => {
        return chai.request(app)
            .get('/404')
            .send()
            .catch(err => expect(err.status).to.be.equal(404));
    });

    it('it should test 500 error', async () => {
        return chai.request(app)
            .get('/500')
            .send()
            .catch(err => expect(err.status).to.be.equal(500));
    });
});