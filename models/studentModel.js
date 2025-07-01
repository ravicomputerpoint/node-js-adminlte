const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database.db')
db.run(`
    CREATE TABLE IF NOT EXISTS students(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        father TEXT,
        mother TEXT
    )    
`)

module.exports = {
    getTotal: (callback) => {
        db.get('select count(*) as total_students from students',callback)
    },
    getAll: (callback) => {
        db.all('select * from students',callback)
    },
    getById: (id, callback) => {
        db.get('select * from students where id = ?',[id],callback)
    },
    insert: (data, callback) => {
        db.run('insert into students(name, father, mother) values(?,?,?)',data,callback)
    },
    update: (data, callback) => {
        db.run('update students set name = ?, father = ?, mother = ? where id = ?',data,callback)
    },
    delete: (id, callback) => {
        db.run('delete from students where id = ?',[id],callback)
    }
}