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
      <button class="btn" :class="{'btn-success': valid}"  type="submit" 
        form="add-board-form" :disabled="!valid">
        Create Board</button>
    </template>
    </Modal>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import Modal from './Modal.vue';
import axios from 'axios';

export default{
    components : { Modal },
    data(){
        return{
            input : '',
            contents : '',
            valid : false,
            imgs : 'beforeImg7.png'
        }
    },
    watch : {
        input(v){
            this.valid = v.trim().length > 0
        }
    },
    computed : {
        ...mapState({
            isAddBoard : 'isAddBoard',
            lastId : 'lastId'
        })
    },
    methods : {
        ...mapMutations([
            'SET_IS_ADD_BOARD',
        ]),
        async addBoardData(){
            const formArray = [this.lastId+1, this.input, this.contents, this.imgs]
            try{
            const res = await axios.post('http://localhost:8888/api/addList', formArray)
            const data = res.data;
            console.log(data)
            }catch(err){
                return console.log('addBoard_err')
            }
        }
    }

}
</script>
<style>
</style>