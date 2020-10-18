const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
    game_id: String,
    Name: String,
    category:String
})

module.exports = mongoose.model('Games', gameSchema);