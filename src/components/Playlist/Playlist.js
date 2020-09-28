import React from "react";
import "./Playlist.css";
import {TrackList} from "../TrackList/TrackList";


export class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleOnSave = this.handleOnSave.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  handleOnSave(event) {
    this.props.onSave();
  }

  render() {
    const defaultValue = "New Playlist";
    return(
      <div className="Playlist">
        <input defaultValue={defaultValue} onChange={this.handleNameChange}/>
        <TrackList 
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove} 
          isRemoval={true} 
        />
        <button className="Playlist-save" onClick={this.handleOnSave}>SAVE TO SPOTIFY</button>
      </div>
    )
  }
}





