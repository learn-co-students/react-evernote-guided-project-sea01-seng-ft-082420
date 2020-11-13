import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './sidebar/Sidebar';
import Content from './content/Content';

class NoteContainer extends Component {constructor() {
  super();

  this.state = {
    notes: [],
    renderNote: [],
    renderViewer: false,
    toggleEditor: true,
    search: ''
  }
}

componentDidMount() {
  fetch("http://localhost:3000/api/v1/notes")
  .then(res => res.json())
  .then(notes => this.setState({notes: notes}))
}

updateNote = (state, id) => {
  // console.log("hit the update");
  // console.log(state, id)
  fetch(`http://localhost:3000/api/v1/notes/${id}`, {
    method: 'PATCH',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: state.title,
      body: state.body
    })
  })
    .then(resp => resp.json())
    .then(data => {
      this.setState(prevState => ({
        notes: prevState.notes.map(note => note.id===id? data : note)
        })
      )
    })
  }

handleNewClick = () => {
  fetch('http://localhost:3000/api/v1/notes', {
    method: 'POST',
    body: JSON.stringify({
      user_id: 1,
      title: "Add A Title Here",
      body: "Write Notes Here"
    }),
    headers: {
      "Content-type": "application/json"
    }
  })
  .then(resp => resp.json())
  .then(data => {
    this.setState(prevState => ({
      notes: prevState.notes.push(data)
    }))
  })
}

handleDelete = (note) => {
  fetch(`http://localhost:3000/api/v1/notes/${note.id}`, {
    method: 'DELETE',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
  .then(resp => resp.json())
  .then(resp => {
    console.log(resp)
    this.toggleViewer()
  })
  this.setState(prevState => ({
    notes: prevState.notes.filter(notes => notes != note)}))
}

clickRender = (val) => {
  this.setState({renderNote: val, renderViewer: true, toggleEditor: false})
}

toggleEditor = () => {
  this.setState({toggleEditor: true})
}

toggleViewer = () => {
  this.setState({renderViewer: false})
}

search = (search) => {
  this.setState({search})
}

  render() {
    // console.log(this.state.renderNote)
    // console.log(this.state.search)
    return (
      <Fragment>
        <Search search={this.search} />
        <div className='container'>
          <Sidebar 
            notes={this.state.notes} 
            click={() => this.clickRender} 
            handleNewClick={this.handleNewClick}
            search={this.state.search}
          />
          <Content 
            note={this.state.renderNote}
            click={this.clickRender} 
            save={this.updateNote}  
            view={this.state.renderViewer}
            toggle={this.state.toggleEditor}
            toggleEditor={this.toggleEditor}
            handleDelete={this.handleDelete}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
