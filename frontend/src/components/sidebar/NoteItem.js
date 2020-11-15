import React from 'react';
import TextTruncate from 'react-text-truncate'

const NoteItem = ({note, click}) => {
  return (

  <li>
    <h2>{note.title}</h2>
    
    <TextTruncate
    line={2}
    element="span"
    truncateText="..." 
    text={note.body}
    />
    
   <button onClick={() => click(note)}>Read More</button>
  </li>

  );
}
export default NoteItem;