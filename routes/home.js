const router = require("express").Router();

router.get('/', (req, res) => {
  res.redirect('/home')
})

router.get('/home', (req, res) => {
  res.render('home')
})

module.exports = router;
