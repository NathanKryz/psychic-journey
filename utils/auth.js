// making sure user is logged in to use continue with functionality
const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
        res.status(401);
      res.redirect('/');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;