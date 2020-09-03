export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //Remove after finishing dev
    token: 'BQDhIXOl1AA9281HMuUuvZfRBWA1Bqx_niBBdfmAV9vNOpAHLh-LRPgxkVBktRGTRFrucvYnQ2Ki7rY5XKg2uXaybgo_-oDSpUu5jCcp40VKjbSa1MXK5OlC6gX8lKWjzr2cI-aP8WM-TT6a1onXLnp6bTQl1g8F70XjnEtqkWuv2dFk',
}
const reducer = (state, action) => {
    console.log(action); //debugging tool

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user, //payload
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        default:
            return state;
    }
}
export default reducer;