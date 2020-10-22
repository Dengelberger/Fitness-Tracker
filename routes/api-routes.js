let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

//API ROUTES

module.exports = function(app) {

  // GET TO SHOW ALL THE EXISTING WORKOUTS IN THE DB

  app.get("api/workouts", function(req, res) {
  db.workout.find({}), (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data)
    };
  };
});

// POST TO CREATE A NEW WORKOUT IN THE DB

app.post("api/workouts", function(req, res) {
  db.workout.create({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data)
    };
  });
});


// PUT TO UPDATE A WORKOUT ALREADY IN THE DB BASED ON ITS ID

app.put("/api/workouts/:id", function(req, res) {
  
  const id = req.params.id;

  db.workout.findByIdandUpdate({_id: mongoose.Types.ObjectId(id)}, 
    { $push: {exercises : req.body}},
    {new : true}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data)
    };
  });
});

// GET TO SHOW ALL WORKOUTS IN THE LAST WEEK {Last 7 days: THINK LIMIT(7)} const API = {

//THIS PART IS NOT YET COMPLETED AS OF THURSDAY NIGHT AT 5:00 PM:
 //I THINK I HAVE TO MAKE ANOTHER KEY TO SEARCH BY AND IT SHOULD BE THE DATE
  
  app.get("api/workouts/range", function(req, res) {
    db.workout.find({}), (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data)
      };
    };
  });

}