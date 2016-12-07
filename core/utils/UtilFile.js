/**
 * Created by Tristan on 16/11/25.
 */
async function upload(ctx, key, streamName) {
    return new Promise(function (resolve, reject) {
        ctx.qiniuClient.upload(fs.createReadStream(streamName), key, function (err, result) {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};