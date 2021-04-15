const router = require("express").Router();

router.get('/', (req, res) => {
  res.render('basket', {
    title: 'Ваша корзина',
    
  })
})


module.exports = router;
