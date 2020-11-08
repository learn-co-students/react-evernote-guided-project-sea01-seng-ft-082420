import React from 'react';

const NoteItem = (props) => (
  <li>
    <h2>{props.title}</h2>
    <p>Caption... {props.body}</p>
  </li>
);

export default NoteItem;
