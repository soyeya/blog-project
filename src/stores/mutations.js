const mutations = {
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
}

export default mutations