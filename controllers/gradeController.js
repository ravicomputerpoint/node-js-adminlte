const Grade = require('../models/gradeModel')

module.exports = {
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
    },
    show: (req, res) => {
        const id = req.params.id
        Grade.getById(id, (error, grade) => {
            if (error) return res.send(error.message)
            res.render('grades/show',{grade})
        })
    },
    edit: (req, res) => {
        const id = req.params.id
        Grade.getById(id, (error, grade) => {
            if (error) return res.send(error.message)
            res.render('grades/edit',{grade})
        })
    },
    update: (req, res) => {
        const id = req.params.id
        const {name} = req.body
        Grade.update([name, id],(error) => {
            if (error) return res.send(error.message)
            res.redirect('/grades')
        })
    },
    delete: (req, res) => {
        const id = req.params.id
        Grade.delete(id, (error) => {
            if (error) return res.send(error.message)
            res.redirect('/grades')
        })
    }
}