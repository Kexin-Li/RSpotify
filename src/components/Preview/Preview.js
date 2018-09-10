import React from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/songsAction';
import SongsPreview from '../SongsPreview/SongsPreview';
import BrowsePreview from '../BrowsePreview/BrowsePreview';
import AlbumsPreview from '../AlbumsPreview/AlbumsPreview';
import ArtistsPreview from '../ArtistsPreview/ArtistsPreview';

const Preview = (props) => {
  const renderPreview = () => {
    switch(props.title) {
      case 'Browse':
        return <BrowsePreview />;
      case 'Recently Played':
        return <SongsPreview />;
      case 'Favorite Songs':
        return <SongsPreview />;
      case 'Albums':
        return <AlbumsPreview />;
      case 'Artists':
        return <ArtistsPreview />;
      default:
        return <SongsPreview />;
    }
  };

  return (
    <div className="preview-container">
      { renderPreview() }
    </div>
  );
};

function mapStateToProps(state) {
  return {
    title: state.uiReducer.title,
    token: state.tokenReducer.token
  };
}

export default connect(mapStateToProps, { fetchSongs })(Preview);
