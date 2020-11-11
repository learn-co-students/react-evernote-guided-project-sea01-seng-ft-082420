import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  console.log(props.notes)
  return (
    <ul>
      {/* Render list of notes here... */}
      {props.notes.map(note => <NoteItem title={note.title} body={note.body} onClick={props.click} key={note.id} id={note.id}/>)}
      
    </ul>
  );
}

export default NoteList;
