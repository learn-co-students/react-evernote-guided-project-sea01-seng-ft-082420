import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  constructor() {
    super();

    this.state = {
      notes: [ ]
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/notes")
    .then(res => res.json())
    .then(notes => this.setState({notes: notes}))
  }

  render() {
    return (
      <div className='master-detail-element sidebar'>
        <NoteList notes={this.state.notes} />
        <button>New</button>
      </div>
    );
  }
}

export default Sidebar;
