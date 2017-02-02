Koa.js 2 boilerplate
====================

Description
-----------

I added redis like the main storage.

Modules in system:
* koa 2
* ioredis
* config
* winston
* koa-bodyparser
* koa-compress
* koa-etag
* koa-favicon
* koa-helmet
* kcors
* koa-router
* koa-static

Testing:
* mocha
* chai
* sinon
* chai-http
* eslint
* istanbul
* nsp



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

Production:

    NODE_ENV=production PORT=80 node --harmony app/index.js
    
