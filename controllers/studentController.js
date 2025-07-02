const Student = require('../models/studentModel')

exports.dashboard = (req, res) => {
    Student.getTotalStudents((error, row) => {
        if (error) return res.send(error.message)
        Student.getTotalGrades((error, row2) => {
            if (error) return res.send(error.message)
            const total_students = row.total_students
            const total_grades = row2.total_grades
            return res.render('dashboard',{total_students, total_grades})
        })
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