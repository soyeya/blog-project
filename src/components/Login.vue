<template>
    <div class="loginWrapper">
    <div class="login">
      <h2>Log in to <strong>Look-Diary</strong></h2>
      <form @submit.prevent="onSubmit">
        <div>
          <label for="email">Email</label>
          <input class="form-control" type="text" name="email" 
            v-model="email" autofocus placeholder="e.g.,test123" />
        </div>
        <div>
          <label for="password">Password</label>
          <input class="form-control" type="password" 
            v-model="password" placeholder="123123" />
        </div>
        <button  class="btn"  :class="{'btn-success': !invalidForm}" type="submit" :disabled="invalidForm">Log In</button>
      </form>
      <p class="error" v-if="error">{{error}}</p>
    </div>
</div>
  </template>
<script>

 import { mapState, mapMutations } from 'vuex'
 import axios from 'axios'
 export default{

data() {
    return {
      email: '',
      password: '',
      error: '',
      rPath: '',
    }
  },
  computed : {
    ...mapState({
       token : 'token'
    }),
    invalidForm() {
      return !this.email || !this.password
    }
  },
  methods: {
    ...mapMutations([
      'LOGIN'
     ]),
    async onSubmit(){
      const array = [this.email, this.password]
      try{
        const res = await axios.post('http://localhost:8888/api/login', array);
        const data = res.data;
        console.log(data)
        if(data === true){
          return this.token = true,
           this.$router.push('/'),
           this.LOGIN(true);
        }
        return window.confirm('아이디와 비밀번호가 일치하지 않습니다');
        
        }catch(err){
          return err;
        }
    }
  }
 }

</script>
<style>

.loginWrapper{

    padding-top:100px;
    width: 100vw;
    height: calc(100vh - 100px);
    background-color: #2d2e83;
    margin: 0 auto;
}

label{ 
    font-size: 1vw; 
    color:#eaeaea; 
    padding:8px 0px;
    display: block;
}
.login{ width: 400px; margin: 0 auto;}
.login h2{
    font-size: 2vw;
    text-align: center;
    padding:30px 0px;
    color:#eaeaea;
    letter-spacing: -2px;
}

.login h2 strong{
    color: #e6322b;
}
.btn {
  border-radius: 3px;
  padding: 6px 8px;
  background-color: #e2e4e6;
  border: none;
  display: inline-block;
  color: #fff;
  font-size: 14px;
  line-height: 20px;  
  font-weight: 700;
  cursor: pointer;
}
.btn-success {
  background-color: #e6322b;
  box-shadow: 0 1px 0 #e6322b;
}
.form-control {
  width: 100%;
  box-sizing: border-box;
  background-color: #e2e4e6;
  border: 1px solid #cdd2d4;
  border-radius: 3px;
  display: block;
  margin-bottom: 12px;
  padding: 6px 8px;
  transition: background-color .3s;
}
input[type=text].form-control,
input[type=password].form-control,
textarea.form-control {
  font-size: 14px;
}
.form-control:focus {
  background-color: #fff;
}

.error {
  color: #f00;
}
</style>