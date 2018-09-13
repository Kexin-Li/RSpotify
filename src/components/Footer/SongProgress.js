import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseSongTime } from '../../actions/songsAction';
import moment from 'moment';

class SongProgress extends Component {
  state = {
    timeElapsed: this.props.timeElapsed
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.songPlaying) {
      clearInterval(this.state.intervalId);
    }

    if (nextProps.songPlaying && nextProps.timeElapsed === 0) {
      clearInterval(this.state.intervalId);
      this.calculateTime();
    }

    this.setState({
      timeElapsed: nextProps.timeElapsed
    });
  }

  calculateTime = () => {
    const intervalId = setInterval(() => {
      if (this.state.timeElapsed === 30) {
        clearInterval(this.state.intervalId);
        this.props.stopSong();
      } else if (!this.props.songPaused) {
        this.props.increaseSongTime(this.state.timeElapsed + 1);
      }
    }, 1000);

    this.setState({
      intervalId: intervalId
    });
  }

  render() {
    return (
      <div className="song-progress-container">
        <p className="time-start">
          { moment().minutes(0).second(this.state.timeElapsed).format('m:ss') }
        </p>
        <div className="song-progress">
          <div 
            style={{ width: this.state.timeElapsed * 16.5 }} 
            className="song-expired">
          </div>
        </div>
        <p className="time-end">
          { moment().minutes(0).second(30 - this.state.timeElapsed).format('m:ss') }
        </p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    timeElapsed: state.songsReducer.timeElapsed,
    songPlaying: state.songsReducer.songPlaying,
    songPaused: state.songsReducer.songPaused
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    increaseSongTime
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SongProgress);
