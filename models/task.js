//const mongoose = require('mongoose');
var mongoose = require('mongoose');

const Task = new mongoose.Schema({

    //name of type string, trim whitespace, default value of default
    name: { type:String, trim:true, default: 'Default'},
    description: { type:String, trim:true, default: 'Default'},
    status: { type:Number, trim:true, default: 0 }
});

module.exports = mongoose.model('Task', Task);