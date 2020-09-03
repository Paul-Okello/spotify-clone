export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
}
const reducer = (state, action) => {
    console.log("Action-> ",action); //debugging tool

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user:action.user, //payload
            }
            default:
                return state;
    }
}
export default reducer;