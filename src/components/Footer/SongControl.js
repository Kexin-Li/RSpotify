import React from 'react';

const SongControl = () => {
  return (
    <div className="song-control">
      <span>
        <i className="fa fa-step-backward reverse" aria-hidden="true" />
      </span>
      <span>
        <i className="fa fa-play-circle-o play-btn" aria-hidden="true" />
      </span>
      <span>
        <i className="fa fa-step-forward forward" aria-hidden="true" />
      </span>
    </div>
  );
};

export default SongControl;
