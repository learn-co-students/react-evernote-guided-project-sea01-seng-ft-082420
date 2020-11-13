import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

class Content extends Component {
  constructor(){
    super()
  
    this.state = {
    input: [],
    renderEditor: false
    }
  }

  handleClick = (val) => {
    this.setState({input: val, renderEditor: true})
    this.props.toggleEditor()
  }

  toggleEditor = () => {
    this.setState({renderEditor: false})
  }

  renderContent = () => {
    const { toggle, save, note, handleDelete } = this.props
    
      if (toggle && this.state.renderEditor) {
        return <NoteEditor input={this.state.input} save={save} toggle={this.toggleEditor}/>;
      } else if (this.props.view) {
        return <NoteViewer note={note} handleClick={this.handleClick} handleDelete={handleDelete} />;
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