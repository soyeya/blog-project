import axios from 'axios';

const DOMAIN = 'http://localhost:8888'
const request = (method, url, data) => {
    return axios({
      method, 
      url: DOMAIN + url, 
      data
    }).then(result => result.data)
    //   .catch(result => {
    //     const {status} = result.response
    //     if (status === UNAUTHORIZED) onUnauthorized()
    //     throw result.response
    //   })
  }
  export const auth = {
    login(email, password) {
      return request('post', '/api/login', {email, password}) 
    }
  }