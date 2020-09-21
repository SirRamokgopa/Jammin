import React from "react";
import "./TrackList.css";


export class TrackList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const tracks = this.props.SearchResults.map((track, key) => {
      return ({
        name: track.name,
        artist: track.artist,
        album: track.album,
        id: track.key,
      });
    })
    
    return(
        <div className="TrackList">
            <Track track={tracks} />
        </div>
    );
  }
}





