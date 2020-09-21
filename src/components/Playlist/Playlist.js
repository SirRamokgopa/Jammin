import React from "react";
import "./Playlist.css";
import {TrackList} from "../TrackList/TrackList";


export class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  render() {
    const defaultValue = "New Playlist";
    return(
      <div className="Playlist">
        <input value={defaultValue} onChange={this.handleNameChange}/>
        {/*<TrackList 
          onRemove={this.props.onRemove} 
          isRemoval={true} 
        />*/}
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    )
  }
}





