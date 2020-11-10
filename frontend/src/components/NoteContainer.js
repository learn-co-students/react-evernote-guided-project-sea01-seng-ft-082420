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

clickRender = (val) => {
  this.setState({renderNote: val})
}
  render() {
    console.log(this.state.renderNote)
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notes={this.state.notes} click={() => this.clickRender}/>
          <Content note={this.state.renderNote}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
