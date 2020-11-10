import React, { Component } from 'react';

class NoteEditor extends Component {
  
  
  render() {
    return (
      <form className="note-editor">
        <input type="text" name="title" placeholder={this.props.input.title} />
        <textarea name="body" placeholder={this.props.input.body} />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
