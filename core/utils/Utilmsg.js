/**
 * Created by Tristan on 16/8/27.
 */
var ApiClient = require('topSdk').ApiClient;
var redisClient = require('../asse/redisclient')
var plateFormUtil = require('../utils/UtilPlateForm')

var client = new ApiClient({
    'appkey': '23317414',
    'appsecret': '4cf3a1bc2c5174753a8bf28ddf095010',
    'REST_URL': 'https://eco.taobao.com/router/rest'
});

function send(mobile) {
    return new Promise(function (resolve, reject) {
            let vcode = plateFormUtil.RADOMCODE(6);
            client.execute('alibaba.aliqin.fc.sms.num.send',
                {
                    'sms_type': 'normal',
                    'sms_free_sign_name': '网站插画分享服务',
                    'sms_param': '{\"code\":\"' + vcode + '\"}',
                    'rec_num': mobile,
                    'sms_template_code': 'SMS_12961487'
                },
                (err) => {
                    if (err) {
                        reject(new Error(`send vcode error because ${err.sub_code}`))
                    }
                    resolve(vcode)
                }
            )
        }
    )
}

function checkResend(mobile, method) {
    return new Promise(function (resolve, reject) {
        let key = `vcode:${mobile}:${method}`
        redisClient.multi().get(key, function (err, data) {
            if (data == null || Date.now() - JSON.parse(data).date >= 60000) {
                resolve(true)
                return
            }
            if (err) {
                reject(err)
            }
            err = new Error('send code too quick')
            err.status = 465
            reject(err)
        }).exec()
    })
}


function save(code, method, mobile) {
    return new Promise(function (resolve, reject) {
        let vcode = {
            code: code,
            method: 'register',
            mobile: mobile,
            date: Date.now()
        }
        let key = `vcode:${mobile}:${method}`
        redisClient.multi().select(0).set(key, JSON.stringify(vcode), (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(true)
        }).expire(key, 60 * 10)
            .exec()
    })
}

async function sendAndCheck(mobile, method, check) {
    let checkd = true
    if (check) {
        checkd = await check(mobile, method)
    }
    if (checkd) {
        await checkResend(mobile, method);
        let vcode = await send(mobile)
        await save(vcode, method, mobile)
    }
}

const checkVcode = (mobile, method,vcode) => {
    return new Promise((resolve,reject)=>{
        let key = `vcode:${mobile}:${method}`
        redisClient.multi().get(key, function (err, data) {
            if(err) reject(er);
            if(data&&JSON.parse(data).code==vcode){
                resolve(true)
            }else {
                resolve(false)
            }
        }).exec()
    })
}


exports.sendAndCheck = sendAndCheck
exports.checkVcode = checkVcode



