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
                if (jsonResponse) {
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
    },

    savePlaylist(pName, trackURIs) {
        if (!pName || !trackURIs) {
            return;
        }
        const aToken = this.getAccessToken();
        const headers = {Authorization: `Bearer ${aToken}`};
        let userID;
        // Get user ID
        return fetch(`https://api.spotify.com/v1/me`, {headers: headers})
        .then(response => response.json())
        .then(jsonResponse => {
            userID = jsonResponse.id;
            // Create new Playlist
            return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`,
                {
                    headers: headers,
                    method: "POST",
                    body: JSON.stringify({name: pName}),
                }
            )
            .then(response => response.json())
            .then(jsonResponse => {
                const playlistID = jsonResponse.id;
                return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`,
                {
                    headers: headers,
                    method: "POST",
                    body: JSON.stringify({uris: trackURIs}),
                })
                .then(response => response.json())
                .then(jsonResponse => jsonResponse.snapshot_id);
            });
        });
            
        
    }
}; 

export default Spotify;