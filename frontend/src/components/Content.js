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
  constructor(props){
    super(props)

    this.state={
      editClicked: this.props.editClicked
    }
  }

  handleCancelClick = () => {
    console.log('cancel has been clicked')
    this.setState({
      editClicked: false
    })
  }






  renderContent = () => {
    if (this.props.editClicked === true) {
      return <NoteEditor selectedNote={this.props.selectedNote} handleCancelClick={this.handleCancelClick}/>;
    } else if (this.props.selectedNote.id !== undefined) {
      return < NoteViewer selectedNote={this.props.selectedNote} editNote={this.props.editNote} />;
    } else if (this.props.editClicked === false) {
      return <Instructions />;
    }
  }

  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
