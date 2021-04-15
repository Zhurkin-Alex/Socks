const router = require("express").Router();
const Favorite = require('../models/favorites');
const User = require('../models/user')

router.get('/', async (req, res) => {
  const favoriteList = await Favorite.find({}, { _id: 0, __v: 0 });
  console.log(favoriteList)
  res.render('mySoks', {
    title: 'Избранное',
    favoriteList,
  })
})

router.post('/', async (req, res) => {
  const { color, pattern, img } = req.body;
  const favorite = new Favorite({
    color,
    pattern,
    img,
  });
  await favorite.save();
  const { user } = req.session;
  const username = await User.findOne({email:user.email});
  username.favorites.push(favorite)
  await username.save()
})

module.exports = router;
