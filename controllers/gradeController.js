const Grade = require('../models/gradeModel')

exports.index = (req, res) => {
    Grade.getAll((error, grades) => {
        if (error) return res.send(error.message)
        res.render('grades/index',{grades})
    })
}

exports.create = (req, res) => res.render('grades/create')

exports.store = (req, res) => {
    const {name} = req.body
    Grade.insert([name],(error) => {
        if (error) return res.send(error.message)
        res.redirect('/grades')
    })
}

exports.show = (req, res) => {
    const id = req.params.id
    Grade.getById(id,(error, grade) => {
        if (error) return res.send(error.message)
        return res.render('grades/show',{grade})
    })
}

exports.edit = (req, res) => {
    const id = req.params.id
    Grade.getById(id,(error, grade) => {
        if (error) return res.send(error.message)
        res.render('grades/edit',{grade})
    })
}

exports.update = (req, res) => {
    const id = req.params.id
    const {name} = req.body
    Grade.update([name, id],(error) => {
        if (error) res.send(error.message)
        res.redirect('/grades')
    })
}

exports.delete = (req, res) => {
    const id = req.params.id
    Grade.delete(id,(error) => {
        if (error) res.send(error.message)
        res.redirect('/grades')
    })
}