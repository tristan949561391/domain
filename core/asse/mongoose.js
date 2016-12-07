/**
 * Created by tc949 on 2016/10/14.
 */
const mongoose = require('mongoose')
const config = require('../../config')
mongoose.connect(config.mongo.url + ":" + config.mongo.port + "/" + config.mongo.db);
mongoose.connection.on('connect', function () {
    console.log('mongodb connect success')
})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('mongoDb connnected')
});



