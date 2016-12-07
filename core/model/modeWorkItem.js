/**
 * Created by Tristan on 16/11/26.
 */
/**
 * Created by tc949 on 2016/10/14.
 */
const mongoose = require('mongoose')

const workItemSchema = mongoose.Schema(
    {
        title: {
            type: String
        },
        content: {
            type: String
        },
        isCollection: {
            type: Boolean,
            default: false
        },
        path: {
            type: String
        },
        publisher: {
            type: String,
            required: true
        },
        publishTime: {
            type: String,
            default: Date.now()
        }
    }
)

const workItemModel = mongoose.model("md_workitem", workItemSchema)

module.exports = workItemModel


