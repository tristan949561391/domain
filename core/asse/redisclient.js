/**
 * Created by Tristan on 16/10/15.
 */
const redis = require('redis')
const config = require('../../config')
const redisClient = redis.createClient(config.redis.port, config.redis.url, {})
const log=require('md-log')
redisClient.on('ready', function () {
    log.debug('redis connect success','boot')
})
redisClient.on('error', function () {
    log.error('redis connect error','boot')
})
module.exports = redisClient