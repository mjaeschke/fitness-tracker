const Workout = require("../../models/workout.js");

module.exports = function (app) {
  // finds the workout
  app.get("/api/workouts", function (req, res) {
    Workout.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  //creates a workout
  app.post("/api/workouts", ({ body }, res) => {
    Workout.create({ $push: { exercises: body } })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  // finds the work out in a range of dates
  app.get("/api/workouts/range", function (req, res) {
    Workout.find({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  //creates workouts in a range of dates
  app.post("/api/workouts/range", ({ body }, res) => {
    Workout.create(body)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  //finds a workout by its id then deletes the workout
  app.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
