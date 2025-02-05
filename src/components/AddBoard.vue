<template>
 <Modal>
    <template #top>
       <h2>
         Create new board
         <button type="button" class="modal-default-button" 
         @click.prevent="SET_IS_ADD_BOARD(false)">&times;</button>
       </h2>
    </template>
    <template #body-content>
      <form id="add-board-form" @submit.prevent="addBoardData">
        <label for="addBoardTitle">title</label>
        <input id="addBoardTitle" class="form-control" type="text" v-model="input">
        <label for="addBoardContent">content</label>
        <textarea id="addBoardContent" class="form-control" v-model="contents"></textarea>
      </form>
    </template>
    <template #bottom>
      <button class="btn" :class="{'btn-success': valid1 && valid2}"  type="submit" 
        form="add-board-form" :disabled="!valid1 && valid2">
        Create Board</button>
    </template>
    </Modal>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import Modal from './Modal.vue';
import axios from 'axios';

export default{
    components : { Modal },
    data(){
        return{
            input : '',
            contents : '',
            valid1 : false,
            valid2 : false,
            imgs : 'beforeImg7'
        }
    },
    watch : {
        input(v){
            this.valid1 = v.trim().length > 0
        },
        contents(v){
            this.valid2 = v.trim().length > 0
        }
    },
    computed : {
        ...mapState({
            isAddBoard : 'isAddBoard',
            lastId : 'lastId'
        })
    },
    methods : {
        ...mapActions([
            'ADD_BORAD_DATA',
            'SET_LIST',
        ]),
        ...mapMutations([
            'SET_IS_ADD_BOARD',
            'SET_CALLING_BOARD',
            'SET_ID'
        ]),


        async addBoardData(){
            const formArray = [this.lastId+1, this.input, this.contents, this.imgs]//전달할 배열
            if(this.valid1 && this.valid2){
            try{
            const res = await this.ADD_BORAD_DATA(formArray)
            }catch(err){
                return console.log('addBoard_err')
            }
            this.SET_IS_ADD_BOARD(false);
            this.SET_CALLING_BOARD(false);
            this.SET_ID(this.lastId+1); //마지막 id값 업데이트
            }
        
        }
    }

}
</script>
<style>
</style>