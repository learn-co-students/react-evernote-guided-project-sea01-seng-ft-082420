import React, { Component } from 'react';

class NoteEditor extends Component {
  
  constructor(props){
    // console.log(props)
    super(props)
    this.state = {
      input: [ ]
    }
  }

  // state = {
  //   input: this.props.input
  // }

  // componentDidMount(){
  //   this.setState({input: this.props.input})
  // }

  handleChange = (e) => {
    this.setState({...this.state, [e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.save(this.state, this.props.input.id)
    this.props.toggle()
    this.props.click(this.state)
  }

  render() {
    // console.log(this.props.input)
    // console.log(this.state)
    
    return (
      <form className="note-editor" onSubmit={this.handleSubmit} >
        <input type="text" name="title" placeholder={this.props.input.title} onChange={this.handleChange} />
        <textarea name="body" placeholder={this.props.input.body} onChange={this.handleChange} />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button" onClick={this.props.toggle} >Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
