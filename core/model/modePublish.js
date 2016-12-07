/**
 * Created by Tristan on 16/11/26.
 */
const mongoose=require('mongoose')

const publishSchema=mongoose.Schema(
    {
        workId:{
            type:String,
            required:true
        },
        publishTime:{
            type:String,
            default:Date.now()
        }
    }
)
const publishModel=mongoose.model("md_publish", publishSchema)

module.exports=publishModel

