const debug = require('debug')('app:error');
const errorHandler = require('koa-2-error-handler').error;

const logger = require('./logger');

module.exports = () => async (ctx, next) => {
    debug('koa-2-error-handler');
    return errorHandler((err, ctx) => {
        ctx.body = {
            message: err.message
        };
        logger.error(`Url: ${ctx.request.url}`);
        logger.error(err);
    })(ctx, next);
};