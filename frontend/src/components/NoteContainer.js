import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './sidebar/Sidebar';
import Content from './content/Content';

class NoteContainer extends Component {constructor() {
  super();

  this.state = {
    notes: [ ],
    renderNote: []
  }
}

componentDidMount() {
  fetch("http://localhost:3000/api/v1/notes")
  .then(res => res.json())
  .then(notes => this.setState({notes: notes}))
}

updateNote = (state, id) => {
  
  console.log("hit the update");
  console.log(state, id)

  fetch(`http://localhost:3000/api/v1/notes/${id}`, {
    method: "PATCH",
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
  
clickRender = (val) => {
  this.setState({renderNote: val})
}
  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notes={this.state.notes} click={() => this.clickRender}/>
          <Content note={this.state.renderNote} save={this.updateNote} />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
