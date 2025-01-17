const mutations = {
    SET_IS_SHOW_BOARD_SETTINGS (state, toggle) {
        state.isShowBoardSettings = toggle
        console.log(state.isShowBoardSettings)
    },
}

export default mutations