const Koa = require('koa');

const favicon = require('koa-favicon');
const serve = require('koa-static');
const conditional = require('koa-conditional-get');
const etag = require('koa-etag');
const bodyParser = require('koa-bodyparser');
const cors = require('kcors');
const helmet = require('koa-helmet');
const app = module.exports = new Koa();
const error = require('./error');
const redis = require('./redis');
const router = require('./router');
const compress = require('./compress');

app.use(error());
app.use(favicon(__dirname + '/../public/favicon.ico'));
app.use(serve(__dirname + '/../public'));
app.use(conditional());
app.use(etag());
app.use(bodyParser());
app.use(cors());
app.use(helmet());
app.use(compress());
app.use(redis());
app.use(router.routes());
app.use(router.allowedMethods());