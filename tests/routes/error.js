const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../app');
chai.use(chaiHttp);
const logger = require('../../app/logger');

describe('Error test', () => {

    beforeEach(async () => {
        return sinon.stub(logger, 'error', text => text);
    });

    afterEach(async () => {
        return logger.error.restore();
    });

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