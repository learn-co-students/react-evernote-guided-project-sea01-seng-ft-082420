import React from 'react';

const NoteItem = (props) => (
  <li onClick={() => props.displayNote(props.note.id)}>
    <h2>{props.note.title}</h2>
    <p>{props.note.body.split(' ').splice(0, 7).join(' ') + ' ...'}</p> 
  </li>
);
// grabs the body makes it into an array for each word. grabs first 6 words and puts them into a string

export default NoteItem;

