import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  let noteItems = [];
  
  if (props.notes && props.notes.length)
  {
    noteItems = props.notes.map(note => <NoteItem key={note.id} note={note} handleSelect={props.handleSelect}/>);
  }

  return (
    <ul>
      {noteItems}
    </ul>
  );
}

export default NoteList;
