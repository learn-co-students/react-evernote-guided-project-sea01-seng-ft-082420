import React from 'react';

const Search = ({search}) => {
  const handleChange = (e) => {
    search(e.target.value)
  }
  return (
    <div className="filter">
      <input
        id="search-bar"
        type="text"
        placeholder="Search Notes"
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
