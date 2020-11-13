import React, { Component } from 'react';

class NoteEditor extends Component {
  constructor(props){
    super(props)
    this.state={
      note: {
        title: this.props.selectedNote.title,
        body: this.props.selectedNote.body
      }
    }
  }

  editTitle = (e) => {
    let changes = e.target.value
    this.setState(prevState => ({
      note: {
        ...prevState.note,
        title: changes
      }
    }))
  }


  editBody = (e) => {
    let changes = e.target.value
    this.setState(prevState => ({
      note: {
        ...prevState.note,
        body: changes
      }
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    return fetch(`http://localhost:3000/api/v1/notes/${this.props.selectedNote.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state.note)
    })
    .then(res => res.json())
    .then(updatedNote => {
      this.props.updateNotes(updatedNote)
    })
  }
  

  render() {
    return (
      <form className="note-editor" onSubmit={(e) => this.handleSubmit(e)}>
        <input defaultValue={this.state.note.title} type="text" name="title"  onChange={(e) => this.editTitle(e)} />
        <textarea name="body" defaultValue={this.state.note.body} onChange={(e) => this.editBody(e)} />
        <div className="button-row">
          <input className="button" type="submit" value="Save" onSubmit={(e) => this.handleSubmit(e)}/>
          <button type="button" onClick={() => this.props.handleCancelClick()}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
