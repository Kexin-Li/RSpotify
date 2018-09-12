import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { playSong, pauseSong } from '../../actions/songsAction';

class SongList extends Component {
  static audio;

  formatTime(duration_ms) {
    const minutes = Math.floor(duration_ms / 60000);
    const seconds = ((duration_ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  audioHandler(songObj) {
    if (this.props.songPaused) {
      // send a play action
      this.props.playSong(songObj);
      this.audio = new Audio(songObj.preview_url);
      this.audio.play();
    } else {
      // send a pause action
      this.props.pauseSong();
      this.audio.pause();
    }
  }

  render() {
    const songs = this.props.songs;

    if (songs) {
      return songs.map(song => {
        const songObj = {
          id: song.track.id,
          name: song.track.name,
          album: song.track.album.name,
          artist: song.track.artists[0].name,
          date: moment(song.added_at).format('YYYY-MM-DD'),
          length: this.formatTime(song.track.duration_ms),
          preview_url: song.track.preview_url
        };

        return (
          <li key={ songObj.id }>
            <span 
              className="song-play"
              onClick={ (event) => this.audioHandler(songObj) }
            >
              <i className="fa fa-play-circle-o play-btn" aria-hidden="true" />
            </span>
            <span className="add-song">
              <i className="fa fa-plus add-song" aria-hidden="true" />
            </span>
            <span className="song-name">{ songObj.name }</span>
            <span className="song-artist">{ songObj.artist }</span>
            <span className="song-album">{ songObj.album }</span>
            <span className="song-date">{ songObj.date }</span>
            <span className="song-length">{ songObj.length }</span>
          </li>
        );
      })
    } else {
      return '';
    }
  }
}

function mapStateToProps(state) {
  return {
    songs: state.songsReducer.songs,
    songPlaying: state.songsReducer.playSong,
    songPaused: state.songsReducer.songPaused,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    playSong,
    pauseSong
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
