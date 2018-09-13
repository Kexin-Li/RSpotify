import React from 'react';
import { connect } from 'react-redux';

const Artwork = (props) => {
  const renderArtWork = () => {
    const songDetail = props.songDetail;
    const songPlaying = props.songPlaying;
    return (
      songPlaying ? 
      <img 
        alt={songDetail.albumName} 
        src={songDetail.albumImg} 
        width="180" height="180" />
      : ''
    );
  };

  return (
    <div className="artwork">
      { renderArtWork() }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    songPaused: state.songsReducer.songPaused,
    songPlaying: state.songsReducer.songPlaying,
    songDetail: state.songsReducer.songDetail
  }
}

export default connect(mapStateToProps)(Artwork);
