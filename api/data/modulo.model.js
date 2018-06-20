var mongoose = require('mongoose');

var topicsSchema = new mongoose.Schema({
    topicName: {
        type: String,
    
    },
    content: {
        type: [String],
    
    },
    photos: {
        type: [String],
    
    },
    video: {
        type: [String],
    
    }
})

var moduloosSchema = new mongoose.Schema({
    name: {
        type: String,
    
    },
    topics: [topicsSchema]
})

mongoose.model('Modulos', moduloosSchema, 'modulos');