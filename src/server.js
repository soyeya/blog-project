const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const mysql = require('mysql2');
const PORT = process.env.PORT || 8888;
const server = require('http').createServer(app);
const { DATASQL } = require('./lib/data.js');

app.use(cors({
    origin : "*",
    credentials: true, 
    optionsSuccessStatus: 200,
 }));
 
 app.use(express.json()); 
 // post 요청 시 값을 객체로 바꿔줌
 app.use(express.urlencoded({ extended: false }));

 app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const db = mysql.createConnection({
    host : "127.0.0.1",
    user : "root",
    password : "wlfkfgksp!!55",
    database : "myDiary",
    waitForConnections: true,
    port: 3306  
  });

db.connect((err) => {
if (err) {
    console.error('MySQL 연결 실패:', err);
    return;
}
console.log('MySQL 연결 성공');
});



app.get("/", (req, res) => {
    res.send("myDiary Database")
})

app.get("/api/login" , (req, res) => {

const sqlQuery = `SELECT * FROM LOGIN`;
try{
DATASQL.db.query(sqlQuery, (err, results) => {
    if (err) {
    res.send({ error: '데이터 조회 실패' });
    return;
    }
    console.log(results);
    res.send(results)});
}catch(err){
    return `데이터 불러오기 오류, ${err}`
}

})


 
server.listen(PORT, ()=>{
    console.log(`${PORT}로 작동중`);
  })

