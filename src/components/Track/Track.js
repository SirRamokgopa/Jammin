import React from "react";
import "./Track.css";


export class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  renderAction() {
    return(
      <button className="Track-action" onClick={this.addTrack}>{isRemoval ? "-" : "+"}</button>
    )
  }

  render() {
    const track = this.props.track;
    return(
      <div id={track.id} className="Track">
        <div className="Track-information">
          <h3>{track.name}</h3>
          <p>{track.artist} | {track.album}</p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}





