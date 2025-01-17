<template>
    <div>
      <nav>
         <ul>
            <li><a href="" @click.prevent="sideMenuOpen"><img src="../assets/media/menu.svg" alt="menu"></a></li>
            <li><a href="" @click.prevent><img src="../assets/media/add.svg" alt="menu"></a></li>
            <li v-if="loginDisplay"><a href="" @click.prevent><img src="../assets/media/logout.svg" alt="logout"></a></li>
            <li v-else><router-link :to="'/login'"><img src="../assets/media/login.svg" alt="login"></router-link></li>
         </ul>
      </nav>
    </div>
</template>
<script>

import { mapState, mapMutations } from 'vuex'


 export default{
     computed : {
         ...mapState({
             isShowBoardSettings : 'isShowBoardSettings'
       }),
     },
    data(){
       return{
         loginDisplay : false,
       }
    },
    methods: {
        ...mapMutations([
             'SET_IS_SHOW_BOARD_SETTINGS'
       ]),
        sideMenuOpen(){
           this.SET_IS_SHOW_BOARD_SETTINGS(true)
           console.log(this.SET_IS_SHOW_BOARD_SETTINGS)
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
nav ul li a{ 

    flex:1;
    display: flex; 
    align-content: center; 
    justify-content: center;
}

nav ul li a:hover > img{ transform: scale(1.1); transition: 800ms;}
nav ul li a img{ 
    width:3vw;
    margin:0 auto;
}

</style>