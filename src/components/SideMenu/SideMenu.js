import React from 'react';
import './SideMenu.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updatePreviewTitle } from '../../actions/uiAction';
import { fetchFeatured } from '../../actions/browseAction';

const SideMenu = (props) => {
  const renderSideMenu = () => {
    const menus = [
      { name: 'Recently Played', action: '' },
      { name: 'Favorite Songs', action: '' },
      { name: 'Albums', action: '' },
      { name: 'Artists', action: '' }
    ];
    return menus.map(menu => {
      return (
        <li
          key={menu.name}
          onClick={ () => onMenuClick(menu.name) }
        >
          {menu.name}
        </li>
      );
    });
  };

  const onMenuClick = (title) => {
    props.updatePreviewTitle(title);
  };

  const onBrowseClick = () => {
    // call updatePreviewTitle from props, or the action will not dispatch.
    // see: https://stackoverflow.com/questions/49662871/redux-action-not-triggering-reducers
    props.updatePreviewTitle('Browse');
    props.fetchFeatured(props.token);
  };

  return (
    <ul className="sidemenu-container">
      <li onClick={ onBrowseClick }>Browse</li>
      <li>Radio</li>
      <h5>YOUR LIBIARY</h5>
      { renderSideMenu() }
    </ul>
  );
};

function mapStateToProps(state) {
  return {
    token: state.tokenReducer.token
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updatePreviewTitle,
    fetchFeatured
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
