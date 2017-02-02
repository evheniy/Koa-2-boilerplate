const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const http = require('http');
const app = require('./../../../app');
const server = http.createServer(app.callback());
chai.use(chaiHttp);

describe('Index route test', () => {

    it('it should test index page', async () => {
        return chai.request(server)
            .get('/')
            .send()
            .then(res => expect(res).to.have.status(200));
    });
});