const mysql = require('mysql2/promise')


const mysqlPool = mysql.createPool({
    host: 'localhost',
    user:'root',
    password:'123456789',
    database:'aws',
    port:'3306'
})
module.exports = mysqlPool
