const { Schema, model } = require('mongoose');

const programSchema = new Schema({
    originalId: {
        type: String,
        trim: true,
    },
    userId: {
        type: String,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    duration: {
        type: String, // You can adjust the type based on your needs (e.g., days, weeks)
        required: true,
    },
    workouts: [
        {
            day: {
                type: String,
                required: true,
                trim: true,
            },
            workout: {
                type: String,
                required: true,
                trim: true,
            },
        },
    ],
    // Other fields specific to the program
});

const Program = model('Program', programSchema);

module.exports = Program;