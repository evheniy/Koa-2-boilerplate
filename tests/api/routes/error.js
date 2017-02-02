const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const http = require('http');
const app = require('./../../../app');
const server = http.createServer(app.callback());
chai.use(chaiHttp);

describe('Error test', () => {

    it('it should test 404 error', async () => {
        return chai.request(server)
            .get('/404')
            .send()
            .catch(err => expect(err.status).to.be.equal(404));
    });

    it('it should test 500 error', async () => {
        return chai.request(server)
            .get('/500')
            .send()
            .catch(err => expect(err.status).to.be.equal(500));
    });
});