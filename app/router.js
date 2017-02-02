const debug = require('debug')('app:route');
const router = require('koa-router')();

router.get('/', cnt => {
    cnt.body = { message: 'Ok'};
    debug(cnt.body);
}).get('/500', () => { // you can delete this route - it's just for testing
    throw new Error('Test error!');
});

module.exports = router;