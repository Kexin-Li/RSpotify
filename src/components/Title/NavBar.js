import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGenres, fetchNewReleases, fetchFeatured } from '../../actions/browseAction';

class NavBar extends Component {
  titles = ['GENRES', 'NEW RELEASES', 'FEATURED'];
  state = {
    subTitle: this.titles[2]
  }

  renderBar = () => {
    return this.titles.map(title => {
      return (
        <li 
          key={title}
          className={ this.state.subTitle === title ? 'browse-navbar-item active' : 'browse-navbar-item' }
          onClick={ () => this.onBarClick(title, this.props.token) }
        >
          {title}
        </li>
      );
    });
  };

  onBarClick = (title, token) => {
    switch(title) {
      case this.titles[0]:
        this.props.fetchGenres(token);
        this.setState({ subTitle: this.titles[0] });
        break;
      case this.titles[1]:
        this.props.fetchNewReleases(token);
        this.setState({ subTitle: this.titles[1] });
        break;
      case this.titles[2]:
        this.props.fetchFeatured(token);
        this.setState({ subTitle: this.titles[2] });
        break;
      default:
        this.props.fetchFeatured(token);
        this.setState({ subTitle: this.titles[2] });
    }
  };

  render() {
    return (
      <ul className="browse-navbar">
        { this.renderBar() }
      </ul>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    token: state.tokenReducer.token
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchFeatured,
    fetchGenres,
    fetchNewReleases
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
