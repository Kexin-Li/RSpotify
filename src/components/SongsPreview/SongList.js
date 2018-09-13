import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSongObj } from '../Util';

class SongList extends Component {
  playHandler = (songObj) => {
    (songObj.id === this.props.songId) && this.props.songPlaying && this.props.songPaused
    ? this.props.resumeSong()
    : (songObj.id === this.props.songId) && this.props.songPlaying && !this.props.songPaused
    ? this.props.pauseSong()
    : this.props.audioControl(songObj)
  }

  render() {
    const songs = this.props.songs;
    if (songs) {
      return songs.map((song, index) => {
        const songObj = createSongObj(song);
        const playClass = songObj.id === this.props.songId && !this.props.songPaused 
          ? "fa-pause-circle-o" : "fa-play-circle-o";

        return (
          <li key={ index } className={songObj.id === this.props.songId ? 'active songlist' : 'songlist'}>
            <span 
              className="play-song"
              onClick={ () => this.playHandler(songObj) }
            >
              <i className={ `fa ${playClass} play-btn` } aria-hidden="true" />
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

const mapStateToProps = (state) => {
  return {
    songs: state.songsReducer.songs,
    songPlaying: state.songsReducer.songPlaying,
    songPaused: state.songsReducer.songPaused,
    songId: state.songsReducer.songId
  }
}

export default connect(mapStateToProps)(SongList);
