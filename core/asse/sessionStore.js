/**
 * Created by Tristan on 16/11/24.
 */
const session = require('koa-generic-session');
const redisStore = require('koa-redis');
const config = require('../../config')
const redisClient = require('./redisclient')
require('./mongoose')


module.exports = session({
    key:config.session.key,
    prefix:config.session.prefix,
    store: redisStore({
            store: redisClient
        }
    ),
    cookie: config.cookie,
})