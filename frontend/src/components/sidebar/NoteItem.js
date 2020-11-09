import React from 'react';
import TextTruncate from 'react-text-truncate'


const NoteItem = (props) => (

  <li>
    <h2>{props.title}</h2>
    
    <TextTruncate
    line={2}
    element="span"
    truncateText="..." 
    text={props.body}
    textTruncateChild={<a href="#">Read More</a>}
    />
  
  </li>


);

export default NoteItem;
