import React from 'react';
import { connect } from 'react-redux';

import './Browse.css';

const BrowsePreview = (props) => {
  const renderPreview = () => {
    const view = props.view;

    if (view) {
      return view.map(item => {
        return (
          <li key={item.id}>
            {item.name}
          </li>
        );
      });
    }
  };

  return (
    <ul className="browse-preview">
      { renderPreview() }
    </ul>
  )
};

function mapStateToProps(state) {
  return {
    view: state.browseReducer.view,
  };
}

export default connect(mapStateToProps)(BrowsePreview);
