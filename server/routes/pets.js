var express = require('express');
var router = express.Router();
var petsList = require('../data/pets.json');

/* GET Pets List. */
router.get('/', function(req, res, next) {
  let responseMessage = {data:null,status:res.statusCode, message: `no records found`};
  if(petsList){
    responseMessage = Object.assign(responseMessage,{data:petsList,message:'records return successfully'})
  }
  res.json(responseMessage);
});

/* GET Specific pet. */
router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  let responseMessage = {data:null,status:res.statusCode,message: `no record with the id ${id} found`};
  let pet = petsList.filter((pet) => pet.id === id);

  if(pet.length){
    responseMessage = Object.assign(responseMessage,{data:pet[0],message:`record with the id ${id} return successfully`});
  }
  res.json(responseMessage);
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
