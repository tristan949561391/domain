/**
 * Created by tc949 on 2016/10/14.
 */
const mongoose = require('mongoose')

const friendSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            index:true,
            unique:true
        },
        friendId:{
            type:String
        },
        joinTime:{
            type:Date,
            default:Date.now()
        }
    }
)
const friendModel = mongoose.model("md_friend", friendSchema)
module.exports = friendModel