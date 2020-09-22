const clientID =  "e756b74ceb7841e1bf894811ce3d9d74";
const redirectURI = "http://localhost:3000/";

let aToken;

const Spotify = {
    getAccessToken() {
        if (aToken) {
            return aToken;
        } 
        // Check for access token match
        const aTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expInMatch = window.location.href.match(/expires_in=([^&]*)/);
        console.log(` accsess token is ${aTokenMatch}`);
        console.log(` expires in ${expInMatch}`);

        if (aTokenMatch && expInMatch) {
            aToken = aTokenMatch[1];
            const expIn = Number(expInMatch[1]);
            // THis clears parameters so we can get new access token upon expiry
            window.setTimeout(() => aToken = "", expIn*1000);
            window.history.pushState("Access Token", null, "/");
            return aToken;
        } else {
            const acccessURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}` 
            window.location = acccessURL;
        }
    },
    
    search(term) {
        const aToken = this.getAccessToken();
        return fetch(
            `https://api.spotify.com/v1/search?type=track&q=${term}`, 
            {
                headers: {Authorization: `Bearer ${aToken}`}
            }
        )
        .then(response => response.json())
        .then((jsonResponse) => {
            console.log(jsonResponse);
                if (jsonResponse) {
                    console.log(jsonResponse);
                    return jsonResponse.tracks.items.map(track => {
                        return {
                            id: track.id,
                            name: track.name,
                            artist: track.artists[0].name,
                            album: track.album.name,
                            uri: track.uri,
                        };
                    });
                } else {
                    console.log("nada came back")
                    return [];
                }
            });
    }
}; 

export default Spotify;