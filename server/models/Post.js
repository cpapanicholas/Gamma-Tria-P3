const { Schema, model } = require('mongoose');

// Enum for post visibility
const VisibilityOptions = ['public', 'friends'];

const postSchema = new Schema({
    username: {
        type: String,
    },
    userId: {
        type: String,
    },
    workoutId: {
        type: String,
    },
    workoutName: {
        type: String,
    },
    mediaUrl: {
        type: String,
    },
    postText: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    visibility: {
        type: Boolean,
        default: true, // true = public false = private
    },
    comments: [
        {
            username: {
                type: String,
                
            },
            commentText: {
                type: String,
                
            },
            createdAt: {
                type: Date,
                default: Date.now
            },
        },
    ],
});

const Post = model('Post', postSchema);

module.exports = Post;