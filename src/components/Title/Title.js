import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import PlayButton from './PlayButton';

import './Title.css';

const Title = (props) => {
  const renderNavBar = () => {
    if (props.title === 'Browse') {
      return <NavBar />;
    }
  };

  const renderPlayButton = () => {
    if (props.title === 'Recently Played' 
      || props.title === 'Favorite Songs'
      || props.title === 'Albums') {
      return (
        <PlayButton
          pauseSong={ props.pauseSong }
          resumeSong={ props.resumeSong }
        />
      );
    }
  };

  return (
    <div className="preview-title">
      <h1>{ props.title }</h1>
      { renderNavBar() }
      { renderPlayButton() }
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    title: state.uiReducer.title
  };
}

export default connect(mapStateToProps)(Title);
