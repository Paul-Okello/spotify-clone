// endpoint -> where to send user to login
export const authEndpoint = "https://accounts.spotify.com/authorize";

// redirects to this url after loging in
const redirectUri = "http://localhost:3000/"

const clientId = "24219f957586478082a4634229e92b22";

// capabilities of the app i.e spotify-clone
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];
export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {})
}
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;