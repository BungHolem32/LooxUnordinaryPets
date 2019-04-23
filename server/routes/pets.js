var express = require("express");
var router = express.Router();
var petsList = require("../data/pets.json");

/* GET Pets List. */
router.get("/", function(req, res, next) {
  res.json(petsList);
});

// Another option displaying in jade template

// /* GET Pets List. */
// router.get("/", function(req, res, next) {
//   res.render("index", {
//     title: "Unordenary Pets",
//     pets: petsList,
//     currentPet: petsList[0]
//   });
// });

/* GET Specific pet. */
// router.get("/:id", function(req, res, next) {
//   let id = req.params.id;
//   let pet = petsList.find(pet => {
//     return pet.id == id;
//   });

//   res.render("pets", {
//     title: "Unordenary Pets",
//     pet: pet
//   });
// });

module.exports = router;
