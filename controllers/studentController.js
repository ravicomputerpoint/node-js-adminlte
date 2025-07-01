const Student = require('../models/studentModel')

exports.dashboard = (req, res) => {
    Student.getTotal((error, row) => {
        if (error) return res.send(error.message)
        return res.render('dashboard',{total_students: row.total_students})
    })
}

exports.index = (req, res) => {
    Student.getAll((error, students) => {
        if (error) return res.send(error.message) 
        res.render('students/index',{students})
    })
}

exports.create = (req, res) => res.render('students/create')

exports.store = (req, res) => {
    const {name, father, mother} = req.body
    Student.insert([name, father, mother],(error) => {
        if (error) return res.send(error.message)
        res.redirect('/students')
    })
}

exports.show = (req, res) => {
    const id = req.params.id
    Student.getById(id,(error, student) => {
        if (error) return res.send(error.message) 
        res.render('students/show',{student})
    })
}

exports.edit = (req, res) => {
    const id = req.params.id
    Student.getById(id,(error, student) => {
        if (error) return res.send(error.message)
        res.render('students/edit',{student})
    })
}

exports.update = (req, res) => {
    const id = req.params.id
    const {name, father, mother} = req.body
    Student.update([name, father, mother, id],(error) => {
        if (error) return res.send(error.message)
        res.redirect('/students')
    })
}

exports.delete = (req, res) => {
    const id = req.params.id
    Student.delete(id,(error) => {
        if (error) return res.send(error.message)
        res.redirect('/students')
    })
}