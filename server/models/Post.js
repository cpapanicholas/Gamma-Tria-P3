const { Schema, model } = require('mongoose');

// Enum for post visibility
const VisibilityOptions = ['public', 'friends'];

const postSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    picture: {
        type: String, // You can store the URL or file path of the picture
        required: true,
    },
    userComment: {
        type: String,
        required: true,
    },
    visibility: {
        type: String,
        enum: VisibilityOptions,
        default: 'public', // Set a default visibility option
    },
    comments: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'User', // Reference to the User model
                required: true,
            },
            comment: {
                type: String,
                required: true,
            },
        },
    ],
    // Other fields specific to the post
});

const Post = model('Post', postSchema);

module.exports = Post;