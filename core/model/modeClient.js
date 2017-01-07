/**
 * Created by tc949 on 2016/10/14.
 */
let mongoose = require('mongoose')

let clientSchema = mongoose.Schema(
    {
        clientId: String,
        clientName: String,
        secret: String,
        redirectUrl: String,
        scope: String,
        sign: String
    }
)
let clientModel = mongoose.model("client", clientSchema)
module.exports = clientModel