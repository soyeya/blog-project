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
<Sidemenu v-if="this.isShowBoardSettings"/>
  </div>
</template>
<script>

import { mapState, mapMutations } from 'vuex'
import AddBoard from './AddBoard.vue'
import Sidemenu from './Sidemenu.vue'

 export default{
  components: { AddBoard, Sidemenu },
    data(){
       return{
         loginDisplay : false,
       }
    },
    created(){
       this.LoginState()
    },
    computed : {
        ...mapState({
            token : 'token',
            isAddBoard : 'isAddBoard',
            isShowBoardSettings : 'isShowBoardSettings'
        }),
     },
    methods: {
    ...mapMutations([
        'LOGOUT',
        'SET_IS_SHOW_BOARD_SETTINGS',
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
    this.loginDisplay = false,
    this.SET_IS_SHOW_BOARD_SETTINGS(false)
    },
    sideMenuOpen(){
      this.SET_IS_SHOW_BOARD_SETTINGS(true)
    },
    onClose() {
      this.SET_IS_SHOW_BOARD_SETTINGS(false)
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


</style>