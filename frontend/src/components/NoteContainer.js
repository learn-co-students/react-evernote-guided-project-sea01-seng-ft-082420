import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  constructor() {
    super()
    this.state = {
      selectedNote: null
    }
  }

  handleSelect = (note) => {
    if (note) {
      this.setState({selectedNote: note});
    } 
  }
  
  // handleSelectNote = (id) => {
  //   const selectedNote = this.state.notes.find(note => note.id === id);
  //   this.setState({ selectedNote });
  // }

  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar handleSelect={this.handleSelect}/>
          <Content note={this.state.selectedNote}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
