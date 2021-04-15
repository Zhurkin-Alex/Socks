const router = require("express").Router();
const Sock = require('../models/socks');
const { findOne } = require("../models/user");
const User = require('../models/user')

router.get('/', async (req, res) => {
  const socksList = await Sock.find({}, {_id: 0, __v: 0});
  console.log(socksList)
  res.render('mySoks', {
    title: 'Мои носки',
    socksList,
  })
})

router.post('/', async (req, res) => {
  const { color, pattern, img } = req.body;
  const sock = new Sock({
    color,
    pattern,
    img,
  });
  await sock.save();
  const { user } = req.session
  
  console.log('email-------', user.email);
  const username = await User.findOne({email:user.email})
  console.log(username);
  username.socks.push(sock)
  await username.save()
  res.send('');
})

module.exports = router;
