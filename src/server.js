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

app.post("/api/login" , async(req, res) => {

const sqlQuery = `SELECT * FROM LOGIN`;
const values = await req.body; //post로 받은 email, password값
try{
DATASQL.db.query(sqlQuery, (err, results) => {

    if (err) {
    res.send({ error: '데이터 조회 실패' });
    return;
    }
    if(values[0] === results[0].userId && values[1] === results[0].userPassword){
      return res.send('true');
    }else{
      res.send('false'); 
    }
    console.log(results);
    console.log(values);
 });
    
}catch(err){
    return `데이터 불러오기 오류, ${err}`
}

})

app.get("/api/list" , async(req, res) => {

  const sqlQuery = `SELECT * FROM DETAIL`;
  try{
    DATASQL.db.query(sqlQuery, (err, results) => {
        if (err) {
        res.send({ error: '데이터 조회 실패' });
        return;
        }
        res.send(results);
        console.log(results);
     });
    }catch(err){
        return `데이터 불러오기 오류, ${err}`
    }
})

app.post("/api/addList" , async(req, res) => {

  const values = await req.body;
  const newList = `INSERT INTO DETAIL(id, title, content, img) VALUES('${values[0]}','${values[1]}','${values[2]}','${values[3]}')`;
  const sqlQuery = `SELECT * FROM DETAIL`;
  try{
    DATASQL.db.query(sqlQuery, (err, results) => {
    
        if (err) {
        res.send({ error: '데이터 조회 실패' });
        return;
        }
        console.log(results);
        console.log(values);
     });
        
    }catch(err){
        return `데이터 불러오기 오류, ${err}`
    }
})
 
server.listen(PORT, ()=>{
    console.log(`${PORT}로 작동중`);
  })

