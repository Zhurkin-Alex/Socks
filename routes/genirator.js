const router = require("express").Router();
const { sessionChecker } = require("../middleware/auth");





router.get('/', (req,res)=>{
  res.render('genirator')
})



module.exports = router;
