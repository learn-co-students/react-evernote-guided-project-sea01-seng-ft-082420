import React, { Component } from 'react';

class NoteEditor extends Component {
  constructor(props){
    super(props)
    this.state={
      note: {
        title: this.props.selectedNote.title,
        body: this.props.selectedNote.body
      },
      editClicked: true
    }
  }

  editTitle = (e) => {
    console.log(e.target.value)
    this.setState({
      note: {
        title: e.target.value
      }
    })
  }

  editBody = (e) => {
    console.log(e.target.value)
    this.setState({
      note: {
        body: e.target.value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('save has been clicked')
    fetch(`http://localhost:3000/api/v1/notes/${this.props.selectedNote.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state.note)
    })
    .then(res => res.json())
    .then(note => {
      console.log(note)
      this.setState({editClicked: false})
    })
  }
  

  render() {
    return (
      <form className="note-editor" onSubmit={(e) => this.handleSubmit(e)}>
        <input defaultValue={this.state.note.title} type="text" name="title"  onChange={(e) => this.editTitle(e)} />
        <textarea name="body" defaultValue={this.state.note.body} onChange={(e) => this.editBody(e)} />
        <div className="button-row">
          <input className="button" type="submit" value="Save"/>
          <button type="button" onClick={() => this.props.handleCancelClick()}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
