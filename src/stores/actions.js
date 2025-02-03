import axios from 'axios';

const actions = {
 updatePathname({commit}, path){
    commit('setPathname', path)
 }

}

export default actions