import React from "react";
import "./TrackList.css";
import {Track} from "../Track/Track";


export class TrackList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const tracks = this.props.tracks.map((track) => {
      return (
        <Track 
          track={track} 
          key={track.id}
          onAdd={this.props.onAdd} 
          onRemove={this.props.onRemove}
          isRemoval={this.props.isRemoval}
        />)
    });
  
    return(
        <div className="TrackList">
            {tracks}
        </div>
    );
  }
}





