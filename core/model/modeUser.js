/**
 * Created by tc949 on 2016/10/14.
 */
const mongoose = require('mongoose')
const redisClient = require('../asse/redisclient')
const cryUtil=require('../utils/UtilCrypto')

const UserSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            index: true,
            unique: true
        },
        loginName: {
            type: String,
            unique: true
        },
        mobile: {
            type: String
        },
        sign: {
            type: String
        },
        password: {
            type: String
        },
        gender: {
            type: Number,
            default: 0
        },
        joinTime: {
            type: String,
            default: Date.now()
        },
        registerIp:{
            type:String
        }
    }
)
const userModel = mongoose.model("md_user", UserSchema)
module.exports.Model = userModel

const getUser = (loginname) => {
    return new Promise((resolve, reject)=>{
        userModel.findOne({loginName:loginname},(err,data)=>{
            if(err) reject(err);
            if(data){
                resolve(data)
            }else {
                resolve(null)
            }
        })
    })
}
module.exports.getUser=getUser



const addUser=(mobile,password,ip)=>{
    return new Promise((resolve,reject)=>{
        const userId=cryUtil.UUID()
        const sign=cryUtil.MD5(password)
        let user=new userModel(
            {
                userId:userId,
                loginName:mobile,
                mobile:mobile,
                sign:sign,
                password:cryUtil.MD5(userId+sign+password+ip),
                registerIp:ip
            }
        )
        user.save((err)=>{
            if(err) reject(err);
            resolve()
        })
    })
}

module.exports.addUser=addUser

