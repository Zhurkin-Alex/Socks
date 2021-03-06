function cookiesCleaner(req, res, next) {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie("user_sid");
  }
  next();
}
// middleware function to check for logged-in users
const sessionChecker = (req, res, next) => {
  if (req.session.user) {
    res.redirect("/picture");
  } else {
    next();
  }
};
const sessionCheckerLogin = (req, res, next) => {
  if (!req.session.user) {
    res.redirect("/login");
  } else {
    next();
  }
};
module.exports = {
  sessionChecker,
  cookiesCleaner,
  sessionCheckerLogin
};
