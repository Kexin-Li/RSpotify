import React from 'react';
import SongDetail from './SongDetail';
import SongController from './SongController';
import SongProgress from './SongProgress';
import VolumeController from './VolumeController';

import './Footer.css';

const Footer = (props) => {
  return (
    <footer className="footer">
      <SongDetail />
      <SongController
        pauseSong={ props.pauseSong }
        resumeSong={ props.resumeSong }
        audioControl={ props.audioControl }
      />
      <SongProgress
        stopSong={ props.stopSong }
      />
      <VolumeController
        volumeControl={ props.volumeControl }
      />
    </footer>
  );
};

export default Footer;
