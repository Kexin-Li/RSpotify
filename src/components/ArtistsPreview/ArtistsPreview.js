import React from 'react';
import { connect } from 'react-redux';

const ArtistsPreview = (props) => {
  const renderArtists = () => {
    const artists = props.artists;

    if (artists) {
      return artists.map(artist => {
        return <li key={artist.id}>
          {artist.name}
        </li>
      });
    }
  };

  return (
    <ul className="artists-preview">
      { renderArtists() }
    </ul>
  );
};

function mapStateToProps(state) {
  return {
    artists: state.artistsReducer.artists
  }
}

export default connect(mapStateToProps)(ArtistsPreview);
