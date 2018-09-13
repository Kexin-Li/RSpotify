import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SideMenu from './SideMenu/SideMenu';
import Header from './Header/Header';
import Title from './Title/Title';
import Preview from './Preview/Preview';
import Footer from './Footer/Footer';
import { playSong, stopSong, pauseSong, resumeSong } from '../actions/songsAction';

import './Spotify.css';

class Spotify extends Component {
  static audio;

  stopSong = () => {
    if (this.audio) {
      this.props.stopSong();
      this.audio.pause();
    }
  }

  pauseSong = () => {
    if (this.audio) {
      this.props.pauseSong();
      this.audio.pause();
    }
  }

  resumeSong = () => {
    if (this.audio) {
      this.props.resumeSong();
      this.audio.play();
    }
  }

  audioControl = (songObj) => {
    const { playSong, stopSong } = this.props;
    if (this.audio === undefined) {
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
  };

  volumeControl = (volume) => {
    if (this.audio !== undefined) {
      this.audio.volume = volume / 100;
    }
  };

  render() {
    return (
      <div className="app-container">
        <SideMenu />
        <div className="mainview">
          <Header />
          <Title
            pauseSong={ this.pauseSong }
            resumeSong={ this.resumeSong }
          />
          <Preview
            pauseSong={ this.pauseSong }
            resumeSong={ this.resumeSong }
            audioControl={ this.audioControl }
          />
        </div>
        <Footer
          stopSong={ this.stopSong }
          pauseSong={ this.pauseSong }
          resumeSong={ this.resumeSong }
          audioControl={ this.audioControl }
          volumeControl={ this.volumeControl }
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    playSong,
    stopSong,
    pauseSong,
    resumeSong
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Spotify);
