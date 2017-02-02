const debug = require('debug')('app:error');
const logger = require('./../logger');

module.exports = () => async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        debug(JSON.stringify(err));
        logger.info(err);
        ctx.status = err.statusCode || err.status || 500;
        ctx.body = {
            message: err.message
        };
        debug(JSON.stringify({ status: ctx.status, body: ctx.body }));
    }
};