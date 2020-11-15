import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({notes, click, search}) => {

  const filteredNotes = notes.filter(text => text.title.toUpperCase().includes(search.toUpperCase()))
  
  return (
    <ul>
      {filteredNotes.map(note => <NoteItem note={note} click={click} key={note.id}/>)}
    </ul>
  );
}

export default NoteList;