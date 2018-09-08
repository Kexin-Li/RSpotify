import React from 'react';
import { connect } from 'react-redux';
import SongsPreview from '../SongsPreview/SongsPreview';
import BrowsePreview from '../BrowsePreview/BrowsePreview';

const Preview = (props) => {
  const renderPreview = () => {
    switch(props.title) {
      case 'Browse':
        return <BrowsePreview />;
      case 'Recently Played':
        return <SongsPreview />;
      case 'Favorite Songs':
        return <SongsPreview />;
      default:
        return '';
    }
  };

  return (
    <div>
      { renderPreview() }
    </div>
  );
};

function mapStateToProps(state) {
  return {
    title: state.uiReducer.title
  };
}

export default connect(mapStateToProps)(Preview);
