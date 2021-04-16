const router = require("express").Router();
const User = require('../models/user')
const Socks = require('../models/socks')
const nodemailer = require('nodemailer')

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
  // console.log('id++++',id);
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
  // console.log('id++++',id);
  const socks =await Socks.findByIdAndDelete({_id:id})
  // console.log(socks);
 res.json({socks:false})
 
})

router.post('/buy', async(req,res)=>{
  console.log('buy');
  const { user } = req.session
  const userSoks = await (await User.findOne({email:user.email}).populate('socks')).socks
  
  console.log(userSoks);

  async function main() {

    let transporter =  nodemailer.createTransport({
      service: 'Mail.ru',
      auth: {
        user: 'mr_bono1997@mail.ru',
        pass: 'bono1997'
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  try{
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Mr sock" mr_bono1997@mail.ru', // sender address
      to: user.email, // list of receivers
      subject: "Hello ✔", // Subject line
      text: `your order is: ${userSoks} `, // plain text body
      html: 'Спасибо за заказ! С вами свяжется, в ближайшее время, наш менеджер.', // html body
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }catch(error){console.error(error)}
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  
  main().catch(console.error);
  

  res.json({sucsess:true})


})

module.exports = router;
