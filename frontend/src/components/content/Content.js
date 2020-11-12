import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {
  constructor(){
    super()
  
    this.state = {
    input: []
    }
  }

  handleClick = (val) => {
    this.setState({input: val.note})
    console.log(val.note)
  }

  renderContent = () => {
    if (false) {
      return <NoteEditor />;
    } else if (false) {
      return <NoteViewer />;
    } else {
      return <Instructions />;
    }
  }

  render() {
    console.log(this.state.input)
    return (
      <div className='master-detail-element detail'>
        {/* {this.renderContent()} */}
        <NoteEditor input={this.state.input} save={this.props.save} />
        <NoteViewer note={this.props} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Content;
