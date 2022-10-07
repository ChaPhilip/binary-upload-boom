module.exports = {
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/");
    }
  },
  ensureGuest: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/dashboard");
    }
  },
};

//this file just to see if they are loggged in if not redirect to main page
//passport and session is handling the .isAuthenticated()
//can send ensureAuth to any route to check if they are logged in.
//      