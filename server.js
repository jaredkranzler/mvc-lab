const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

//MIDDLEWARE
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));


//CONTROLLERS
const potionController = require("./controllers/potionController");
app.use('/potions', potionController);











app.listen(3000, () => {
  console.log("listening for your cammand dude!")
})