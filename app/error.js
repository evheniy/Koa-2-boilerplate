const debug = require('debug')('app:error');
const middleware = require('koa-2-error-handler').error;

const logger = require('./logger');

module.exports = () => async (ctx, next) => {
    debug('koa-2-error-handler');
    return middleware((err, ctx) => {
        logger.error(`Url: ${ctx.request.url}`);
        logger.error(err);
    })(ctx, next);
};