<template>
<!--sideMenuBar-->
<div class="sideMenuWrap">
  <div class="board-menu" v-if="this.token">
    <div class="board-menu-header">
      <h3 class="header-title" :style="`color : ${this.bodyColor}`">Board Design</h3>
      <a class="header-close-btn" href="" @click.prevent="onClose">&times;</a>
    </div>
    <ul class="menu-list">
      <li v-if="this.pathName != '/'"><a href="" @click.prevent="deleteBoard">Delete Board</a></li>
      <li>Change Colors</li>
      <div class="color-picker">
        <a href="" data-value="rgb(0, 121, 191)" @click.prevent="changeColorEvet"></a>
        <a href="" data-value="rgb(210, 144, 52)" @click.prevent="changeColorEvet"></a>
        <a href="" data-value="rgb(81, 152, 57)" @click.prevent="changeColorEvet"></a>
        <a href="" data-value="rgb(176, 70, 50)" @click.prevent="changeColorEvet"></a>
        <a href="" data-value="rgb(45, 46, 131)" @click.prevent="changeColorEvet"></a>
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
</template>
<script>

import { mapState, mapMutations, mapActions } from 'vuex';

 export default{
    data(){
        return{ 
        }
    },
    computed : {
       ...mapState({
        token : 'token',
        pathName : 'pathName',
        isShowBoardSettings : 'isShowBoardSettings',
        bodyColor : 'bodyColor'
       })
    },
    mounted() {
      if(this.token){ //로그인이 되었을 때 컬러목록 표시
        this.colorListSetup()
      }
    },
    methods : {
      ...mapActions([
        'DELETE_BOARD_DATA',
        'CALL_LIST'
      ]),
      ...mapMutations([
        'SET_IS_SHOW_BOARD_SETTINGS',
        'SET_COLOR',
        'SET_CALLING_BOARD',
        'DELETE_SETUP_LIST'
      ]),
      onClose() {
      this.SET_IS_SHOW_BOARD_SETTINGS(false),
      console.log('사이드메뉴닫기')
     },
      colorListSetup(){
        const colorList = document.querySelectorAll('.color-picker a');
        if(colorList){
            colorList.forEach(list => {
              list.style.backgroundColor = list.dataset.value
            })
        }
     },
     changeColorEvet(e){
       const bgColor = e.target.dataset.value;
       console.log(bgColor, 'click_bgColor');
       this.SET_COLOR(bgColor)
     },
     async deleteBoard(){
       const path = this.pathName;
       const thisId = path.split('/').pop();
       console.log(thisId)
       if(path){
         if (!confirm(`이 보드를 삭제하시겠습니까?`)) return 
         const deleteData = await this.DELETE_BOARD_DATA([thisId])//배열형태로 데이터 전달
         .then(_ => this.SET_IS_SHOW_BOARD_SETTINGS(false))
         .then(_ => this.$router.push('/'))
       }
     }
    }         
 }
</script>

<style>
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
  width: calc(48% - 3px);
  height: 100px;
  border-radius: 8px;
  margin:3px;
}
</style>