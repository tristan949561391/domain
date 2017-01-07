/**
 * Created by Tristan on 16/11/24.
 */
const plateFormUtil = require('../../utils/UtilPlateForm')
const messageUtil = require('../../utils/Utilmsg')
const Router = require('koa-router')
const router = new Router({
    prefix: '/passport'
})

router.post('/sendVcode/:mobile', async(ctx, next) => {
    let mobile = ctx.params.mobile
    if (!plateFormUtil.ISMOBILE(mobile)) {
        let err = new Error('not mobile')
        throw  err
    }
    await messageUtil.sendAndCheck(mobile, 'register', null)
    ctx.body = 'ok'
})

router.post('/register',async(ctx ,next)=>{
    let body=ctx.request.body
    let mobile=body.mobile||''
    let password=body.password||''
    let vcode=body.vcode||''
    if(!plateFormUtil.ISMOBILE(mobile)||!plateFormUtil.ISPASSWORD(password)||vcode.length!=6){
        let err= new Error('params is not legal')
        throw err
    }
    let ip=require('../../utils/UtilWeb').getClientIp(ctx.req)
    await require('../../server/userService').register(mobile,password,vcode,ip)
    ctx.body='register success'
})
module.exports = router