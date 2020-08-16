const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//creates the schema for the workout DB
const workoutSchema = new Schema({
  day: { type: Date, default: Date.now },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Type of exercise",
      },
      name: {
        type: String,
        trim: true,
        required: "Name of exercise.",
      },
      duration: {
        type: Number,
        required: "Duration of exercise.",
        default: 1,
      },
      weight: {
        type: Number,
        required: "Weight used.",
      },
      reps: {
        type: Number,
        required: "Number of Reps done.",
      },
      sets: {
        type: Number,
        required: "Enter number of sets...",
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
