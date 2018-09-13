import React from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/songsAction';
import SongsPreview from '../SongsPreview/SongsPreview';
import BrowsePreview from '../BrowsePreview/BrowsePreview';
import AlbumsPreview from '../AlbumsPreview/AlbumsPreview';
import ArtistsPreview from '../ArtistsPreview/ArtistsPreview';

import './Preview.css';

const Preview = (props) => {
  const renderPreview = () => {
    switch(props.title) {
      case 'Browse':
        return <BrowsePreview/>;
      case 'Recently Played':
        return (
          <SongsPreview
            pauseSong={ props.pauseSong }
            resumeSong={ props.resumeSong }
            audioControl={ props.audioControl }
          />
        );
      case 'Favorite Songs':
        return (
          <SongsPreview
            pauseSong={ props.pauseSong }
            resumeSong={ props.resumeSong }
            audioControl={ props.audioControl }
          />
        );
      case 'Albums':
        return <AlbumsPreview />;
      case 'Artists':
        return <ArtistsPreview />;
      default:
        return (
          <SongsPreview
            pauseSong={ props.pauseSong }
            resumeSong={ props.resumeSong }
            audioControl={ props.audioControl }
          />
        );
    }
  };

  return (
    <div className="preview-container">
      { renderPreview() }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    title: state.uiReducer.title,
    token: state.tokenReducer.token
  };
}

export default connect(mapStateToProps, { fetchSongs })(Preview);
