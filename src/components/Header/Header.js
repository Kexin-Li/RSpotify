import React from 'react';
import './Header.css'
import SearchBar from './SearchBar';
import Avatar from './Avatar';

const Header = () => {
  return (
    <div className="header">
      <SearchBar />
      <Avatar />
    </div>
  );
};

export default Header;
