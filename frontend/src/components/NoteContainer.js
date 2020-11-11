import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';
import Sort from './Sort';

class NoteContainer extends Component {

  // set initial state
  state = {
    notes: [],
    selectedNote: {},
    editClicked: false,
    searchInput: "",
    sort: 'None'
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
  // filterNotes = () => {
  //   return this.state.notes.filter( note => note.title.toLowerCase().includes(this.state.searchInput.toLowerCase()) )
  // }

  //updates the sort based on the sort pressed
  updateSort = (sortBy) => {
    this.setState({
      sort: sortBy
    })
  }

  //filters notes based on what is typed in the search bar and what is based on sort by
  filterNotes = () => {
    let filteredNotes = [...this.state.notes]
    if(this.state.filter !== ""){
      filteredNotes =  filteredNotes.filter( note => note.title.toLowerCase().includes(this.state.searchInput.toLowerCase()) ) 
      return filteredNotes     
    }
    switch(this.state.sort){
      case "A-Z":
        return [...filteredNotes].sort((a,b) => a.title > b.title ? 1 : -1)
      case "Z-A":
          return filteredNotes.sort((a,b) => a.title < b.title ? 1 : -1)
      default:
        return filteredNotes
    }
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
        user_id: 3
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

  updateNotes = (updatedNote) => {
    let updatedNotes = this.state.notes.map( note => note.id === updatedNote.id ? updatedNote : note)
    this.setState({
      notes: updatedNotes
    })
  }


  render() {
    console.log(this.state.notes)
    console.log(`handleClicked = ${this.state.editClicked}`)
    return (
      <Fragment>
        <Search handleSearch={this.handleSearch}/>
        <Sort sort={this.state.sort} updateSort={this.updateSort}/>
        <div className='container'>
          <Sidebar notes={this.filterNotes()} displayNote={this.displayNote} createNote={this.createNote}/>
          <Content selectedNote={this.state.selectedNote} editClicked={this.state.editClicked} updateNotes={this.updateNotes}
            handleCancelClick={this.handleCancelClick} handleEditClick={this.handleEditClick} handleSaveClick={this.handleSaveClick}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
