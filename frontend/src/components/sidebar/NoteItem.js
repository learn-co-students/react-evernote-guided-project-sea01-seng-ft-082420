import React from 'react';
import TextTruncate from 'react-text-truncate'

const NoteItem = (props) => {
  // console.log(props)
  return (

  <li>
    <h2>{props.title}</h2>
    
    <TextTruncate
    line={2}
    element="span"
    truncateText="..." 
    text={props.body}
    
    // textTruncateChild={<button onClick={() => props.onClick(props)}>Read More</button>}
    />
   <button onClick={() => props.onClick(props)}>Read More</button>
  </li>


);
  }
export default NoteItem;
