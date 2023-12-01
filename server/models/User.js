//posts, saved workouts, friends, 

const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const userSchema = new Schema({
    userId: {
        type: String,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: 'Must be a valid email address!',
          },
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    status: {
        type: {
            text: String,
            timestamp: Date,
        },
        default: {
            text: 'not at gym',
            timestamp: null,
        },
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post',
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Friend'
        }
    ],
    workouts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Workout'
        }
    
    ],
    programs: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Program'
        }
    ]
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;