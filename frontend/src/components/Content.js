import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

class Content extends Component {

  renderContent = () => {
    if (this.props.note && this.props.edit) {
      return <NoteEditor note={this.props.note} onCancel={this.props.onEditClick} onSave={this.props.onSave}/>;
    } else if (this.props.note && !this.props.edit){
      return <NoteViewer note={this.props.note} onEdit={this.props.onEditClick}/>;
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
