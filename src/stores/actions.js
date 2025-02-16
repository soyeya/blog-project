import axios from 'axios';

const actions = {
 async SET_LIST({}){
     return await axios.get('http://localhost:8888/api/list')
     .then(res => res.data)
     .catch(err => { err })
    },
 async ADD_BORAD_DATA({commit}, data){
    const [id, title, content, img] = data
    return await axios.post('http://localhost:8888/api/addList', data)
    .then( _ => { console.log(data), commit('SETUP_LIST', {id: id, title:title, content:content, img:img})});
    
 },

 async DELETE_BOARD_DATA({commit}, [data]){
   return await axios.delete(`http://localhost:8888/api/delete`, { 
      headers: {
         'Content-Type': 'application/json'  // 요청 본문이 JSON임을 명시
       },
      data: [data] }) //배열형태로 데이터 전달
   .then(_ => console.log('삭제성공'))
   .then(_ => console.log('DELETE_BOARD_DATA',[data]))
   .then(_ => commit('LIST_RESET'))
   .catch(error => console.error('삭제 실패:', error));
 }
   
}

export default actions