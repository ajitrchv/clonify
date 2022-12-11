

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: null,
    //this should be removed after dvlpmnt
    // token: null,
    // token: "BQCnZFwtFaq1NzV_peKh5id-imTZtopyYbiqeqdQXPAXV9cVhDXCXQd9vNx1QO07grzztNllbjGkt2Viv2IalRnDYlRiiDoLJYgaT1NZHgBR0f-skT04Tn7p8RrKCOvmkEbjfmtPQ1j57Evvt2zRt8U6D0ecSf7DExTKuCZeo0o_XYIrLSGjRpeC7F_ATqGA_HNy8Pppn3SWShEScueISDXS"
}

const reducer = (state, action) => {
    console.log("This can define playlists",action.playlists);
    switch(action.type){
        case "SET_USER":return {
            ...state,
            user: action.user,
        };
        case "SET_TOKEN":return{
            ...state,
            token: action.token,
        }
        case "SET_PLAYLISTS": return{
            ...state,
            playlists: action.playlists,
        }
        case "SET_DISCOVER_WEEKLY": return{
            ...state,
            discover_weekly: action.discover_weekly,
        }
        default: 
            return state;
    }
};
export default reducer;