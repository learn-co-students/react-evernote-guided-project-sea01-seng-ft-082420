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
    isEdited: false
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
      selectedNote: selectNote[0], //selectedNote becomes the note object selected
      selectedNoteId: selectNote[0].id
    })
  }

  //creates a note in the backend. is displayed on the sidebar
  createNote = () => {
    const noteExample = {
      title: 'default',
      body: 'placeholder',
      user_id: 1
    }
    fetch('http://localhost:3000/api/v1/notes', {
      method: 'POST',
      body: JSON.stringify(noteExample),
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

  editNote = (note) =>{
    console.log('edit note button is clicked', note)
  }

  // editNote = (note) => {
  //  const updateNote = {title: note.title, body: note.body}
  //   fetch(`http://localhost:3000/api/v1/notes/${note.id}`), {
  //     method: 'PATCH',
  //     body: JSON.stringify(updateNote),
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json'
  //     }
  //   }
  //   .then(res => res.json())
  //   .then(prevState => {
      
  //   })
    
  // }


  render() {
    //console.log(this.state.notes)
    //console.log(this.state.selectedNoteId)
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notes={this.state.notes} selectNote={this.selectNote} createNote={this.createNote}/>
          <Content selectedNote={this.state.selectedNote} editNote={this.editNote}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
