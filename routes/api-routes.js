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
    console.log("reached '/'");
  });

  // find all, including customer - coming from the mysql db
  app.get("/burgers", function (req, res) {
    console.log("reached '/burgers'");
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
  app.post("/api/burgers", function (req, res) {
    db.Burger
      .create({
        burger_name: req.body.burger_name
      })
      .then(function (dbBurger) {
        res.json(dbBurger);
      });
  });

  // when the burger gets eaten
  app.put("/api/burgers/update", function (req, res) {

    var customerName = req.body.eaten_by;

    db.Customer.findAll({
      where: {
        customer_name: customerName
      }
    }).then(data => {
      if (data.length > 0) {
        // if customer already exists in db, devour burger
        console.log("customer already exists");
        devour(data[0].dataValues.id);
      } else {
        // if customer does not exist in db, make new customer, then devour burger
        console.log("creating new customer");
        db.Customer
          .create({
            customer_name: req.body.eaten_by
          })
          .then(data => devour(data.dataValues.id));
      }
    });

    function devour(customer) {
      console.log("devouring");

// to show burger as eaten and save the user id for the eater
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
        .then(function (dbBurger) {
          res.json(dbBurger);
        });
    }
  });





};