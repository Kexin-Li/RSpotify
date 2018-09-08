import React, { Component } from 'react';

class SideMenu extends Component {
  onClickBrowse() {
    console.log('clicked');
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="left brand-logo">RSpotify</a>
          <ul id="nav-mobile" className="right">
            <li><a href="/" onClick={this.onClickBrowse.bind(this)}>Browse</a></li>
            <li><a href="/">Radio</a></li>
            <li><a href="/">YOUR LIBRARY</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default SideMenu;
