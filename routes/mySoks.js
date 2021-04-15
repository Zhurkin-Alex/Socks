const router = require("express").Router();
const Sock = require('../models/socks');

router.get('/', async (req, res) => {
  const socksList = await Sock.find({});
  res.render('mySoks', {
    title: 'Мои носки',
    socksList,
  })
})

router.post('/mysocks', async (req, res) => {
  const { color, pattern, img } = req.body;
  console.log(color, pattern, img)
  const sock = new Sock({
    color,
    pattern,
    img,
  });
  await sock.save();
  res.send('ok');
})

module.exports = router;
