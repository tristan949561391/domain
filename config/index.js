/**
 * Created by Tristan on 16/10/15.
 */
let fs = require('fs')
let path = require('path')
let config
if (process.ENV != 'PRO') {
    config = require('./resource.dev.json')
} else {
    config = require('./resource.json')
}
module.exports = config

