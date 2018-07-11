const express = require('express');
const router =  express.Router();

const Potions = require('../models/potions')


//edit route to show edit of potion
router.get('/:index/edit', (req, res) => {
  res.render('edit.ejs', {
    potion: Potions[req.params.index],
    index: req.params.index
  });
});

//index route
router.get('/', (req, res) => {

  res.render('index.ejs', {
  potions: Potions
  })
});


// add potion to index.ejs
router.post('/', (req, res) => {

  newPotion = {
    name: req.body.name,
    effect: req.body.effect,
    available: true,
    delete: 'off'
  };
  if (req.body.available !== 'on'){
    req.body.available = true
  }

  Potions.push(newPotion);
  res.redirect('/potions');
});


router.use((req, res, next) => {
  console.log("i run on every route");

  next()
})


//creat new route
router.get('/new', (req, res) => {
  res.render('new.ejs');
});


router.get('/:index', (req, res) => {
  
  res.render('show.ejs', {
    potion: Potions[req.params.index]
  });
});

router.delete('/:index', (req, res) => {
  Potions.splice(req.params.index, 1);

  res.redirect('/potions')
});

router.put('/:index', (req, res) => {
  
  if(req.body.available !== 'on' ){
    req.body.available = true;
  }else {
    req.body.available = false;
  }

  Potions[req.params.index] = req.body
  res.redirect('/potions')
})




module.exports = router;












