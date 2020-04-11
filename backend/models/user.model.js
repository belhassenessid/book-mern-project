const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {type: String, required: true, trim: true,unique: true,trim: true, minlength: 3},
    password: {type: String, required: true, trim: true,unique: true,trim: true, minlength: 4},
},{
        timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;