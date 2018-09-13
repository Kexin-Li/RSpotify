import React from 'react';
import { connect } from 'react-redux';

import './AlbumsPreview.css';

const AlbumsPreview = (props) => {
  const renderAlbums = () => {
    const albums = props.albums;
    if (albums) {
      return albums.map(album => {
        return (
          <li key={album.album.id}>
            <img alt={album.album.name} src={album.album.images[0].url} width="200" />
            <p className="album-name">{album.album.name}</p>
            <p className="album-artist">{album.album.artists[0].name}</p>
          </li>
        );
      });
    }
  };

  return (
    <ul className="img-preview album-preview">
      { renderAlbums() }
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    albums: state.albumsReducer.albums
  }
}

export default connect(mapStateToProps)(AlbumsPreview);
