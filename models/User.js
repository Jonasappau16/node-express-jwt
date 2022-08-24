const mongoose = require ('mongoose');
const { isEmail } = require ('validator');

// defining the schema .. (what user should look like in the database)
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'please enter an email'],
        unique: true,
        lowercase: true,
        validation: [ isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'please enter a password'],
        minlength: [6, 'Minimum password length is 6 characters']
    },
});

//creating model base on the schema
const User = mongoose.model('user', userSchema);

//export module

module.exports =User;