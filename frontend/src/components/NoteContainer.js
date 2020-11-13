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


  //updates the sort based on the sort pressed
  updateSort = (sortBy) => {
    this.setState({
      sort: sortBy
    })
  }

  //filters notes based on what is typed in the search bar and what is based on sort by
  filterNotes = () => {
    let filteredNotes = [...this.state.notes]
    if(this.state.searchInput !== ''){
      filteredNotes =  filteredNotes.filter( note => note.title.toLowerCase().includes(this.state.searchInput.toLowerCase()) ) 
      return filteredNotes     
    }
    if (this.state.sort === "A-Z") {
        return filteredNotes.sort((a,b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1)
    } else if (this.state.sort === "Z-A") {
        return filteredNotes.sort((a,b) => a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1)
    } else if (this.state.sort === "Longest-Shortest") {
      return filteredNotes.sort((a,b) => a.body.length < b.body.length ? 1 : -1)
    } else if (this.state.sort === "Shortest-Longest") {
      return filteredNotes.sort((a,b) => a.body.length > b.body.length ? 1 : -1)
    } else {
        return filteredNotes
    }
  }
  

  //displays note clicked on content
  displayNote = (noteId) => {
    let selectNote = this.state.notes.filter((note) => note.id === noteId)
    this.setState({ 
      selectedNote: selectNote[0], //selectedNote becomes the note object to be displayed
      editClicked: false // gives the ability to click on other notes while in edit mode
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
        title: 'Default',
        body: 'Placeholder',
        user_id: 5
      })
    })
    .then(res => res.json())
    .then(newNote => {
      this.setState({
        notes: [...this.state.notes, newNote]
      })
    })
  }

  //updates the change of a note in whole notes array when new note updated. called in noteEditor
  updateNotes = (updatedNote) => {
    let updatedNotes = this.state.notes.map( note => note.id === updatedNote.id ? updatedNote : note)
    this.setState({
      notes: updatedNotes,
      editClicked: false,
      //makes it go back to direction screen
      selectedNote: {}
    })
  }

  handleEditClick = () => {
    this.setState({
      editClicked: true
    })
  }
  
  handleCancelClick = () => {
    this.setState({
      editClicked: false
    })
  }

  handleDeleteClick = () => {
    fetch(`http://localhost:3000/api/v1/notes/${this.state.selectedNote.id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(() => {
        const filteredNotes = [...this.state.notes].filter(
          note => note.id !== this.state.selectedNote.id
        )
        this.setState({
          notes: filteredNotes,
          editClicked: false,
          // makes it go back to directions screen
          selectedNote: {}
        })
      })
  }


  render() {
    //console.log(`handleClicked = ${this.state.editClicked}`)
    return (
      <Fragment>
        <Search handleSearch={this.handleSearch}/>
        <Sort sort={this.state.sort} updateSort={this.updateSort}/>
        <div className='container'>
          <Sidebar notes={this.filterNotes()} displayNote={this.displayNote} createNote={this.createNote}/>
          <Content selectedNote={this.state.selectedNote} editClicked={this.state.editClicked} updateNotes={this.updateNotes}
            handleCancelClick={this.handleCancelClick} handleEditClick={this.handleEditClick} 
            handleDeleteClick={this.handleDeleteClick}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
