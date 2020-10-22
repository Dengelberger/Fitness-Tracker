const mongoose = require("mongoose");
const Structure = mongoose.Structure;

//THERE IS MORE WORK TO BE DONE IN THIS FILE AS OF THURSDAY AT 4:45 PM

const workoutStructure = new Structure({
    day: {
        type: Date,
        default: Date.now()
    },
    //USING INFORMATION FROM EXERCISE.JS AND EXERCISE.HTML
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: true
            },
            name: {
                type: String,
                trim: true,
                required: true
            },
            duration: {
                type: number,
                required: true,
            },
            weight: {
                type: number,
                required: true,
            },
            distance: {
                type: number
            },
            reps: {
                type: number
            },
            sets: {
                type: number
            }
        }
    ]
});

//TOTAL DURATION???

//THIS HAS TO DO WITH WHAT JONATHAN ASKED AT THE END OF THURSDAY'S CLASS AND THE SNIPPET DAVE SLACKED TO US?:
// {let dayNum = new Date(data[i].day).getDay();

//     function setLabels(data) 
//         let days = [
//           "Sunday",
//           "Monday",
//           "Tuesday",
//           "Wednesday",
//           "Thursday",
//           "Friday",
//           "Saturday"
//         ];
//         const labels = [];
//         for(let i = 0; i < data.length; i++) {
//           let dayNum = new Date(data[i].day).getDay();
//           // let month = new Date(data[i].day).getMonth();
//           // let date = new Date(data[i].day).getDate();
//           labels.push(`${days[dayNum]}`);
//         }
//         return labels;
//       }
//       let dayLabels = setLabels(data);
//       let lineChart = new Chart(line, {
//         type: "line",
//         data: {
//           labels: dayLabels,

//GET INFORMATION TO WORKOUT.JS???

const workout = mongoose.model("workout", workoutStructure);

module.exports = workout;
