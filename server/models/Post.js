const { Schema, model } = require('mongoose');

// Enum for post visibility
const VisibilityOptions = ['public', 'friends'];

const postSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    mediaUrl: {
        type: String,
    },
    postText: {
        type: String,
    },
    visibility: {
        type: String,
        enum: VisibilityOptions,
        default: 'public', // Set a default visibility option
    },
    comments: [
        {
            username: {
                type: String,
                required: true,
            },
            comment: {
                type: String,
                required: true,
            },
        },
    ],
});

const Post = model('Post', postSchema);

module.exports = Post;