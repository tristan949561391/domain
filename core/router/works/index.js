/**
 * Created by Tristan on 16/11/25.
 */
const Router = require('koa-router')
const multer = require('koa-multer');
const workModel = require('../../model/modeWork')
const router = new Router({
    prefix: '/works'
})
const upload = multer({dest: 'uploads/'});

router.post('/profile',
    upload.single('avatar')
);

router.post('/publish', async(ctx, next) => {
    const wok = ctx.request.body
    let workData = {
        title: wok.title,
        content: wok.content,
        public: wok.public,
        workType: wok.workType,
        coverPath: 'http' + wok.coverPath,
        publisher: 'asdasd'
    }
    const work = new workModel(workData);
    ctx.body = await work.save()
})

router.get('/public', async(ctx, next) => {
    const page = ctx.query.page || 1
    const size = ctx.query.size || 10
    const result = await workModel.find({}, null, {sort: [{'publishTime': -1}], skip: (page - 1) * size, limit: size})
    ctx.body = await JSON.stringify(result)
    next()
})

module.exports = router