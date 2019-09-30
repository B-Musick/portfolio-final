let mongoose = require('mongoose');

let scoreSchema = new mongoose.Schema({
    score: Number, //parseInt(document.getElementById("score-value").textContent())
    player: String
});

module.exports = mongoose.model("Score", scoreSchema);