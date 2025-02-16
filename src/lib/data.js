const mysql = require('mysql2');


const db = mysql.createConnection({
    host : "127.0.0.1", //localhost라고 명시할 시 오류가 발생할수도 있다.
    user : "root",
    password : "wlfkfgksp!!55",
    database : "myDiary",
    waitForConnections: true
  });


const DATASQL = {
    db,
}

module.exports = { DATASQL }