<template>
    <div>
      <nav>
         <ul>
            <li><button type="button" @click="sideMenuOpen"><img src="../assets/media/menu.svg" alt="menu"></button></li>
            <li><button type="button" @click="addBoard"><img src="../assets/media/add.svg" alt="menu"></button></li>
            <li v-if="loginDisplay"><a href="/" @click="LogoutEvet"><img src="../assets/media/logout.svg" alt="logout"></a></li>
            <li v-else><router-link :to="'/login'"><img src="../assets/media/login.svg" alt="login"></router-link></li>
         </ul>
      </nav>
<!--sideMenuBar-->
<div class="sideMenuWrap" v-if="showBoard">
  <div class="board-menu" v-if="loginDisplay">
    <div class="board-menu-header">
      <h3 class="header-title">Board Design</h3>
      <a class="header-close-btn" href="" @click.prevent="onClose">&times;</a>
    </div>
    <ul class="menu-list">
      <li><a href="" @click.prevent="onDeleteBoard">Delete Board</a></li>
      <li>Change Colors</li>
      <div class="color-picker">
        <a href="" data-value="rgb(0, 121, 191)" @click.prevent></a>
        <a href="" data-value="rgb(210, 144, 52)" @click.prevent></a>
        <a href="" data-value="rgb(81, 152, 57)" @click.prevent></a>
        <a href="" data-value="rgb(176, 70, 50)" @click.prevent></a>
      </div>
    </ul>
   </div>
   <div class="board-menu" v-else>
    <div class="board-menu-header">
      <h3 class="header-title">Board Design</h3>
      <a class="header-close-btn" href="" @click.prevent="onClose">&times;</a>
    </div>
    <ul class="menu-list">
      <li>로그인 후 이용가능합니다.</li>
    </ul>
   </div>
  </div>
<!---->
  </div>
</template>
<script>

import { mapState, mapMutations } from 'vuex'
import AddBoard from './AddBoard.vue'

 export default{
  components: { AddBoard },
    data(){
       return{
         loginDisplay : false,
         showBoard : false,
       }
    },
    created(){
       this.LoginState()
    },
    computed : {
        ...mapState({
            token : 'token',
            isAddBoard : 'isAddBoard'
        }),
     },
    methods: {
    ...mapMutations([
        'LOGOUT',
        'SET_IS_ADD_BOARD',
        'SET_CALLING_BOARD'
    ]),
    LoginState(){ 
     if(this.token){ 
      return this.loginDisplay = true
    }
     return this.loginDisplay = false
    },
    LogoutEvet(){
    return this.LOGOUT(false),
    this.SET_CALLING_BOARD(false),
    this.loginDisplay = false
    },
    sideMenuOpen(){
        this.showBoard = !this.showBoard
    },
    onClose() {
        this.showBoard = false
    },
    addBoard(){
      if(this.token){
        return this.SET_IS_ADD_BOARD(true)
      }
      return this.SET_IS_ADD_BOARD(false)
    }
   }
 }

</script>
<style>

nav{
    position: fixed;
    left:0px;
    right:0px;
    bottom:0px;
    width: 100vw;
    height: 50px;
    display: flex;
    align-content: center;
    justify-content: center;
    background-color:#eaeaea;
    border-top:1px solid #333;
    z-index:99999;
}

nav ul{

    width: 100%;
    height: 100%;
    display: flex;
    align-content: center;
    justify-content: space-evenly;

}

nav ul li{ 
    flex:1;
    display: flex;
    align-content: center;
    justify-content: center;
}
nav ul li a, nav ul li button{ 

    flex:1;
    display: flex; 
    align-content: center; 
    justify-content: center;
    cursor: pointer;
}

nav ul li a:hover > img{ transform: scale(1.1); transition: 800ms;}
nav ul li button:hover > img{ transform: scale(1.1); transition: 800ms;}
nav ul li a img, nav ul li button img{ 
    width:3vw;
    height: 100%;
    margin:0 auto;
}
.sideMenuWrap{
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  background-color: #fff;
  width: 300px;
  transition: all .5s;
  z-index:99999;
  border-right: solid 1px #bbb;  
}
.board-menu {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.board-menu-header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  padding: 0 6px 0 12px;
  border-bottom: #bbb solid 1px;
}

.header-title {
  font-size: 1.2vw;
  color:#2d2e83;
  
}
.header-close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  text-decoration: none;
  font-size: 24px;
  color: #333;
  font-size: 1.5vw;
}
.menu-list {
  list-style: none;
  padding-left: 0px;
}
.menu-list li {
  height: 18px;
  padding: 10px;
  margin: 5px;
  border-radius: 3px;
  font-size: 1vw;
  font-weight: 700;
  color: #333;
  margin-bottom: 5px;
  cursor: pointer;
}
.menu-list li:hover,
.menu-list li:focus {
  background-color: rgba(0,0,0, .1);
}
.menu-list li a {
  text-decoration: none;
  color: inherit;
}
.color-picker {
  margin: 0 15px;
}
.color-picker a {
  display: inline-block;
  width: 49%;
  height: 100px;
  border-radius: 8px;
}

</style>