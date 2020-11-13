import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

const USER_ID = 1;

class NoteContainer extends Component {
  constructor() {
    super()
    this.state = {
      notes: [],
      selectedNote: null,
      edit: false,
      search: "",
    }
  }

  componentDidMount() {
    this.getNotes();
  }

  handleSelect = (note) => {
    if (note) {
      this.setState({selectedNote: note, edit: false});
    }
  }
  
  onEditClick = () => {
    this.setState({edit: !this.state.edit});
  }

  getNotes = () => {
    let getNotes = "http://localhost:3000/api/v1/notes";
    fetch(getNotes)
    .then(res => res.json())
    .then(n => this.setState({notes: n }));
  }

  onSave = (note) => {
    if (note){
      const patchNote = `http://localhost:3000/api/v1/notes/${note.id}`;
      fetch(patchNote, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          title: note.title,
          body: note.body,
          user_id: USER_ID,
        })
      })
      .then(res => res.json())
      .then(n => {
        this.setState({selectedNote: n, edit: false});
        this.getNotes();
      });
    }
  }

  filterNotes = () => {
    if (this.state.notes) {
      return this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.search.toLowerCase()));
    }
  }

  createNote = () => {
    const postNote = `http://localhost:3000/api/v1/notes`;
      fetch(postNote, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          title: "title", placeholder:"Click to display a note.", color:"transparent",
          body: "write your note here",
          user_id: USER_ID,
        })
      })
      .then(res => res.json())
      .then(note => {
        const notes = [...this.state.notes, note];
        this.setState({ notes: notes, selectedNote: note, edit: false })
      });
  }

  handleSearch = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    return (
      <Fragment>
        <Search value={this.state.search} onChange={this.handleSearch} />
        <div className='container'>
          <Sidebar 
            notes={this.filterNotes()}
            handleSelect={this.handleSelect}
            onNew={this.createNote}
          />
          <Content 
            notes={this.state.notes} 
            note={this.state.selectedNote} 
            onEditClick={this.onEditClick} 
            edit={this.state.edit} 
            onSave={this.onSave}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
