const router = require("express").Router();
const { sessionChecker } = require("../middleware/auth");
const Socks = require('../models/socks')




router.get('/', (req,res)=>{
  res.render('picture')
})


module.exports = router;
