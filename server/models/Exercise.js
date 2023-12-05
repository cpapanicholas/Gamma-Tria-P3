// models.js

const mongoose = require('mongoose');

// Define your mongoose model (Exercise)
const exerciseSchema = new mongoose.Schema({
  name: String,
  type: String,
  muscle: String,
  equipment: String,
  difficulty: String,
  instructions: String,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = {
  Exercise,
};
