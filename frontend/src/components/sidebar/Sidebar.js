import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {

  render() {
    const {notes, click, search, handleNewClick} = this.props
    return (
      <div className='master-detail-element sidebar'>
        <NoteList 
          notes={notes} 
          click={click} 
          search={search} />
        <button onClick={handleNewClick}>New</button>
      </div>
    );
  }
}

export default Sidebar;
