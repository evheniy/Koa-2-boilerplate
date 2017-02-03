const debug = require('debug')('app:error');
const httpStatus = require('http-status-codes');
const logger = require('./../logger');

module.exports = () => async (ctx, next) => {
    try {
        await next();
        debug(ctx);
        if (ctx.response.status === httpStatus.NOT_FOUND) {
            ctx.throw(httpStatus.getStatusText(httpStatus.NOT_FOUND));
        }
    } catch (err) {
        debug(JSON.stringify(err));
        logger.error(err);
        ctx.status = err.statusCode || err.status || httpStatus.INTERNAL_SERVER_ERROR;
        ctx.body = {
            message: err.message
        };
        debug(JSON.stringify({ status: ctx.status, body: ctx.body }));
    }
};