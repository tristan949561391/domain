/**
 * Created by tc949 on 2016/10/14.
 */
const mongoose = require('mongoose')

const secInfoSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            index: true,
            unique: true
        },
        idCard: {
            type:String,
            index:true,
            unique:true
        },
        regiserMobile:{
            type:String
        },
        address:{
            type:String
        },
        email:{
            type:String
        }
    }
)
const secInfoModel = mongoose.model("md_sec_info", secInfoSchema)
module.exports = secInfoModel