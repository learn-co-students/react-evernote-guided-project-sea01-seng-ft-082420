import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul>
      {props.notes.map((note) => (
          <li>
            <NoteItem key={note.id} note={note} />
          </li>
      ))}
      <NoteItem />
    </ul>
  );
}

export default NoteList;
