import React from 'react';

const Sort = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="A-Z" name="sort" checked={props.sort === 'A-Z'} onChange={(e) => props.updateSort(e.target.value)}/>
        A-Z
      </label>
      <label>
        <input type="radio" value="Z-A" name="sort" checked={props.sort === 'Z-A'} onChange={(e) => props.updateSort(e.target.value)}/>
        Z-A
      </label>
    </div>
  );
}


export default Sort;