const mongoose = require('mongoose');

const partySchema = mongoose.Schema({
    party_id: String,
    user_pid: String,
    size: String,
    playerIDS: [String],
    game_name: String,
    readyQueue: [Boolean],
    discord: String
})

module.exports = mongoose.model('Parties', partySchema);