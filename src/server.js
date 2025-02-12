const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8888;
const server = require('http').createServer(app);
const { DATASQL } = require('./lib/data.js');

app.use(cors({
    origin : "*",
    credentials: true, 
    optionsSuccessStatus: 200,
 }));
 
 app.use(express.json()); //json파일로 변환

 // post 요청 시 값을 객체로 바꿔줌
 app.use(express.urlencoded({ extended: false }));

 app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get("/", (req, res) => {
    res.send("myDiary Database")
})


/* 로그인 */
app.post("/api/login" , async(req, res) => {

const sqlQuery = `SELECT * FROM LOGIN`;
const values = req.body; //post로 받은 email, password값
const [id, password] = values;

try{

const data = await DATASQL.db.promise().query(sqlQuery)
let answer = data[0];
console.log(answer)
console.log(values)

if(id == answer[0].userId && password === answer[0].userPassword){
  return res.status(200).send(true),
  console.log('로그인성공')
}
}catch(err){
    return res.status(500).send(false),
    console.log('로그인실패')
}
})

/* 목록 리스트 불러오기 */
app.get("/api/list" , async(req, res) => { 

  const sqlQuery = `SELECT * FROM DETAIL`;
  try{
    const listData = await DATASQL.db.promise().query(sqlQuery) //[[]]형태의 배열로 데이터를 반환
    const data = listData[0];
    res.status(200).send(data);
    console.log('list목록불러오기' , data);
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
 
/* 보드삭제  */
app.delete("/api/delete" , async(req, res) => {
  const values = req.body; //받아온 id값
  console.log('삭제할 values_id',values)

  if (!Array.isArray(values) || values.length === 0 || !values[0]) {
    return res.status(400).send({ error: '유효한 ID가 없습니다.' });
  }

  const idToDelete = values[0]; 
  const deleteData = 'DELETE FROM DETAIL WHERE id = ?';

  try{
     await DATASQL.db.promise().query(deleteData, [idToDelete])
     console.log(idToDelete, '삭제할 values_id')
     res.status(200).send({ message : '데이터가 성공적으로 삭제되었습니다'})
    }catch(err){
        return res.status(500).send({error: `데이터삭제 실패 ${err.message}`})
    }
})

server.listen(PORT, ()=>{
    console.log(`${PORT}로 작동중`);
  })

