var validator = require('validator')
var uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose')
module.exports = function () {
    

    

    var AuthorSchema = new mongoose.Schema({
        name: { type: String, required:[true,"Name Is Required"], minlength:[3,"Minimum Length 3"] },


    })

    mongoose.model('Author', AuthorSchema);


    
}