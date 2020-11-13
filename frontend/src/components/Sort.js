import React from 'react';

const Sort = (props) => {
  return (
    <div className="filter">
      <strong>Sort By:</strong>
      <label >
        <input type="radio" value='A-Z' name="sort" checked={props.sort === 'A-Z'} onChange={(e) => props.updateSort(e.target.value)}/>
        A-Z
      </label>
      <label>
        <input type="radio" value='Z-A' name="sort" checked={props.sort === 'Z-A'} onChange={(e) => props.updateSort(e.target.value)}/>
        Z-A
      </label>
      <label>
        <input type="radio" value='Longest-Shortest' name="sort" checked={props.sort === 'Longest-Shortest'} onChange={(e) => props.updateSort(e.target.value)}/>
        Longest-Shortest
      </label>
      <label>
        <input type="radio" value='Shortest-Longest' name="sort" checked={props.sort === 'Shortest-Longest'} onChange={(e) => props.updateSort(e.target.value)}/>
        Shortest-Longest
      </label>
    </div>
  );
}


export default Sort;
