<template>
<header>
   <router-link :to="'/'"><img src="../assets/media/logo.svg" alt="logo"></router-link>
</header>
</template>
<script>

export default{

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
    align-content: center;
    justify-content: center;
    background-color: #eaeaea;
    border-bottom:1px solid #2d2e83;
    z-index:99999;
    /* background-color:#2d2e83; */

 }

 header a{

    width: 150px;
    height: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
 }

header a img{
     width: 100%;
     display: block;
     margin:0 auto;
}
</style>