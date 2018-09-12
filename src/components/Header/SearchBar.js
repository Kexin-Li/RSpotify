import React from 'react';

const SearchBar = () => {
  return (
    <form>
      <input />
      <span style={{marginLeft: '5px'}}>
        <i className="fa fa-search search" aria-hidden="true"/>
      </span>
    </form>
  );
};

export default SearchBar;
