import React from 'react';

const SongProgress = () => {
  return (
    <div className="song-progress-container">
      <p className="time-start">0:00</p>
      <div className="song-progress">
        <div className="song-expired"></div>
      </div>
      <p className="time-end">3:00</p>
    </div>
  );
};

export default SongProgress;
