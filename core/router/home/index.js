/**
 * Created by Tristan on 16/11/24.
 */
const Router = require('koa-router')
const router = new Router()

router.get(/.html$/, async(ctx) => {
    await ctx.render('index',{title:'BOBO'})
})
module.exports = router