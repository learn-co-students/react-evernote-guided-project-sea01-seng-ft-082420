import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({notes, click, search}) => {
  // console.log(props.notes)
  console.log(search)

  const filteredNotes = notes.filter(text => text.title.toUpperCase().includes(search.toUpperCase()))
  console.log(filteredNotes)
  return (
    <ul>
      {/* Render list of notes here... */}
      {/* {props.notes.map(note => <NoteItem title={note.title} body={note.body} onClick={props.click} key={note.id} id={note.id}/>)} */}
      {filteredNotes.map(note => <NoteItem note={note} click={click} key={note.id}/>)}
      
    </ul>
  );
}

export default NoteList;
