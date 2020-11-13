import React from 'react';

const Search = (props) => {
  return (
    <div className="filter">
      <input
        id="search-bar"
        type="text"
        placeholder="Search Notes"
        name="search"
        value={props.value}
        onChange={(evt) => props.onChange(evt)}
      />
    </div>
  );
}

export default Search;
