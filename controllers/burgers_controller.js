var express = require("express");
var router = express.Router();
var db = require("../models/");

// get route -> index
// show all the burger data in the database
// router.get("/api/all", function(req,res){
//   db.burger.findAll().then(function(results){
//     res.json(results);
//   });
// });
//ROUTE FOR THE ROOT FILE /
router.get("/", function(req, res) {
  console.log("hi");
  //  res.json("/burgers");
    // db.Burger.findAll({}).then(function(burgerData) {
    //   console.log(burgerData);
       res.redirect("/burgers");
    // });
  });
  // router.get("/burgers", function(req, res) {
  //   console.log(res);
  //   db.Burger.findAll({}).then(function(burgerData) {
  //     console.log(burgerData);
  //     res.render(burgerData);
  //   });
  // });
  router.get("/burgers/create", function(req, res) {
    // takes the request object using it as input for buger.addBurger
    db.Burger.create({
          burger_name: req.body.burger_name,
          devoured : req.body.devoured
    }).then(function(burgerData) {
      res.redirect("/burgers");
    });
  });

  router.post("/burgers/create", function(req, res) {
    // takes the request object using it as input for buger.addBurger
    db.Burger.create({
          burger_name: req.body.burger_name,
          devoured : req.body.devoured
    }).then(function(burgerData) {
      res.redirect("/burgers");
    });
  });
  // put route -> back to index
  router.put("/burgers/update", function(req, res) {
    db.Burger.update({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }, {
      where:{
          id: req.body.id
      }
    }).then(function(burgerData) {
      // wrapper for orm.js that using MySQL update callback will return a log to console,
      // render back to index with handle
    //  console.log(burgerData);
      res.render("/burgers");
    });
  });

module.exports = router;
