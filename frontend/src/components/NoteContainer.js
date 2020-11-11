import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {

  // set initial state
  state = {
    notes: [],
    selectedNote: {},
    editClicked: false,
    searchInput: ""
  }

  // fetch data from backend
  componentDidMount(){
    fetch('http://localhost:3000/api/v1/notes')
    .then((res) => res.json())
    .then((data) => this.setState({notes: data}))
  }

  // sets searchInput to whatever is typed in the search bar to
  handleSearch = (e) => {
    this.setState({
      searchInput: e.target.value
    })
  }

  //filters notes based on what is typed in the search bar
  filterNotes = () => {
    return this.state.notes.filter( note => note.title.toLowerCase().includes(this.state.searchInput.toLowerCase()) )
  }

  //displays note clicked on content
  displayNote = (noteId) => {
    let selectNote = this.state.notes.filter((note) => note.id === noteId)
    this.setState({ 
      selectedNote: selectNote[0] //selectedNote becomes the note object to be displayed
    })
  }

  //creates a note in the backend. is displayed on the sidebar
  createNote = () => {
    fetch('http://localhost:3000/api/v1/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        title: 'default',
        body: 'placeholder',
        user: {
          id: 1,
          name: 'Chandler'
        }
      })
    })
    .then(res => res.json())
    .then(newNote => {
      this.setState({
        notes: [...this.state.notes, newNote]
      })
    })
  }


  handleEditClick = () => {
    console.log('edit button has been clicked')
    this.setState({
      editClicked: true
    })
  }

  handleSaveClick = () => {
    console.log('save button has been clicked')
    this.setState({
      editClicked: false
    })
  }
  
  handleCancelClick = () => {
    console.log('cancel button has been clicked')
    this.setState({
      editClicked: false
    })
  }


  render() {
    console.log(`handleClicked = ${this.state.editClicked}`)
    return (
      <Fragment>
        <Search handleSearch={this.handleSearch}/>
        <div className='container'>
          <Sidebar notes={this.filterNotes()} displayNote={this.displayNote} createNote={this.createNote}/>
          <Content selectedNote={this.state.selectedNote} editClicked={this.state.editClicked} 
            handleCancelClick={this.handleCancelClick} handleEditClick={this.handleEditClick} handleSaveClick={this.handleSaveClick}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
