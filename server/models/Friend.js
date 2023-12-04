const { Schema, model } = require('mongoose');

const friendSchema = new Schema({
    user1: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        
    },
    user2: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    friendshipStatus: {
        type: String,
        default: 'pending', // You can set a default status if needed
    },
    // Add other fields related to the friendship as needed
});

const Friend = model('Friend', friendSchema);

module.exports = Friend;
