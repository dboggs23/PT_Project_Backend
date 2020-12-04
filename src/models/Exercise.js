const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  date: { type: Date, default: Date.now() },
  exercises: {
      exercise1: Boolean,
      exercise2: Boolean,
      exercise3: Boolean
  },
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
