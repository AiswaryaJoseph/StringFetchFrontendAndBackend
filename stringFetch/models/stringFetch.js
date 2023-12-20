const mongoose = require('mongoose')

const stringSchema = new mongoose.Schema({
    phrase:{
        type:String,
        required:true
    }
})

const Str = mongoose.model('Str',stringSchema)

module.exports = Str