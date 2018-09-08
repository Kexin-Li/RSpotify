import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGenres, fetchNewReleases, fetchFeatured } from '../../actions/browseAction';

const NavBar = (props) => {
  const titles = ['GENRES', 'NEW RELEASES', 'FEATURED'];

  const renderBar = () => {
    return titles.map(title => {
      return (
        <li 
          key={title}
          className="browse-navbar-item"
          onClick={ () => onBarClick(title, props.token) }
        >
          {title}
        </li>
      );
    });
  };

  const onBarClick = (title, token) => {
    switch(title) {
      case titles[0]:
        props.fetchGenres(token);
        break;
      case titles[1]:
        props.fetchNewReleases(token);
        break;
      case titles[2]:
        props.fetchFeatured(token);
        break;
      default:
        props.fetchFeatured(token);
    }
  };

  return (
    <ul className="browse-navbar">
      { renderBar() }
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
    fetchFeatured,
    fetchGenres,
    fetchNewReleases
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
