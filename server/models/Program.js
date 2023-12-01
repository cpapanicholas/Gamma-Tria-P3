const { Schema, model } = require('mongoose');

const programSchema = new Schema({
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
        type: Number, // You can adjust the type based on your needs (e.g., days, weeks)
        required: true,
    },
    workouts: [
        {
            day: {
                type: Date, // Day of the workout
                required: true,
            },
            workout: {
                type: Schema.Types.ObjectId,
                ref: 'Workout', // Reference to the Workout model
            },
        },
    ],
    // Other fields specific to the program
});

const Program = model('Program', programSchema);

module.exports = Program;