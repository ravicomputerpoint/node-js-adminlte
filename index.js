const express = require('express')
const app = express()
const studentRoutes = require('./routes/studentRoutes')

//App Middlewares
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))

//Mount the router
app.use('/',studentRoutes)

//Server starting
app.listen(3000,()=>{
    console.log('Server started successfully on port 3000')
})