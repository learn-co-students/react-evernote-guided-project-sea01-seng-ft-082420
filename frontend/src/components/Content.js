import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';


class Content extends Component {
  renderContent = () => {
    if (this.props.editClicked === true) {
      return <NoteEditor selectedNote={this.props.selectedNote} handleCancelClick={this.props.handleCancelClick} 
        editClicked={this.props.editClicked} updateNotes={this.props.updateNotes}/>;
    } else if (this.props.selectedNote.id !== undefined) {
      return < NoteViewer selectedNote={this.props.selectedNote} handleEditClick={this.props.handleEditClick} 
        editClicked={this.props.editClicked} handleDeleteClick={this.props.handleDeleteClick}/>;
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
