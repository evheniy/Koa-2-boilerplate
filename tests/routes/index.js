const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../app');
chai.use(chaiHttp);

describe('Index route test', () => {

    it('it should test index page', async () => {
        return chai.request(app)
            .get('/')
            .send()
            .then(res => expect(res).to.have.status(200));
    });
});