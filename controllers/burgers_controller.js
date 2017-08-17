var express = require("express");
var router = express.Router();
var db = require("../models");

// get route -> index
// show all the burger data in the database
router.get("/api/all", function(req,res){
  db.burger.findAll().then(function(results){
    res.json(results);
  });
});


  router.get("/burgers", function(req, res) {
  //  console.log(      'in burgers get, findall'

   db.burger.findAll({}).then(function(burgerData) {
       res.json(burgerData);
    });
  });

  router.post("/burgers/create", function(req, res) {
    // takes the request object using it as input for buger.addBurger
    db.burger.create({
          burger_name: req.body.burger_name,
          devoured : req.body.devoured
    }).then(function(burgerData) {
      res.redirect("/burgers");
    });
  });
  // put route -> back to index
  router.put("/burgers/update", function(req, res) {
    db.burger.update({
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
      res.json("/burgers");
    });
  });

module.exports = router;
