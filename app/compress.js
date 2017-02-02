const debug = require('debug')('app:compress');
const compress = require('koa-compress');
const zlib = require('zlib');

module.exports = () => compress({
    filter: function (content_type) {
        debug(content_type);
        return /text/i.test(content_type);
    },
    threshold: 2048,
    flush: zlib.Z_SYNC_FLUSH
});