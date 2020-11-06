import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {

  // set initial state
  state = {
    notes: []
  }

  // fetch data from backend
  componentDidMount(){
    fetch('http://localhost:3000/api/v1/notes')
    .then((res) => res.json())
    .then((data) => this.setState({notes: data}))
  }



  render() {
    console.log(this.state.notes)
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notes={this.state.notes} />
          <Content notes={this.state.notes} />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
