var mongoose = require('mongoose');

let blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    text: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        username: String
    },

});

module.exports = mongoose.model('Blog', blogSchema);