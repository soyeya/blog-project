<template>
      <nav>
         <ul>
            <li><a href=""><img src="../assets/media/menu.svg" alt="menu" @click.prevent></a></li>
            <li><a href=""><img src="../assets/media/add.svg" alt="menu" @click.prevent></a></li>
            <li v-if="loginDisplay"><a href=""><img src="../assets/media/logout.svg" alt="logout" @click.prevent></a></li>
            <li v-else><a href=""><img src="../assets/media/login.svg" alt="login" @click.prevent></a></li>
         </ul>
      </nav>
</template>
<script>
 export default{
    data(){
       return{
         loginDisplay : false,
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