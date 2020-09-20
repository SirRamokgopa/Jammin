import React from "react";
import ReactDOM from "react-dom";
import {SearchBar} from "../SearchBar/SearchBar";
import {Playlist} from "../Playlist/Playlist";
import {SearchResults} from "../SearchResults/SearchResults";
import "./App.css";


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

