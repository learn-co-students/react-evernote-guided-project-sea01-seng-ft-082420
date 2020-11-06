import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {

  // set initial state
  state = {
    notes: [],
    selectedNote: {}
  }

  // fetch data from backend
  componentDidMount(){
    fetch('http://localhost:3000/api/v1/notes')
    .then((res) => res.json())
    .then((data) => this.setState({notes: data}))
  }

  selectNote = (noteId) => {
    let selectNote = this.state.notes.filter((note) => note.id === noteId)
    this.setState({ 
      selectedNote: selectNote[0] //selectedNote becomes the note object selected
    })
    
  }

  render() {
    //console.log(this.state.notes)
    console.log(this.state.selectedNote)
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notes={this.state.notes} selectNote={this.selectNote} />
          <Content selectedNote={this.state.selectedNote} />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
