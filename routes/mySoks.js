const router = require("express").Router();
const Sock = require('../models/socks');

router.get('/', (req, res) => {
  res.render('mySoks')
})

router.post('/mysocks', async (req, res) => {
  const { color, pattern } = req.body;
  const sock = new Sock({
    color: color,
    pages: pictures,
    uzor: pattern,
  });
  await sock.save();
  res.send('ok');
})

module.exports = router;
