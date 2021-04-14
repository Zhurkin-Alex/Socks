const express = require('express')
const app = express()
// for middleware
const middleware = require('./middleware')
const authRouter = require('./routes/auth')
const pictureRouter = require('./routes/pictures')
//for db connection
const dbConnection = require('./middleware/dbConnection')


// for public
app.use(express.static('public'))
middleware(app)

// Создаем локальные переменные для  использования в nav
app.use((req,res, next) => {
  if(req.session && req.session.user){
    res.locals.email = req.session.user.email
    
    // if (req.session.user.role == 'seller') {
    //   res.locals.isSeller = true; 
    // } else {
    //   res.locals.isSeller = false;
    // }


  }
  next()
})

dbConnection()
app.use('/', authRouter)
app.use('/picture', pictureRouter)
module.exports = app
