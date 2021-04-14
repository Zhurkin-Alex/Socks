const router = require("express").Router();
const { sessionChecker } = require("../middleware/auth");
const User = require('../models/users');

router.get('/', (req, res) => {
  res.render('mySoks')
})

router.post('/mysocks', (req, res) => {
  
})

module.exports = router;
