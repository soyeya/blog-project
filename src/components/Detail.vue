<template>
    <div class="detailsWrap">
        <Navbar />
        <div class="title">
             <h3>{{title}}</h3>
             <div class="imgBoxs">
                <img src="../assets/media/profile.png" alt="profile">
            </div>
            <p>test123</p>
        </div>
        <div class="content">
            <textarea readonly :placeholder="value"></textarea>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import axios from 'axios';
import Navbar from './Navbar.vue';

export default{
  components: { Navbar },
     data(){
        return{
           lists : [],
           title : '',
           value : '',
           currentUrl: window.location.href //현재주소가져오기
        }
     },
     computed : {
        ...mapState({
            token : 'token'
     })
     },
     created(){
     this.dataLoading()
     },
     methods: {
        async calllData(id){
   
              const res = await axios.get('http://localhost:8888/api/list');
              const data = res.data;
              console.log(data)
              data.forEach((v) => {
                if(v.id == id){
                    return this.lists.push(v),
                    this.value = this.lists[0].content,
                    this.title = this.lists[0].title,
                    console.log(this.lists)
                }
              })
            
        },
        dataLoading(){
            if(this.token){
              const thisId = this.currentUrl.split('/').pop();
              this.calllData(thisId)
            }
        }
     }
}
  

</script>
<style>
.detailsWrap{

    width: 100vw;
    padding-top:100px;
    margin:0 auto;
}

.detailsWrap .title{

    width: 100vw;
    padding:10px 0px;
    border-bottom:1px solid #bbb;
    margin:0 auto;
}

.detailsWrap .title h3{

    font-size: 2vw;
    text-align: center;
    font-weight: 600;
    letter-spacing: -1px;
    padding-bottom:2%;
    word-break: keep-all;

}

.detailsWrap .title .imgBoxs{
    width: 50px;
    height:50px;
    margin:0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
}
.detailsWrap .title .imgBoxs img{

    width: 100%;
    height:100%;
    object-fit: cover;
}

.detailsWrap .title p{

    font-size: 1vw;
    padding-top:8px;
    color:#ccc;
    margin:0 auto;
    text-align: center;
}

.detailsWrap .content{

    width: 100vw;
    padding:30px 0px;
    margin:0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.detailsWrap .content textarea{

   resize: none;
   width:calc(100% / 2);
   height:calc(100vh - 340px);
   padding:10px;
   letter-spacing: -1px;
   font-size: 1.5vw;
   line-height: 1.5;
   word-break: keep-all;
   border:none;
   background:transparent;
}

.detailsWrap .content textarea:focus{
    outline: none;
}

</style>