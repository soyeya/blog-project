<template>
    <div class="boardList">
         <div class="profileContainer">
          <h3 class="titles" v-if="listDisplay">어서오세요. test123님</h3>
           <h3 class="titles" v-else>Hello, We Are Look-Diary</h3>
           <div class="profileContent" href="" v-if="listDisplay">
            <div class="imgBoxs">
              <img src="../assets/media/profile.svg" alt="profile">
            </div>
            <div class="text">
               <h5 class="info">
                  <p class="owner">test123</p>
                  <p>Board 갯수 : <span>{{lists.length}}</span>개</p>
               </h5>
            </div>
          </div>
          <div class="profileContent" v-else>
            <div class="text">
                <router-link :to="'/login'">로그인을 해주세요</router-link>
            </div>
          </div>
         </div>
         <div class="container listContainer" v-if="listDisplay">
            <ul class="btnBoxs">
                <li><button type="button" @click="changeListStyle1" ref="listBtn01" :class="'active'"><img src="../assets/media/album.svg" alt="list"></button></li>
                <li><button type="button" @click="changeListStyle2" ref="listBtn02"><img src="../assets/media/list.svg" alt="list"></button></li>
            </ul>
            <ul class="lists" v-if="listStyle1">
                <li v-for="v in lists" :key="`${v.id}`">
                  <a href="" class="alburm" @click.prevent>
                    <img :src="`/src/assets/media/board/${v.img}.png`" :alt="`alburmImg+${v.id}`" />
                    <span>{{v.title}}</span>
                  </a>
                </li>
            </ul>
            <ul class="lists secondList" v-if="listStyle2">
                <li v-for="v in lists" :key="`list+${v.id}`">
                <a href="" @click.prevent>
                  <h3>
                     <p>{{v.title}}</p>
                     {{v.content}}
                  </h3>
                  <img :src="`/src/assets/media/board/${v.img}.png`" :alt="`listImg+${v.id}`" />
                </a>
              </li>
            </ul>
       </div>
       <div class="container" v-else>
            <h5 class="tdTitle">오늘의 Look-Diary 기록</h5>
            <ul class="lists beforeList">
                <li><a href="" @click.prevent><img src="../assets/media/board/beforeImg1.png" alt="img1"/></a></li>
                <li><a href="" @click.prevent><img src="../assets/media/board/beforeImg2.png" alt="img2"/></a></li>
                <li><a href="" @click.prevent><img src="../assets/media/board/beforeImg3.png" alt="img3"/></a></li>
                <li><a href="" @click.prevent><img src="../assets/media/board/beforeImg4.png" alt="img4"/></a></li>
                <li><a href="" @click.prevent><img src="../assets/media/board/beforeImg5.png" alt="img5"/></a></li>
                <li><a href="" @click.prevent><img src="../assets/media/board/beforeImg6.png" alt="img6"/></a></li>
                <li><a href="" @click.prevent><img src="../assets/media/board/beforeImg7.png" alt="img7"/></a></li>
            </ul>
       </div>
    </div>
</template>
<script>

import { mapMutations, mapState } from 'vuex';
import axios from 'axios';

 export default{
  data(){
    return{
       listDisplay : false,
       listStyle1 : true,
       listStyle2 : false,
       lists : []
    }
  },
  created(){
     this.LoginState()
  },
  computed : {
    ...mapState({
      token : 'token'
     }),
  },
  methods : {
    async callList(){
      try{
          const res = await axios.get('http://localhost:8888/api/list');
          const data = res.data;
          console.log(data);
          data.forEach((v) => {
             this.lists.push(v)
            })
          console.log(this.lists)
        }catch(error){
           return console.log(error)
        }
    },
    LoginState(){
       if(this.token){
        return this.listDisplay = true,
        this.callList()
       }
       return this.listDisplay = false
     },
     changeListStyle1(){
        this.listStyle1 = true
        this.listStyle2 = false
        this.$refs.listBtn01.className = "active"
        this.$refs.listBtn02.className = ""
        console.log(this.token)

     },
     changeListStyle2(){
        this.listStyle2 = true
        this.listStyle1 = false
        this.$refs.listBtn02.className = "active"
        this.$refs.listBtn01.className = ""
     }
  }

 }
