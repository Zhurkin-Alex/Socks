const express = require('express')
const app = express()
// for middleware
const middleware = require('./middleware')
const homeRouter = require('./routes/home')
const authRouter = require('./routes/auth')
const pictureRouter = require('./routes/pictures')
const geniratorRouter = require('./routes/genirator')
const basketRouter = require('./routes/basket')
const mySoksRouter = require('./routes/mySoks')
//for db connection
const dbConnection = require('./middleware/dbConnection')


// for public
app.use(express.static('public'))
middleware(app)

// Создаем локальные переменные для  использования в nav
app.use((req,res, next) => {
  if(req.session && req.session.user){
    res.locals.email = req.session.user.email
    res.locals.name = req.session.user.name
    // if (req.session.user.role == 'seller') {
    //   res.locals.isSeller = true; 
    // } else {
    //   res.locals.isSeller = false;
    // }


  }
  next()
})

dbConnection()
app.use('/', homeRouter)
app.use('/genirator', geniratorRouter)
app.use('/basket', basketRouter)
app.use('/login', authRouter)
app.use('/registration', authRouter)
app.use('/mySoks', mySoksRouter)
app.use('/picture', pictureRouter)
module.exports = app
