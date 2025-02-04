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

// const db = mysql.createConnection({
//     host : "127.0.0.1",
//     user : "root",
//     password : "wlfkfgksp!!55",
//     database : "myDiary",
//     waitForConnections: true,
//     port: 3306  
//   });

// db.connect((err) => {
// if (err) {
//     console.error('MySQL 연결 실패:', err);
//     return;
// }
// console.log('MySQL 연결 성공');
// });


app.get("/", (req, res) => {
    res.send("myDiary Database")
})


/* 로그인 */
app.post("/api/login" , async(req, res) => {

const sqlQuery = `SELECT * FROM LOGIN`;
const values = req.body; //post로 받은 email, password값
const [id, password] = values;

try{
await DATASQL.db.promise().query(sqlQuery)
if(id === results[0].userId && password === results[0].userPassword){
  return res.status(200).send({ message : "성공적으로 로그인이 되었습니다"});
}
}catch(err){
    return res.status(500).send({error: `로그인 실패 ${err.message}`})
}
})

/* 목록 리스트 불러오기 */
app.get("/api/list" , async(req, res) => { 

  const sqlQuery = `SELECT * FROM DETAIL`;

  try{
    await DATASQL.db.promise().query(sqlQuery)
    if (err) { res.send({ error: '데이터 조회 실패' }); return;}
    res.status(200).send(results);
    console.log(results);
    }catch(err){
    return `데이터 불러오기 오류, ${err}`
    }
})

/* 보드추가 */
app.post("/api/addList" , async(req, res) => {
  const values = req.body; //받아온 데이터 배열
  const [id, title, content, img] = values; //배열에서 값 추출
  const newList = `INSERT INTO DETAIL(id, title, content, img) VALUES('${id}','${title}', '${content}','${img}')`;
  try{
    if(values.length == 4){
     await DATASQL.db.promise().query(newList)
     res.status(200).send({ message : '데이터가 성공적으로 추가되었습니다'})
    }
    }catch(err){
        return res.status(500).send({error: `데이터추가 실패 ${err.message}`})
    }
})
 
server.listen(PORT, ()=>{
    console.log(`${PORT}로 작동중`);
  })

