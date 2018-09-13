import React from 'react';
import { connect } from 'react-redux';

import './ArtistsPreview.css';

const ArtistsPreview = (props) => {
  const renderArtists = () => {
    const artists = props.artists;
    if (artists) {
      return artists.map(artist => {
        return <li key={artist.id}>
          <img alt={artist.name} src={artist.images[0].url} width="200" />
          <p className="artist-name">{artist.name}</p>
        </li>
      });
    }
  };

  return (
    <ul className="img-preview artist-preview">
      { renderArtists() }
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    artists: state.artistsReducer.artists
  }
}

export default connect(mapStateToProps)(ArtistsPreview);
