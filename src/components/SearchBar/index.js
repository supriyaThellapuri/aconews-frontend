import React, { useState } from 'react';
import './index.css';

const SearchBar = ({ setQuery, onSearch }) => {
  const [input, setInput] = useState('');

  const handleChangeInput = event => {
    setInput(event.target.value);
  };

  const handleSearch = () => {
    console.log("Search button clicked");
    setQuery(input);
    if (typeof onSearch === 'function') {
      onSearch();
    }
    setInput(''); 
  };

  return (
    <div className="search-bar">
      <input 
        type='text'
        id="search-input"
        name="searchQuery"
        placeholder='Search News'
        value={input}
        onChange={handleChangeInput}
      />
      <button 
        type="button" 
        className="search-button" 
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
