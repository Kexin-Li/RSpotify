import React from 'react';

const SearchBar = () => {
  return (
    <form>
      <input type="text" placeholder="Search" />
      <span>
        <i className="fa fa-search search" aria-hidden="true"/>
      </span>
    </form>
  );
};

export default SearchBar;
