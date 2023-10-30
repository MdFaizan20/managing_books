
const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({

title:{
    type: String,
    required:true,
    unique: true,
    trim: true
},
author:{
    type: String,
    required:true,
    trim: true

},
summary:{

    type: String,
    required:true,
    trim: true
},
isDeleted:{
    type: Boolean,
    default: false,
}

},({timestamps:true}))

module.exports= mongoose.model('Book',bookSchema)