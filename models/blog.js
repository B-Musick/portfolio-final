var mongoose = require('mongoose');

// Schema define shape of documents in collection and are building block for models
// Allow you to create instances of the object
let blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    text: String,
    date: { type: Date, default: Date.now },
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        username: String
    },

});

module.exports = mongoose.model('Blog', blogSchema);