Koa.js 2 boilerplate
====================

[![Build Status](https://travis-ci.org/evheniy/koa-2-boilerplate.svg?branch=master)](https://travis-ci.org/evheniy/koa-2-boilerplate)

Description
-----------

Koa.js 2 boilerplate for easy and fast REST API app creation.

And redis is the main storage.

### Modules in system:
* [koa 2](https://github.com/koajs/koa/tree/v2.x)
* [ioredis](https://github.com/luin/ioredis)
* [config](https://www.npmjs.com/package/config)
* [winston](https://www.npmjs.com/package/winston)
* [koa-bodyparser](https://github.com/koajs/bodyparser/tree/3.x)
* [koa-compress](https://github.com/koajs/compress/tree/v2.x)
* [koa-etag](https://github.com/koajs/etag/tree/v3.x)
* [koa-favicon](https://github.com/koajs/favicon/tree/v2.x)
* [koa-helmet](https://github.com/venables/koa-helmet)
* [kcors](https://github.com/koajs/cors/tree/v2.x)
* [koa-router](https://github.com/alexmingoia/koa-router/tree/master/)
* [koa-static](https://github.com/koajs/static/tree/next)
* [koa-2-error-handler](https://github.com/evheniy/koa-2-error-handler)
* [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch)

### Testing:
* [mocha](https://mochajs.org/)
* [chai](http://chaijs.com/)
* [sinon](http://sinonjs.org/)
* [chai-http](https://github.com/chaijs/chai-http)
* [eslint](http://eslint.org/)
* [istanbul](https://www.npmjs.com/package/istanbul)
* [nsp](https://www.npmjs.com/package/nsp)
* [fetch-mock](http://www.wheresrhys.co.uk/fetch-mock/)



Install
-------

    npm i
    
TESTS
-----

    npm test
    
Server
------


    npm start
    
OR

    node --harmony app/index.js

Debug:

    DEBUG=* node --harmony app/index.js