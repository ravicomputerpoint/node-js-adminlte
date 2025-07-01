const express = require('express')
const app = express()
const sqlite3 = require('sqlite3').verbose()

app.listen(3000,()=>{
    console.log('Server started successfully on port 3000')
})


const db = new sqlite3.Database('./database.db')

db.run(`
    CREATE TABLE IF NOT EXISTS students(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        father TEXT,
        mother TEXT
    )    
`)


app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))

app.get('/',(req, res)=>{
    db.get('SELECT COUNT(*) as total_students from students',(error, rows) => {
        if (error) return res.send(error.message)
        const total_students = rows.total_students
        return res.render('dashboard',{total_students})
    })
})

app.get('/students',(req, res) => {
    db.all('select * from students',(error, students) => {
        if (error) return res.send(error.message)
        res.render('students/index',{students})
    })
})

app.get('/student/create',(req, res) => {
    res.render('students/create')
})

app.post('/student/store',(req, res)=>{
    const {name, father, mother} = req.body
    const query = 'insert into students(name, father, mother) values(?,?,?)'
    db.run(query,[name, father, mother],(error)=>{
        if (error) return res.send(error.message)
        res.redirect('/')
    })
})

app.get('/student/show/:id',(req, res) => {
    const id = req.params.id
    db.get('select * from students where id = ?', [id], (error, student) => {
        if(error) return res.send(error.message)
        res.render('students/show',{student})
    })
})

app.get('/student/edit/:id',(req, res) => {
    const id = req.params.id
    db.get('select * from students where id = ?', [id], (error, student) => {
        if(error) return res.send(error.message)
        res.render('students/edit',{student})
    })
})

app.post('/student/update/:id',(req, res) => {
    const id = req.params.id
    const {name, father, mother} = req.body
    const query = 'update students set name = ?, father = ?, mother = ? where id = ?'
    db.run(query,[name, father, mother, id],(error) => {
        if (error) return res.send(error.message)
        res.redirect('/students')
    })
})

app.get('/student/delete/:id',(req, res) => {
    const id = req.params.id
    db.run('delete from students where id = ?', [id], (error) => {
        if(error) return res.send(error.message)
        res.redirect('/')
    })
})