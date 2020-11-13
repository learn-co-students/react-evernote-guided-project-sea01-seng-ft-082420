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
    input: [],
    renderEditor: false
    }
  }

  handleClick = (val) => {
    this.setState({input: val, renderEditor: true})
    this.props.toggleEditor()
    // console.log(val)
  }

  toggleEditor = () => {
    this.setState({renderEditor: false})
  }

  // renderContent = () => {
  //   if (false) {
  //     return <NoteEditor />;
  //   } else if (false) {
  //     return <NoteViewer />;
  //   } else {
  //     return <Instructions />;
  //   }
  // }

  renderContent = () => {
      if (this.props.toggle && this.state.renderEditor) {
        return <NoteEditor input={this.state.input} click={this.props.click} save={this.props.save} toggle={this.toggleEditor}/>;
      } else if (this.props.view) {
        return <NoteViewer note={this.props.note} handleClick={this.handleClick}/>;
      } else {
        return <Instructions />;
      }
    }

  render() {
    // console.log(this.state.input)
    // console.log(this.state.renderEditor)
    // console.log(this.props.view)
    // console.log(this.props.toggle)
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
        {/* <NoteEditor input={this.state.input} save={this.props.save} />
        <NoteViewer note={this.props} handleClick={this.handleClick} /> */}
      </div>
    );
  }
}

export default Content;
