const router = require("express").Router();
const User = require('../models/user')
const Socks = require('../models/socks')

router.get('/', async (req, res) => {
  const { user } = req.session
  const userSoks = await (await User.findOne({email:user.email}).populate('socks')).socks
  // console.log('userSocks',userSoks);
  // const userSoksAdd = (await User.findOne({email:user.email}).populate('socks')).socks[0].count
  // console.log('userSoksAdd',userSoksAdd);
  res.render('basket', {
    title: 'Ваша корзина',
    userSoks,
    // userSoksAdd
  })
})

router.post(`/add/:id`, async(req,res)=>{
  const{id}= req.params
  // console.log('id++++',id);
  const socks =await Socks.findOne({_id:id})
  // console.log(socks);
  socks.count +=1
  await socks.save()
  res.json(socks)
})

router.post(`/min/:id`, async(req,res)=>{
  console.log(12345, 'del-');
  const{id}= req.params
  console.log('id++++',id);
  const socks =await Socks.findOne({_id:id})
  console.log(socks);
  if(socks.count>0){
    socks.count -=1
    await socks.save()
    res.json(socks)
  }else{
    res.json({count:false})
  }
 
})

router.post(`/del/:id`, async(req,res)=>{
  // console.log(12345, 'del');
  const{id}= req.params
  console.log('id++++',id);
  const socks =await Socks.findByIdAndDelete({_id:id})
  // console.log(socks);
 res.json({socks:false})
 
})

module.exports = router;
