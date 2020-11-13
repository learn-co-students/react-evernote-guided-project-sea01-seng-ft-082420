import React, { Component } from 'react';
import NoteList from './NoteList';

import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class Sidebar extends Component {
  constructor() {
    super()
    this.state = {
      notes: [],
      selectedNote: null
    }
  }

  sortByAlphabet = (x, y) => {
    if (x.title < y.title)
      return -1;
    if (x.title > y.title)
      return 1;
    return 0;
  }

  sortByTitle = () => {
    let sortedArray = this.props.notes.sort(this.sortByAlphabet);
    this.setState({ notes: sortedArray });
  }

  sortByLength = (x, y) => {
    if (x.body.length < y.body.length)
      return -1;
    if (x.body.length > y.body.length)
      return 1;
    return 0;
  }

  sortByNoteSize = () => {
    let sortedArray = this.props.notes.sort(this.sortByLength);
    this.setState({ notes: sortedArray });
  }

  // sortByDateEdited = () => {
  //   let sortedArray = this.state.notes ();
  //   this.setState({ notes: sortedArray });
  // }
  
  render() {
    return (
      <div className='master-detail-element sidebar'>
        <DropdownButton id="dropdown-basic-button" title="Sort By">
          <Dropdown.Item onSelect={(evt) => this.sortByTitle()}>Title</Dropdown.Item>
          <Dropdown.Item onClick={() => this.sortByNoteSize()}>Length</Dropdown.Item>
          {/* <Dropdown.Item onClick={() => this.sortByDateEdited()}>Date Edited</Dropdown.Item> */}
        </DropdownButton>
        <NoteList notes={this.props.notes} handleSelect={this.props.handleSelect}/>
        <button onClick={() => this.props.onNew()}>New Note</button>
      </div>
    );
  }
}

export default Sidebar;
