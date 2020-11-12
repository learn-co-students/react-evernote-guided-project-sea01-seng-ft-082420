import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  constructor() {
    super()
    this.state = {
      notes: [],
      selectedNote: null
    }
  }

  componentDidMount() {
    let getNotes = "http://localhost:3000/api/v1/notes";
    fetch(getNotes).then(res => res.json()).then(n => this.setState({notes: n}));
  }

  render() {
    return (
      <div className='master-detail-element sidebar'>
        <NoteList notes={this.state.notes} handleSelect={this.props.handleSelect}/>
        <button>New</button>
      </div>
    );
  }
}

export default Sidebar;
