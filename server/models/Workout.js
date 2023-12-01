const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
    workoutId: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type:String,
        required: true,
        trim: true,
    },
    description:{
        type:String,
        trim: true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    exercises:[
        {
            name:{
                type:String,
                required: true,
                trim:true
            },
            sets:{
                type:Number,
                required:true,
            },
            reps:{
                type:Number,
                required:true,
            }
        }
    ],
    // Other fields
});
const Workout = model('Workout',workoutSchema);

module.exports = Workout