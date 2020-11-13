import React, { Fragment } from 'react';

const NoteViewer = ({note, handleClick, handleDelete}) => {
  console.log(note)
  return (
    <Fragment>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <div className="button-row">
        <button onClick={() => handleClick(note)}>Edit</button>
        <button onClick={() => handleDelete(note)}>Delete</button>
      </div>
    </Fragment>
  );
}

export default NoteViewer;
