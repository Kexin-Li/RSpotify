import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSongObj } from '../Util';

class SongControl extends Component {
  state = {
    timeElapsed: this.props.timeElapsed
  }

  getSongIndex = () => {
    const { songs, songDetail } = this.props;

    if (songDetail === undefined) {
      return;
    }
    const currentIndex = songs.map((song, index) => {
      if (song.track.preview_url === songDetail.preview_url) {
        return index;
      }
    }).filter(item => {
      return item !== undefined;
    })[0];

    return currentIndex;
  }

  prevSong = () => {
    const { songs, audioControl } = this.props;
    let currentIndex = this.getSongIndex();

    const lastSong = createSongObj(songs[songs.length - 1]);
    const prevSong = createSongObj(songs[currentIndex - 1]);
    currentIndex === 0 ? audioControl(lastSong) : audioControl(prevSong);
  }

  playHandler = () => {
    !this.props.songPaused ? this.props.pauseSong() : this.props.resumeSong();
  }

  nextSong = () => {
    const { songs, audioControl } = this.props;
    let currentIndex = this.getSongIndex();

    const firstSong = createSongObj(songs[0]);
    const nextSong = createSongObj(songs[currentIndex + 1]);
    currentIndex === songs.length - 1 ? audioControl(firstSong) : audioControl(nextSong);
  }

  render() {
    const playClass = this.props.songPaused ? 'fa fa-play-circle-o play-btn' : 'fa fa-pause-circle-o pause-btn';

    return (
      <div className="song-control">
        <span 
          className="prev-btn"
          onClick={ this.prevSong }
        >
          <i className="fa fa-step-backward reverse" aria-hidden="true" />
        </span>
        <span
          className="play-btn"
          onClick={ this.playHandler }
        >
          <i className={ "fa play-btn" + playClass } ria-hidden="true" />
        </span>
        <span 
          className="next-btn"
          onClick={ this.nextSong }
        >
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
