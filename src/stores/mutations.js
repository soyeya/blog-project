const mutations = {
    setPathname(state, path){
        state.pathName = path
    },
    SET_ID(state, id){
        state.lastId = id
    },
    SET_CALLING_BOARD(state, toggle){
        state.isCalled = toggle
    },
    LOGIN (state, token) {
        if (!token) return 
        state.token = token
      },
    LOGOUT (state) {
        state.token = false
    },
    SET_IS_SHOW_BOARD_SETTINGS (state, toggle) {
        state.isShowBoardSettings = toggle
    },
    SET_IS_ADD_BOARD (state, toggle) {
        state.isAddBoard = toggle
      },
    SETUP_LIST(state, data){
      state.nowList.push(data);  // data를 목록에 추가
    }
}

export default mutations