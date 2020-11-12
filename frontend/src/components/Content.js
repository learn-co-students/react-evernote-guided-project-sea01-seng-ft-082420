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
  constructor() {
    super()
    this.state = {
      edit: false
    }
  }

  onEditClick = () => {
    this.setState({edit: !this.state.edit});
  }

  renderContent = () => {
    if (this.props.note && this.state.edit) {
      return <NoteEditor note={this.props.note} onCancel={this.onEditClick}/>;
    } else if (this.props.note && !this.state.edit){
      return <NoteViewer note={this.props.note} onEdit={this.onEditClick}/>;
    } else {
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
