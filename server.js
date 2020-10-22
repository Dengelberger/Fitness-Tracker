const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//PORT SET UP:

const PORT = process.env.PORT || 3000;

//DATABASE CONNECTION WITH CORRECTIONS FOR ERRORS:
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
    //NOT CONNECTED
db.once("open", function() {
    //CONNECTED
});
//DIRECTS TO THE PUBLIC FOLDER:
app.use(express.static("public"));

//REQUIRE API ROUTES
require("./routes/api-routes")(app);

//REQUIRE HTML ROUTES
require("./routes/html-routes")(app);

//APP LISTENING MESSAGE:
app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}!`);
})