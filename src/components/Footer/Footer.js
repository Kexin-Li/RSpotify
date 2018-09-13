import React from 'react';
import SongDetail from './SongDetail';
import SongControler from './SongControler';
import SongProgress from './SongProgress';

import './Footer.css';

const Footer = (props) => {
  return (
    <footer className="footer">
      <SongDetail />
      <SongControler
        pauseSong={ props.pauseSong }
        resumeSong={ props.resumeSong }
        audioControl={ props.audioControl }
      />
      <SongProgress
        stopSong={ props.stopSong }
      />
    </footer>
  );
};

export default Footer;
