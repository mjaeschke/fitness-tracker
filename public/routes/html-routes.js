var path = require("path");

module.exports = function (app) {
  //sets the index of the website to the index.html page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });
  // sets the page to the excercise.html page
  app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../exercise.html"));
  });
  // sets the page to the stats.html page
  app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../stats.html"));
  });
};
