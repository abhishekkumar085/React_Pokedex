import React from 'react';
import './Search.css'
const Search = () => {
  return (
    <div className='search-wrapper'>
      <input type="text" 
      placeholder=" pokemon name...."
      id='pokemon-name-search' />
    </div>
  );
};

export default Search;
