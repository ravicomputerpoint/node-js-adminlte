const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database.db')

db.run(`
    create table if not exists grades(
        id integer primary key autoincrement,
        name text,
        fees integer
    )    
`)

module.exports = {
    getAll: (callback) => {
        db.all('select * from grades',callback)
    },
    getById: (id, callback) => {
        db.get('select * from grades where id = ?',[id],callback)
    },
    insert: (data, callback) => {
        db.run('insert into grades(name) values(?)',data,callback)
    },
    update: (data, callback) => {
        db.run('update grades set name = ?',data,callback)
    },
    delete: (id, callback) => {
        db.run('delete from grades where id = ?',[id],callback)
    }
}