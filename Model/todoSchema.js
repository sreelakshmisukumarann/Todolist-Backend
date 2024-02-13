const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }

})

const todolists = mongoose.model("todolists",todoSchema)

module.exports = todolists