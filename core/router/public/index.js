/**
 * Created by Tristan on 16/11/26.
 */
/**
 * Created by Tristan on 16/11/25.
 */
const Router = require('koa-router')
const multer = require('koa-multer');
const router = new Router({
    prefix: '/public'
})

router.get('/works',async (ctx,next)=>{
    const user=ctx.session.user
    const work=ctx.request.body
    ctx.body=await JSON.stringify(work)
})

module.exports = router