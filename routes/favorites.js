const router = require("express").Router();
const Favorite = require('../models/favorites');

router.get('/', async (req, res) => {
  const favoriteList = await Favorite.find({}, {_id: 0, __v: 0});
  console.log(favoriteList)
  res.render('mySoks')
})

router.post('/', async (req, res) => {
  const { color, pattern, img } = req.body;
  const favorite = new Favorite({
    color,
    pattern,
    img,
  });
  await favorite.save();
})

module.exports = router;
