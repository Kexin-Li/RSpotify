import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongControl extends Component {
  render() {
    const playClass = this.props.songPaused ? 'fa fa-play-circle-o play-btn' : 'fa fa-pause-circle-o pause-btn';

    return (
      <div className="song-control">
        <span>
          <i className="fa fa-step-backward reverse" aria-hidden="true" />
        </span>
        <span className="play-btn">
          <i 
            className={ "fa play-btn" + playClass } 
            aria-hidden="true" />
        </span>
        <span>
          <i className="fa fa-step-forward forward" aria-hidden="true" />
        </span>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    songPlaying: state.songsReducer.songPlaying,
    songPaused: state.songsReducer.songPaused,
    timeElapsed: state.songsReducer.timeElapsed,
    songs: state.songsReducer.songs,
    songDetail: state.songsReducer.songDetail
  }
}

export default connect(mapStateToProps)(SongControl);
