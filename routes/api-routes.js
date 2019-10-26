// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route 
  app.get("/", function (req, res) {
    res.redirect("/burgers");
  });

  // find all, including customer - coming from the mysql db
  app.get("/burgers", function (req, res) {
    var query = {};
    if (req.query.CustomerId) {
      query.Customer = req.query.CustomerId;
    }
  
    db.Burger.findAll({
      include: [db.Customer],
      where: query
    })
      .then(function (data) {
        var hbsObject = 
        { burgers: data };
        console.log(hbsObject);
        res.render("index", hbsObject);
      });
  });

// to make a new burger (post/create)
app.post("/burgers", function(req, res) {
  db.Burger
  .create({
    burger_name: req.body.burger_name
  })
  .then(function(dbBurger) {
    res.json(dbBurger);
  });
});

// when the burger gets eaten
app.put("/burgers/update", function(req, res) {
  
  var customerName = req.body.eaten_by;

  db.Customer.update({
    where: {
      id: req.params.id
    }
  }).then(function(dbBurger) {
    res.json(dbBurger);
  });


  db.Burger.update({
      devoured: true,
      CustomerId: customer
    },
    {
      where: { 
        id: req.body.burger_id
       }
    }
  )
  .then(function(dbBurger) {
    res.json(dbBurger);
  });
});





};