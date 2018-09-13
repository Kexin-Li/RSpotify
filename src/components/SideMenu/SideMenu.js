import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updatePreviewTitle } from '../../actions/uiAction';
import { fetchFeatured } from '../../actions/browseAction';
import { fetchSongs, fetchRecentlyPlayed } from '../../actions/songsAction';
import { fetchAlbums } from '../../actions/albumsAction';
import { fetchArtists } from '../../actions/artistsAction';
import Artwork from './Artwork';

import './SideMenu.css';

const SideMenu = (props) => {
  const fetchSongs = props.fetchSongs;
  const fetchRecentlyPlayed = props.fetchRecentlyPlayed;
  const fetchAlbums = props.fetchAlbums;
  const fetchArtists = props.fetchArtists;

  const renderSideMenu = () => {
    const menus = [
      { name: 'Recently Played', action: fetchRecentlyPlayed },
      { name: 'Favorite Songs', action: fetchSongs },
      { name: 'Albums', action: fetchAlbums },
      { name: 'Artists', action: fetchArtists }
    ];
    return menus.map(menu => {
      return (
        <li
          className={ props.title === menu.name ? 'active' : '' }
          key={ menu.name }
          onClick={ () => {
              menu.name === 'Artists' 
                ? menu.action(props.token, props.artistIds) 
                : menu.action(props.token);
              onMenuClick(menu.name);
            } 
          }
        >
          {menu.name}
        </li>
      );
    });
  };

  const onMenuClick = (title, action) => {
    props.updatePreviewTitle(title);
  };

  const onBrowseClick = () => {
    props.updatePreviewTitle('Browse');
    props.fetchFeatured(props.token);
  };

  return (
    <ul className="sidemenu-container">
      <li 
        onClick={ onBrowseClick } 
        className={ props.title === 'Browse' ? 'active' : '' }
      >
        Browse
      </li>
      <li 
        className={ props.title === 'Radio' ? 'active' : '' }
      >
        Radio
      </li>
      <h5>YOUR LIBIARY</h5>
      { renderSideMenu() }
      <Artwork />
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.tokenReducer.token,
    title: state.uiReducer.title,
    artistIds: state.artistsReducer.artistIds
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updatePreviewTitle,
    fetchFeatured,
    fetchSongs,
    fetchRecentlyPlayed,
    fetchAlbums,
    fetchArtists
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
