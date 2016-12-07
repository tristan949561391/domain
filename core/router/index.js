/**
 * Created by Tristan on 16/11/24.
 */
module.exports=function (app) {
    app.use(require('./home').routes())
    app.use(require('./works').routes())
    app.use(require('./passport').routes())
}


