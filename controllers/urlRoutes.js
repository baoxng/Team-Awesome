const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
    res.render('homepage');
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/signup', async (req, res) =>{
  try{
    res.render('signup');
  }
  catch(err){
    res.status(500).json(err);
  }
});

router.get('/login', async(req, res) => {
  try{
    res.render('login');
  }
  catch(err){
    res.status(500).json(err)
  }
  // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/homepage');
//     return;
//   }
});

router.get('/dashboard', async (req, res) =>{
  try{
  res.render('dashboard');
  }
  catch(err){
    res.status(500).json(err)
  }
});


router.post('/login', (req, res) => {
  if (req.session.logged_in) {
    req.session.create(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});



module.exports = router;
