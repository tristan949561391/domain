/**
 * Created by tc949 on 2016/10/14.
 */
const mongoose = require('mongoose')
const config = require('../../config')
const log = require('md-log')
mongoose.Promise = global.Promise;
mongoose.connect(config.mongo.url + ":" + config.mongo.port + "/" + config.mongo.db);

const db = mongoose.connection;
db.on('error', () => {
    log.error('mongoDb connnected error', 'boot')
});
db.once('open', function () {
    log.debug('mongoDb connnected', 'boot')
});



