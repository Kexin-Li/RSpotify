import React, { Component } from 'react';
import { connect } from 'react-redux';
import format from 'date-fns/format';

class SongList extends Component {
  formatTime(duration_ms) {
    const minutes = Math.floor(duration_ms / 60000);
    const seconds = ((duration_ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  playHander = (songObj) => {
    (songObj.id === this.props.songId) && this.props.songPlaying && this.props.songPaused
    ? this.props.resumeSong()
    : (songObj.id === this.props.songId) && this.props.songPlaying && !this.props.songPaused
    ? this.props.pauseSong()
    : this.props.audioControl(songObj)
  }

  render() {
    const songs = this.props.songs;

    if (songs) {
      return songs.map(song => {
        const songObj = {
          id: song.track.id,
          name: song.track.name,
          albumName: song.track.album.name,
          albumImg: song.track.album.images[0].url,
          artist: song.track.artists[0].name,
          date: format(song.added_at, 'YYYY-MM-DD'),
          length: this.formatTime(song.track.duration_ms),
          preview_url: song.track.preview_url
        };

        return (
          <li key={ songObj.id }>
            <span 
              className="play-song"
              onClick={ () => this.playHander(songObj) }
            >
              <i className="fa fa-play-circle-o play-btn" aria-hidden="true" />
            </span>
            <span className="add-song">
              <i className="fa fa-plus add-song" aria-hidden="true" />
            </span>
            <span className="song-name">{ songObj.name }</span>
            <span className="song-artist">{ songObj.artist }</span>
            <span className="song-album">{ songObj.albumName }</span>
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
    songPlaying: state.songsReducer.songPlaying,
    songPaused: state.songsReducer.songPaused,
    songId: state.songsReducer.songId
  }
}

export default connect(mapStateToProps)(SongList);
