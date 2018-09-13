import React from 'react';
import SearchBar from './SearchBar';
import Avatar from './Avatar';

import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <SearchBar />
      <Avatar />
    </div>
  );
};

export default Header;
