const router = require("express").Router();
const { sessionChecker } = require("../middleware/auth");

router.get('/' ,(req,res)=>{

  res.redirect('/home')
})

router.get('/home', (req,res)=>{
  res.render('home')
})

module.exports = router;
