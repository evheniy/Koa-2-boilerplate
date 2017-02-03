const winston = require('winston');
const config = require('config');

const transports = [];

transports.push(new (winston.transports.Console)({
    level: 'info',
    json: false,
    timestamp: true,
    colorize: true,
    prettyPrint: true,
    showLevel: true
}));

transports.push(new winston.transports.File(Object.assign({ level: 'error' }, config.log)));

module.exports = new (winston.Logger)({
    transports: transports,
    exceptionHandlers: transports,
    exitOnError: false,
});
