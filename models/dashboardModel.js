const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('./database.db')

module.exports = {
    getTotalStudents: (callback) => {
        db.get('select count(*) as total_students from students',callback)
    },
    getTotalGrades: (callback) => {
        db.get('select count(*) as total_grades from grades',callback)
    }
}