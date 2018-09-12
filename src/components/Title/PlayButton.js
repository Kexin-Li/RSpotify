import React from 'react';
import { connect } from 'react-redux';

const PlayButton = (props) => {
  const renderBtn = () => {
    if (props.songPaused) {
      return 'PLAY';
    } else {
      return 'PAUSE';
    }
  };

  return (
    <button>
      { renderBtn() }
    </button>
  );
};

function mapStateToProps(state) {
  return {
    songPaused: state.songsReducer.songPaused
  };
}

export default connect(mapStateToProps)(PlayButton);
