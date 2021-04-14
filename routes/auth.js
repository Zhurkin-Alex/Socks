const router = require("express").Router();
const { sessionChecker } = require("../middleware/auth");
// const User = require('../models/user')
const bcrypt = require("bcrypt");
const User = require("../models/user");
const saltRounds = 10;
// console.log(111);

router.get("/", sessionChecker, (req, res) => {
  res.redirect("/registration");
});
router.get("/registration", sessionChecker, (req, res) => {
  res.render("auth/registration");
});

router.post("/registration", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name);
  const newUser = await User.create({
    name,
    email,
    password: await bcrypt.hash(password, saltRounds),
  });
  req.session.user = newUser;
  res.end();

  //   res.json(status=200);
});

router
  .route("/login")
  .get(sessionChecker, (req, res) => {
    res.render("auth/login");
  })
  .post(async (req, res) => {
    console.log('login - beck');
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    // console.log(user);
    if (user && (await bcrypt.compare(password, user.password))) {
      req.session.user = user;
      res.json({ status: true });
    } else if (!user || (await bcrypt.compare(password, user.password))) {
      res.json({ status: false });
    }
    else if (user && !(await bcrypt.compare(password, user.password))) {
      res.json({ success: false })
      console.log('>>>>>>>>>>>>', res.json.status)
    }
});

router.get("/logout", async (req, res, next) => {
  if (req.session.user) {
    try {
      await req.session.destroy();
      res.clearCookie("user_sid");
      res.redirect("/");
    } catch (error) {
      next(error);
    }
  } else {
    res.redirect("/login");
  }
});



module.exports = router;




