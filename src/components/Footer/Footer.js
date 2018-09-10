import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="music-control">
        <span>
          <i className="fa fa-step-backward reverse" aria-hidden="true" />
        </span>
        <span>
          <i className="fa fa-step-backward reverse" aria-hidden="true" />
        </span>
        <span>
          <i className="fa fa-step-forward forward" aria-hidden="true" />
        </span>
      </div>
      <div className="music-progress">
        
      </div>
    </footer>
  );
};

export default Footer;
