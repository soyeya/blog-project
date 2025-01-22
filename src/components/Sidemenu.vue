<template>
  <div class="board-menu" v-if="showBoard">
    <div class="board-menu-header">
      <h3 class="header-title">Board Design</h3>
      <a class="header-close-btn" href="" @click.prevent="onClose">&times;</a>
    </div>
    <ul class="menu-list">
      <li><a href="" @click.prevent="onDeleteBoard">Delete Board</a></li>
      <li>Change Background</li>
      <div class="color-picker">
        <a href="" data-value="rgb(0, 121, 191)" @click.prevent></a>
        <a href="" data-value="rgb(210, 144, 52)" @click.prevent></a>
        <a href="" data-value="rgb(81, 152, 57)" @click.prevent></a>
        <a href="" data-value="rgb(176, 70, 50)" @click.prevent></a>
      </div>
    </ul>
  </div>
</template>
<script>

import { mapState, mapMutations } from 'vuex';

 export default{
    data(){
        return{ 
          showBoard : this.isShowBoardSettings,
        }
    },
    created(){
      this.showBoardState()
    },
    computed : {
       ...mapState({
        token : 'token',
        isShowBoardSettings : 'isShowBoardSettings'
       })
    },
    methods : {
      ...mapMutations([
        'SET_IS_SHOW_BOARD_SETTINGS'
      ]),
      showBoardState(){
        if(this.token){
          return this.SET_IS_SHOW_BOARD_SETTINGS(true),
          this.showBoard = true
        }
         return this.SET_IS_SHOW_BOARD_SETTINGS(false),
         this.showBoard = false
      },
      onClose() {
      this.SET_IS_SHOW_BOARD_SETTINGS(false),
      this.showBoard = this.isShowBoardSettings
      console.log('동작')

    },
    }
 }
</script>

<style>
.board-menu {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  background-color: #eaeaea;
  width: 300px;
  transition: all .5s;
  z-index:99999;
  border-right: solid 1px #bbb;
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