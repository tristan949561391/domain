/**
 * Created by Tristan on 16/11/29.
 */
const msgUtil = require('../utils/Utilmsg')
const register = async(mobile, password, vcode, ip) => {
    let checked = await msgUtil.checkVcode(mobile, 'register', vcode)
    if (!checked) {
        let err = new Error('vcode not match')
        err.status = 423
        throw err
    }
    let user = await require('../model/modeUser').getUser(mobile)
    if (user) {
        let err = new Error('the user has register')
        err.status = 424
        throw err
    }
    await require('../model/modeUser').addUser(mobile,password,ip)
}
exports.register = register