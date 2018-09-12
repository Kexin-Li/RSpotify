import React from 'react';
import SongList from './SongList';

import './SongsPreview.css';

const SongsPreview = (props) => {
  return (
    <ul className="songs-preview">
      <li className="head">
        <span className="song-play"></span>
        <span className="add-song"></span>
        <span className="song-name head-name">TITLE</span>
        <span className="song-artist">ARTIST</span>
        <span className="song-album">ALBUM</span>
        <span className="song-date">DATE</span>
        <span className="song-length">LENGTH</span>
      </li>
      <SongList />
    </ul>
  );
};

export default SongsPreview;
 