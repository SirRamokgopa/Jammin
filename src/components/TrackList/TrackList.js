import React from "react";
import "./TrackList.css";
import {Track} from "../Track/Track";


export class TrackList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const tracks = this.props.tracks.map((track, key) => {
      return (
        <Track 
          track={track} 
          onAdd={this.props.onAdd} 
          onRemove={this.props.onRemove}
        />)
    });
  
    return(
        <div className="TrackList">
            {tracks}
        </div>
    );
  }
}





