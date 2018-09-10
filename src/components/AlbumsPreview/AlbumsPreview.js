import React from 'react';
import { connect } from 'react-redux';

const AlbumsPreview = (props) => {
  const renderAlbums = () => {
    const albums = props.albums;
    if (albums) {
      return albums.map(album => {
        return (
          <li key={album.album.id}>
            {album.album.name}
          </li>
        );
      });
    }
  };

  return (
    <ul className="albums-preview">
      { renderAlbums() }
    </ul>
  );
};

function mapStateToProps(state) {
  return {
    albums: state.albumsReducer.albums
  }
}

export default connect(mapStateToProps)(AlbumsPreview);
