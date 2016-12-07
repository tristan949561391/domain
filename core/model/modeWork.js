/**
 * Created by Tristan on 16/11/26.
 */
/**
 * Created by tc949 on 2016/10/14.
 */
const mongoose = require('mongoose')

const workSchema = mongoose.Schema(
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
        workType: {
            type: Number,
            default: 0
        },
        public: {
            type: Number,
            default: 0
        },
        coverPath: {
            type: String
        },
        items: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'md_workitem'
            }
        ],
        popCount: {
            type: Number,
            min: 0,
            default: 0
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

const workModel = mongoose.model("md_works", workSchema)

module.exports = workModel


