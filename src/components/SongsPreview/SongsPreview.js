import React from 'react';
import { connect } from 'react-redux';

const SongsPreview = (props) => {
  const renderSongs = () => {
    const songs = props.songs;

    if (songs) {
      return songs.map(song => {
        return (
          <li key={song.track.id}>
            {song.track.name}
          </li>
        );
      });
    }
  };

  return (
    <ul className="songs-preview">
      { renderSongs() }
    </ul>
  );
};

function mapStateToProps(state) {
  return {
    songs: state.songsReducer.songs
  }
}

export default connect(mapStateToProps)(SongsPreview);
