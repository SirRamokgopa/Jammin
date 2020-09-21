import React from "react";
import {SearchBar} from "../SearchBar/SearchBar";
import {Playlist} from "../Playlist/Playlist";
import {SearchResults} from "../SearchResults/SearchResults";
import "./App.css";

const trackObject = { //Temporary hardcoded track for App state
  name: "song",
  artist: "band",
  album: "album",
  id: "1",
};

const playlistObject = { //Temporary hardcoded track for playlist
  playlistName: "songs",
  playlistTracks: [trackObject, trackObject, trackObject],
}

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [trackObject, trackObject, trackObject, trackObject],
      playlist: playlistObject,
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    if (this.state.playlist.find(savedTrack => savedTrack.id === track.id)) {
      const newList = this.state.playlist + [track];
      this.setState({playlist: newList});
    }
  }

  removeTrack(track) {
    const newList = this.state.playlist.filter(savedTrack => savedTrack.id !== track.id);
    this.setState({playlist: newList});
  }

  updatePlaylistName(name) {
    const playlist = this.playlist;
    playlist.name = name;
    this.setState({playlist: playlist});
  }

  render() {
    return(
      <div>
        <h1>Quac<span className="highlight">King</span></h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults 
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist 
              playlist={this.state.playlist}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
            />
          </div>
        </div>
      </div>
    );
  }
}

