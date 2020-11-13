import React from 'react';

const NoteItem = (props) => {
  if(props.note){
    let body = props.note.body;
    if (body.length > 30)
    {
      body = `${props.note.body.substring(0, 27)}...`
    }
    return (  
      <li onClick={() => props.handleSelect(props.note)}>
        <h2>{props.note.title}</h2>
        <p>{body}</p>
      </li>)
  }

  return null
};

export default NoteItem;
