import React from 'react';
import './SideMenu.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updatePreviewTitle } from '../../actions/uiAction';
import { fetchFeatured } from '../../actions/browseAction';
import { fetchSongs, fetchRecentlyPlayed } from '../../actions/songsAction';
import { fetchAlbums } from '../../actions/albumsAction';
import { fetchArtists } from '../../actions/artistsAction';
import Artwork from './Artwork';

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
          key={menu.name}
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
      <Artwork />
      {/* <div className="artwork">
        <img />
      </div> */}
    </ul>
  );
};

function mapStateToProps(state) {
  return {
    token: state.tokenReducer.token,
    artistIds: state.artistsReducer.artistIds
  };
}

function mapDispatchToProps(dispatch) {
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
