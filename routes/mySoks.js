const router = require("express").Router();
const Sock = require('../models/socks');

router.get('/', async (req, res) => {
  const socksList = await Sock.find({});
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
  res.send('ok');
})

module.exports = router;
