const path = require("path");

module.exports = function(app) {
    //SENDS INFO FROM DB TO HOME PAGE (INDEX.HTML)
    app.get("/", (req, res) => {
        res.sendFile(path.join(_dirname, "public/index.html"));
    });
    //SENDS INFO FROM DB TO EXERCISE PAGE
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(_dirname, "public/exercise.html"));
    });
    //SENDS INFO FROM DB TO STATS PAGE
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(_direname, "public/stats.html"));
    });

};
