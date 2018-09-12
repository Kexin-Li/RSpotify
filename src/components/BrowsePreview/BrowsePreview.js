import React from 'react';
import { connect } from 'react-redux';

import './Browse.css';

const BrowsePreview = (props) => {
  const renderBrowse = () => {
    const view = props.view;
    if (view) {
      return view.map(item => {
        const src = item.images ? item.images[0].url : item.icons[0].url;
        return (
          <li key={item.id}>
            <img alt={item.name} src={src} width="200" />
          </li>
        );
      });
    }
  };

  return (
    <ul className="img-preview browse-preview">
      { renderBrowse() }
    </ul>
  )
};

function mapStateToProps(state) {
  return {
    view: state.browseReducer.view,
  };
}

export default connect(mapStateToProps)(BrowsePreview);
