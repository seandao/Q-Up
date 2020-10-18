const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    user_pid : {
        type: String,
        required: true
    },
    picture: String,
    games: [String],
    bio: String,
    friends: [String],
    gamelinks: [String],
    parties: [String]
})

module.exports = mongoose.model('Users', userSchema);