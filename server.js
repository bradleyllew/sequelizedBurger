// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");
// const { Burger } = require('./models'); ------------------????????
// const { Customer } = require('./models'); -----------------???????

// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
// =============================================================
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("public"));

// Routes (import routes and give the server access to them.)
// =============================================================
var routes = require("./routes/api-routes.js/");
app.use(routes);






// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync({ force: true }).then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// });

//Add the Sequelize sync instruction to your Node app’s entry point------------------------------
models.sequelize.sync({force: true}).then(function() {
    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);
    console.log("App listening on PORT " + PORT);
  });
