/**
 * Created by Tristan on 16/11/25.
 */
let uuid = require('uuid');
const crypto = require('crypto');
function md5(str) {
    const md5sum = crypto.createHash('md5');
    md5sum.update(str);
    str = md5sum.digest('hex');
    return str;
    
};

exports.MD5 = md5



function UUID() {
    return uuid.v4()
}

exports.UUID=UUID

