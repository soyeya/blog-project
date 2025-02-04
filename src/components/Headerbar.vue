<template>
<header>
   <button type="button" v-if="toBack" @click="toBackEvet"></button>
   <router-link :to="'/'" ><img src="../assets/media/logo.svg" alt="logo"></router-link>
</header>
</template>
<script>
import { mapState , mapMutations } from 'vuex';

export default{
 props : ["show"],
 data(){
   return{
      toBack : this.show,
      paths : this.$route.path
   }
 },
 computed : {
   ...mapState({
      pathName : 'pathName'
   }),
 },
  created(){
  this.currentPathname()
  console.log(this.pathName)
  console.log(this.toBack)
 },
 methods :{
   ...mapMutations([
      'setPathname'
   ]),
   currentPathname(){
      this.setPathname(this.paths)
      if(this.paths.indexOf('/detail') != -1){
         return this.toBack = true
      }
      console.log(this.paths)
   },
   toBackEvet(){
     return this.$router.push('/')
   }
 }
}
</script>

<style>

 header{
    position: fixed;
    top:0px;
    left:0px;
    right:0px;
    width: 100vw;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eaeaea;
    border-bottom:1px solid #2d2e83;
    z-index:99999;

 }

 header a{

    width: 150px;
    height: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
 }

 header button{
   font-size: inherit;
   color:#333;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   width: 1.3vw;
   height: 1.3vw;
   padding-right:30px;
   background-image: url('../assets/media/arrowBefore.png');
   background-position: left center;
   background-repeat: no-repeat;
   background-size: contain;

 }
header a img{
     width: 100%;
     display: block;
     margin:0 auto;
}
</style>