const { Schema, model } = require('mongoose');

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
        default: Date.now,
        get: (timestamp) => timestamp.toLocaleString(),
    },
    visibility: {
        type: Boolean,
        default: true, // true = public false = private
    },
    comments: [
        {
            userId: {
                type: String,
                
            },
            username: {
                type: String,
                
            },
            commentText: {
                type: String,
                
            },
            createdAt: {
                type: Date,
                default: Date.now,
                get: (timestamp) => timestamp.toLocaleString(),
            },
            postId: {
                type: String
            }
        },
    ],
});


const Post = model('Post', postSchema);

module.exports = Post;