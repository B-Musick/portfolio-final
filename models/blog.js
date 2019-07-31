var mongoose = require('mongoose');

let blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    text: String
});

module.exports = mongoose.model('Blog', blogSchema);