import React from 'react';
import { connect } from 'react-redux';

const PlayButton = (props) => {
  const renderBtn = () => {
    if (props.songPlaying && props.songPaused) {
      return 'PLAY';
    } else if (props.songPlaying && !props.songPaused) {
      return 'PAUSE';
    } else {
      return 'PLAY';
    }
  };

  const playHandler = () => {
    !props.songPaused ? props.pauseSong() : props.resumeSong();
  };

  return (
    <button onClick={ () => playHandler() }>
      { renderBtn() }
    </button>
  );
};

function mapStateToProps(state) {
  return {
    songPaused: state.songsReducer.songPaused,
    songPlaying: state.songsReducer.songPlaying
  };
}

export default connect(mapStateToProps)(PlayButton);
