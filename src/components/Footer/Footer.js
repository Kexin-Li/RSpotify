import React from 'react';
import SongDetail from './SongDetail';
import SongControl from './SongControl';
import SongProgress from './SongProgress';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <SongDetail />
      <SongControl />
      <SongProgress />
    </footer>
  );
};

export default Footer;
