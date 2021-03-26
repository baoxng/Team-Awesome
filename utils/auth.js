const withAuth = (req, res, next) => {
    // with this user needs to be logged with a session.
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;