const Grade = require('../models/gradeModel')

exports.module = {
    index: (req, res) => {
        Grade.getAll((error, grades) => {
            if (error) return res.send(error.message)
            res.render('grades/index',{grades})
        })
    },
    create: (req, res) => res.render('grades/create'),
    store: (req, res) => {
        const {name} = req.body
        Grade.insert(name,(error) => {
            if (error) return res.send(error.message)
            res.redirect('/grades')
        })
    }
}