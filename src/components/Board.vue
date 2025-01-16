<template>
    <div class="boardList">
         <div class="profileContainer">
           <h3 class="titles">Hello, We Are Look-Diary</h3>
           <div class="profileContent" href="" v-if="listDisplay">
            <div class="imgBoxs">
              <img src="../assets/media/profile.svg" alt="profile">
            </div>
            <div class="text">
               <span>test123</span>
            </div>
          </div>
          <a class="profileContent" href="" v-else>
            <div class="imgBoxs inverted">
              <img src="../assets/media/login.svg" alt="profile">
            </div>
            <div class="text">
               <span>로그인을 해주세요</span>
            </div>
          </a>
         </div>
         <div class="container" v-if="listDisplay">
            <ul class="btnBoxs">
                <li><button type="button"><img src="../assets/media/album.svg" alt="list"></button></li>
                <li><button type="button"><img src="../assets/media/list.svg" alt="list"></button></li>
            </ul>
            <ul class="lists">
                <li><a href="" @click.prevent></a></li>
                <li><a href="" @click.prevent></a></li>
                <li><a href="" @click.prevent></a></li>
                <li><a href="" @click.prevent></a></li>
                <li><a href="" @click.prevent></a></li>
                <li><a href="" @click.prevent></a></li>
                <li><a href="" @click.prevent></a></li>
                <li><a href="" @click.prevent></a></li>
                <li><a href="" @click.prevent></a></li>

            </ul>
       </div>
       <div class="container" v-else>
            <h5 class="tdTitle">오늘의 Look-Diary 기록</h5>
            <ul class="lists beforeList">
                <li><a href="" @click.prevent><img src="../assets/media/board/beforeImg01.png" alt="img1"/></a></li>
                <li><a href="" @click.prevent><img src="../assets/media/board/beforeImg02.png" alt="img2"/></a></li>
                <li><a href="" @click.prevent><img src="../assets/media/board/beforeImg03.png" alt="img3"/></a></li>
                <li><a href="" @click.prevent><img src="../assets/media/board/beforeImg04.png" alt="img4"/></a></li>
                <li><a href="" @click.prevent><img src="../assets/media/board/beforeImg05.png" alt="img5"/></a></li>
                <li><a href="" @click.prevent><img src="../assets/media/board/beforeImg06.png" alt="img6"/></a></li>
                <li><a href="" @click.prevent><img src="../assets/media/board/beforeImg07.png" alt="img7"/></a></li>
            </ul>
       </div>

    </div>
</template>
<script>
 export default{

  data(){
    return{
       listDisplay : false
    }
  }

 }
</script>
<style>
  .boardList{
    padding:70px 5% 100px;
    width: calc(100vw - 10%);
    margin:0 auto;
    background-color: #2d2e83;
  }

  .boardList .profileContainer{
    
    padding:5% 0 0;
    width:calc(100%);
    height:200px;
    margin:0 auto;

  }
  .boardList .profileContainer .titles{
    padding-bottom:1%;
    font-size: 2vw;
    letter-spacing: -1.5px;
    color:#eaeaea;
    
  }

  .boardList .profileContainer .profileContent {
    
    padding:1rem 0;
    display: flex;
    align-content: center;
  }

  .boardList .profileContainer .profileContent .imgBoxs{

     display: flex;
     align-content: center;
     padding:10px;
     width:3vw;

  }

  .boardList .profileContainer .profileContent .imgBoxs img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .boardList .profileContainer .profileContent .inverted img{
    filter:invert(100)
  }
  .boardList .profileContainer .profileContent .text{

    width:30%;
    display: flex;
    align-items: center;

  }
  .boardList .profileContainer .profileContent .text span{
    font-size: 1.5vw;
    color:#000;
    font-family: "Pretendard";
    font-weight: 400;
    padding-left:3%;
    letter-spacing: -1;
    color:#eaeaea;
  }

  .boardList .container{

    width: 100%;
    margin:0 auto;
    height: calc(100% / 2);

  }

  .boardList .container .tdTitle{

    padding:20px 0px;
    font-size: 1.5vw;
    letter-spacing: -1;
    color:#eaeaea;
  }

  .boardList .container ul{

    width: 100%;
    display: flex;
    align-content: center;

  }

  .boardList .container ul.btnBoxs{ 
    justify-content: flex-end;
    padding:10px 7% 10px 0;
  }

  .boardList .container ul.btnBoxs li button{
    padding:10px 5px;
    cursor: pointer;
  }

  .boardList .container ul.btnBoxs li button img{
    width: 2.5vw;
    opacity: 0.5;
  }

  .boardList .container ul.btnBoxs li button:hover > img{
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

  .boardList .container ul.lists li a{
    display: block;
    border-radius: 18px;
    /* border:1px solid #333; */
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: 800ms;
    background-color: #000;
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
    color:#eaeaea;
  }

  .boardList .container ul.lists li a img{
    object-fit: fill;
    width: 100%;
    height:100%;
    transform: scale(1.1);
    opacity: 0.5;
  }

  .boardList .container ul.lists li a:hover > img{
    opacity: 1;
    transform: scale(1.2);
    transition: 800ms;
  }
</style>