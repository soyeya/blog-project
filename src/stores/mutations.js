const mutations = {
    setPathname(state, path){
        state.pathName = path
    },
    setId(state, id){
        state.lastId = id
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
        console.log(state.isShowBoardSettings)
    },
    SET_IS_ADD_BOARD (state, toggle) {
        state.isAddBoard = toggle
      },
}

export default mutations