import React from "react";
import ReactDOM from "react-dom";
import {SearchBar} from "../SearchBar/SearchBar";
import {Playlist} from "../Playlist/Playlist";
import {SearchResults} from "../SearchResults/SearchResults";
import "./App.css";

trackObject = { //Temporary hardcoded track for App state
  name: "song",
  artist: "band",
  album: "album",
  id: "",
};

playlistObject = { //Temporary hardcoded track for playlist
  playlistName: "songs",
  pllistTracks: ["song1", "song2", "song3"],
}

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [trackObject],
      playlist: [playlistObject],
    };
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    if (this.state.playlist.find(savedTrack => savedTrack.id === track.id)) {
      const newList = this.state.playlist + [track];
      this.setState({playlist: newList});
    }
  }

  removeTrack(track) {
    const newList = this.state.playlist.filter(savedTrack => savedTrack.id != track.id);
    this.setState({playlist: newList});
  }

  render() {
    return(
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlist={this.state.playlist}/>
          </div>
        </div>
      </div>
    );
  }
}

