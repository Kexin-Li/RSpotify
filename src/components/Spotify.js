import React, { Component } from 'react';
import './Spotify.css';
import SideMenu from './SideMenu/SideMenu';
import Header from './Header/Header';
import Title from './Title/Title';
import Preview from './Preview/Preview';
// import Footer from './Footer/Footer';

class Spotify extends Component {
  render() {
    return (
      <div className="app-container">
        <SideMenu />
        <div className="mainview">
          <Header />
          <Title />
          <Preview />
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Spotify;
