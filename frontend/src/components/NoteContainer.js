import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './sidebar/Sidebar';
import Content from './content/Content';

class NoteContainer extends Component {
  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar />
          <Content />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
