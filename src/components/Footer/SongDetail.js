import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
  return (
    <div className="song-detail">
      <p className="song-name">
        { props.songDetail ? props.songDetail.name : '' }
      </p>
      <p className="song-artist">
        { props.songDetail ? props.songDetail.artist : '' }
      </p>
    </div>
  )
};

function mapStateToProps(state) {
  return {
    songDetail: state.songsReducer.songDetail
  }
}

export default connect(mapStateToProps)(SongDetail);
