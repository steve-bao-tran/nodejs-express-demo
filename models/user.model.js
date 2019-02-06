const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    phone: String,
    avatar: String,
    email: String,
    password: String
});

var User = mongoose.model('User', userSchema, 'users');

module.exports = User;