import React, { Component } from 'react';

class NoteEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: this.props.note,
    }
  }

  handleChange = (change) => {
    const note = {
      ...this.state.note,
      [change.target.name]: change.target.value,
    };

    this.setState({ note });
  }

  saveChanges = (e) => {
    e.preventDefault();
    this.props.onSave(this.state.note);
  }

  render() {
    const { title, body } = this.state.note;

    return (
      <form className="note-editor" onSubmit={this.saveChanges}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
        />
        <textarea
          name="body"
          value={body}
          onChange={this.handleChange}
        />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button className="button" type="reset" onClick={this.props.onCancel}>Cancel</button>
        </div>
      </form>
    );
  }
}

NoteEditor.defaultProps = {
  note: {
    id: null,
    title: "",
    body: "",
  }
}

export default NoteEditor;










// credit to https://github.com/hysan for the guide I followed for this particular section //
