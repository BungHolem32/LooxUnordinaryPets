var express = require('express');
var cors = require('cors');
var petsList = require('./data/pets.json');

var app = express();
var port = 3000;
app.use(cors());


app.get('/',(req,res) => {
  res.redirect('/pets');
});

app.get('/pets',(req,res) => {
  let responseObject = {data:null,status:res.statusCode, message: `no records found`};
  if(petsList){
    responseObject = Object.assign(responseObject,{data:petsList,message:'records return successfully'})
  }
  res.json(responseObject);
});

app.get('/pets/:id',(req,res) => {
  let id = req.params.id;
  let responseObject = {data:null,status:res.statusCode,message: `no record with the id ${id} found`};
  let pet = petsList.filter((pet) => pet.id === id);

  if(pet.length){
    responseObject = Object.assign(responseObject,{data:pet[0],message:`record with the id ${id} return successfully`});
  }
  res.json(responseObject);
});

app.listen(port, () => console.log(`Pets api is listening on port ${port}`));