import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { playSong, pauseSong, resumeSong, stopSong } from '../../actions/songsAction';

class SongList extends Component {
  static audio;

  formatTime(duration_ms) {
    const minutes = Math.floor(duration_ms / 60000);
    const seconds = ((duration_ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  audioHandler(songObj) {
    if (songObj.id === this.props.songId) {
      // 同一首歌
      if (this.props.songPlaying && this.props.songPaused) {
        // 已暂停
        this.resumeSong();
      } else if (this.props.songPlaying && !this.props.songPaused) {
        // 已播放
        this.pauseSong();
      }
    } else {
      this.audioControl(songObj);
    }
  }

  audioControl(songObj) {
    const { playSong, stopSong } = this.props;

    if(this.audio === undefined){
      playSong(songObj);
      this.audio = new Audio(songObj.preview_url);
      this.audio.play();
    } else {
      stopSong();
      this.audio.pause();
      playSong(songObj);
      this.audio = new Audio(songObj.preview_url);
      this.audio.play();
    }
  }

  pauseSong() {
	  if(this.audio) {
	    this.props.pauseSong();
	    this.audio.pause();
	  }
	}

	resumeSong() {
	  if(this.audio) {
	    this.props.resumeSong();
	    this.audio.play();
	  }
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    playSong,
    pauseSong,
    stopSong,
    resumeSong
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
