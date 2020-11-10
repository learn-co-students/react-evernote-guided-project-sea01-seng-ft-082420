import React from 'react';
import TextTruncate from 'react-text-truncate'
import Content from '../content/Content.js'


const NoteItem = (props) => (

  <li>
    <h2>{props.title}</h2>
    
    <TextTruncate
    line={2}
    element="span"
    truncateText="..." 
    text={props.body}
    textTruncateChild={<a href="#" onClick={() => props.onClick(props)}>Read More</a>}
    />
  
  </li>


);

export default NoteItem;
