const { Schema, model } = require('mongoose')

const Document = Schema({
    _id:String,
    data : Object
})

module.exports = model('Document',Document)