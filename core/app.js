/**
 * Created by Tristan on 16/11/24.
 */
const Koa = require('koa');
const convert = require('koa-convert');
const bodyparser = require('koa-bodyparser')
const staticCache = require('koa-static-cache')
const logger = require('koa-logger')
const sessionStore = require('./asse/sessionStore')
const cors = require('koa-cors');
const views = require('koa-views');
const path = require('path')

const app = new Koa();
app.use(convert(logger()))
app.use(convert(cors()))
app.use(views(path.join(__dirname, '../views'), {
    extension: 'pug'
}));

app.use(convert(staticCache(path.join(__dirname, '../static/dist'), {
    maxAge: 365 * 24 * 60 * 60
})))
app.keys = ['im a newer secret', 'i like turtle'];
app.use(convert(sessionStore))

app.use(convert(bodyparser({
    onerror: function (err, ctx) {
        ctx.throw('body parse error', 422);
    }
})));

app.use(async(ctx, next) => {
    try {
        await next()
    } catch (e) {
        ctx.throw(e.message,e.status||500)
    }
})

//路由
const initRouter = require('./router')
initRouter(app)
module.exports = app