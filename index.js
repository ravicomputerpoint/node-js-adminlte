const express = require('express')
const app = express()

app.listen(3000,()=>{
    console.log('Server started successfully on port 3000')
})

app.set('view engine','ejs')

app.use(express.static('public'))

app.get('/',(req, res)=>{
    return res.render('dashboard')
})