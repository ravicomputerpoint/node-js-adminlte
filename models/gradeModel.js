const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database.db')

module.exports = {
    getTotal: (callback) => {
      db.get('select count(*) from students',callback)  
    },
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
        db.run('update grades set name = ? where id = ?',data,callback)
    },
    delete: (id, callback) => {
        db.run('delete from grades where id = ?',[id],callback)
    }
}