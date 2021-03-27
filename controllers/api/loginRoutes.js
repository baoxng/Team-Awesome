//Requiring our router and adding user model
const router = require('express').Router();
const {User}= require('../../models')
const withAuth = require('../../utils/auth');

//Get the login/signup page



//Create post for new user




//Find all user with the log in
router.get('/', withAuth, async (req, res) => {
    try {
      const userData = await User.findAll({
        attributes: { exclude: ['password'] },
        order: [['name', 'ASC'], ['email', 'ASC']],
      });
  
      const users = userData.map((user) => user.get({ plain: true }));
  
      res.render('homepage', {
        users,
        //logged in status
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/login', (req, res) => {
    //if session exists then goes to homepage.
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  //Once user is logged in start a session

  module.exports = router;