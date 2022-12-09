
export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientID = "061f657860f541b3aab291970e14644f";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",];

// const scope = 'user-read-currently-playing user-read-recently-played user-read-playback-state user-top-read user-modify-playback-state'

// export const loginUrl = `${authEndPoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token&show_dialog=true`;

export const loginUrl = `${authEndPoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = ()=>{
    // return window.location.hash.substring(1).split('&')[0].split('=')[1]
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial;
    },{});
}

//==========================================================



