import React, { Component } from 'react';

class NoteEditor extends Component {
  constructor(props){
    super(props)
    this.state={
      title: '',
      body: '',
      user_id: 1
    }
  }

  editTitle = (e) => {
    console.log(e.target.value)
    this.setState({
      title: e.target.value
    })
  }

  editBody = (e) => {
    console.log(e.target.value)
    this.setState({
      title: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('save has been clicked')
  }
  

  render() {
    return (
      <form className="note-editor" onSubmit={(e) => this.handleSubmit(e)}>
        <input value={this.props.selectedNote.title} type="text" name="title" onChange={(e) => this.editTitle(e)} />
        <textarea name="body" value={this.props.selectedNote.body} onChange={(e) => this.editBody(e)} />
        <div className="button-row">
          <input className="button" type="submit" value="Save" onSubmit={(e) => this.handleSubmit(e)}/>
          <button type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