</script>
<style>

  .boardList{
    padding:70px 5% 100px;
    width: calc(100vw - 10%);
    margin:0 auto;
    background-color: #eaeaea;
  }

  .boardList .profileContainer{
    
    padding:5% 0 0;
    width:calc(100%);
    margin:0 auto;

  }
  .boardList .profileContainer .titles{
    padding-bottom:1%;
    font-size: 1.5vw;
    letter-spacing: -1.5px;
    color:#2d2e83;
    
  }

  .boardList .profileContainer .profileContent {
    
    padding:1rem 0;
    display: flex;
    align-content: center;
    background-color:#2d2e83;
    border-radius: 18px;
  }

  .boardList .profileContainer .profileContent .imgBoxs{

     display: flex;
     align-content: center;
     padding:10px;
     width:5vw;

  }

  .boardList .profileContainer .profileContent .imgBoxs img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    filter: invert(100);
  }

  .boardList .profileContainer .profileContent .inverted img{
    filter:invert(100)
  }
  .boardList .profileContainer .profileContent .text{

    width:calc(30% - 20px);
    padding:0px 10px;
    display: flex;
    align-items: center;
    color:#eaeaea;
    font-size: 1vw;
    font-family: "Pretendard";

  }

  .boardList .profileContainer .profileContent .text h5{

    font-weight: 400;
    font-size: 1.3vw;
  }

  .boardList .profileContainer .profileContent .text h5 p{
    padding:3px 0px;
    font-size: 1vw;
  }

  .boardList .profileContainer .profileContent .text h5 .owner{
    font-size: 1.5vw;
    font-weight: 600;
  }
 
  .boardList .profileContainer .profileContent .text a{

    padding-left:1%;
    letter-spacing: -1;

  }

  .boardList .profileContainer .profileContent .text a:visited{
    color:#eaeaea;
  }

  .boardList .container{

    width: 100%;
    margin:0 auto;
    height: calc(100% / 2);

  }

  .boardList .listContainer{
    
  }

  .boardList .container .tdTitle{

    padding:20px 0px;
    font-size: 1vw;
    letter-spacing: -1;
    color:#2d2e83;
  }

  .boardList .container ul{

    width: 100%;
    display: flex;
    align-content: center;

  }
  .boardList .container ul.btnBoxs{ 
    justify-content: flex-end;
    padding:10px 0px;
  }

  .boardList .container ul.btnBoxs li button{
    padding:10px 5px;
    cursor: pointer;
    opacity: 0.5;
    filter: grayscale(100);
    -webkit-filter: grayscale(100);
    -moz-filter: grayscale(100);
  }

  .boardList .container ul.btnBoxs li button.active{
    opacity: 1;
    filter: grayscale(0);
    -webkit-filter: grayscale(0);
    -moz-filter: grayscale(0);
  }
  .boardList .container ul.btnBoxs li button img{
    width: 2.5vw;
  }

  .boardList .container ul.btnBoxs li button:hover{
    opacity: 1;
  }

  .boardList .container ul.lists{
    flex-wrap:wrap;
    justify-content: space-between;
    gap:20px;
  }

  .boardList .container ul.lists li{

    width:calc(100% / 3 - 20px);
    height: 200px;
  }

  .boardList .container ul.secondList li{

     width: 100%;
  }

  .boardList .container ul.lists li a{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: 800ms;
    background-color: #000;

  
  }

  .boardList .container ul.lists li .alburm{
    position: relative;
  }

  .boardList .container ul.lists li a span{
    color:#f4f4f4;
    font-size: 1vw;
    position: absolute;

  }

  .boardList .container ul.secondList li a{

     border:solid 1px #bbb;
     background-color: #f4f4f4;
     display: flex;
     align-content: center;
     justify-content: space-between;


  }

  .boardList .container ul.secondList li a h3{

    padding:3%;
    width:calc(100% / 2 - 6%);
    font-weight: normal;
    color:#ccc;
    font-size: 1vw;
    line-height: 1.5;
    word-break: keep-all;
    
  
  }

  .boardList .container ul.secondList li a h3 p{

    font-size: 1.3vw;
    color:#000;
    font-weight: 600;
    padding-bottom:1.5%;
    word-break: keep-all;
    
  }

  .boardList .container ul.beforeList li a{
    position: relative;
  }

  .boardList .container ul.beforeList li a::before{
    position: absolute;
    left:calc(100% / 2.4);
    top:calc(100% / 2);
    content: "미리보기";
    width: 100%;
    height: 100%;
    z-index:99;
    font-size: 1vw;
    color:#eaeaea;
  }

  .boardList .container ul.lists li a img{
    object-fit: fill;
    width: 100%;
    height:100%;
    transform: scale(1.1);
    opacity: 0.5;
  }

  .boardList .container ul.secondList li a img{

    width:calc(100% / 2.3);
    height:100%;
    opacity: 0.8;
  }
  .boardList .container ul.lists li a:hover > img{
    opacity: 1;
    transform: scale(1.2);
    transition: 800ms;
  }

  .boardList .container ul.secondList li a:hover > img{
    transform: scale(1.1);
    transition: 800ms;
  }
</style>