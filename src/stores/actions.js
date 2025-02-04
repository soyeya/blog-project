import axios from 'axios';

const actions = {
 async SET_LIST({commit}){
     return await axios.get('http://localhost:8888/api/list')
     .then(res =>  res.data)
    },

 async ADD_BORAD_DATA({commit}, data){
    const [id, title, content, img] = data
    return await axios.post('http://localhost:8888/api/addList', data)
    .then( _ => { console.log(data), commit('SETUP_LIST', {id: id, title:title, content:content, img:img})});
    
 }
   
}

export default actions