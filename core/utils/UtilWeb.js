/**
 * Created by Tristan on 2016/12/7.
 */
function getClientIp(req) {
    return req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
};
module.exports.getClientIp=getClientIp

