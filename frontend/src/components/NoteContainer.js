import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {

  // set initial state
  state = {
    notes: [],
    selectedNote: {},
    selectedNoteId: null,
    editClicked: false
  }

  // fetch data from backend
  componentDidMount(){
    fetch('http://localhost:3000/api/v1/notes')
    .then((res) => res.json())
    .then((data) => this.setState({notes: data}))
  }

  displayNote = (noteId) => {
    let selectNote = this.state.notes.filter((note) => note.id === noteId)
    this.setState({ 
      selectedNote: selectNote[0], //selectedNote becomes the note object to be displayed
      selectedNoteId: selectNote[0].id
    })
  }

  //creates a note in the backend. is displayed on the sidebar
  createNote = () => {
    fetch('http://localhost:3000/api/v1/notes', {
      method: 'POST',
      body: JSON.stringify({
        title: 'default default',
        body: 'placeholder',
        user_id: 1
      }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    .then(res => res.json())
    .then(newNote => {
      this.setState({
        notes: [...this.state.notes, newNote]
      })
    })
  }

  findNote = () => {
    return this.state.notes.find(note => note.id === this.state.selectedNoteId);
  };

  editNote = () =>{
    console.log('edit button has been clicked')
    this.setState(prevState => ({
      editClicked: !prevState.editClicked
    }))
  }

  // editNote = (note) => {
  //  const updateNote = {title: note.title, body: note.body}
  //   fetch(`http://localhost:3000/api/v1/notes/${this.state.selectedNoteId}`), {
  //     method: 'PATCH',
  //     body: JSON.stringify({
  //      title: 'default default'
  //      body: 'placeholder',
  //      user_id: 1
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json'
  //     }
  //   }    
  // }


  render() {
    //console.log(this.state.notes)
    //console.log(this.state.selectedNoteId)
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notes={this.state.notes} displayNote={this.displayNote} createNote={this.createNote}/>
          <Content selectedNote={this.state.selectedNote} editNote={this.editNote} editClicked={this.state.editClicked}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
