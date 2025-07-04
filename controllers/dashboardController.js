const Dashboard = require('../models/dashboardModel')

exports.index = (req, res) => {
    Dashboard.getTotalStudents((error, row) => {
        if (error) return res.send(error.message)
        Dashboard.getTotalGrades((error, row2) => {
            if (error) return res.send(error.message)
            const total_students = row.total_students
            const total_grades = row2.total_grades
            return res.render('dashboard',{total_students, total_grades})
        })
    })
}