import React, { Component } from 'react';
// import Picker from 'emoji-picker-react';
import { Editor } from "@tinymce/tinymce-react";

class NoteEditor extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      input: []
    }
  }

  handleChange = (e) => {
    this.setState({ input: {
      ...this.state.input, [e.target.name]: e.target.value
    }})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.save(this.state.input, this.props.input.id)
    this.props.toggle()
  }
  
  // handleEmojiClick = (code, emoji) => {
  //   let emojiPic = jsemoji.replace_colons(`:${emoji.name}:`);
  //   this.setState({inputEmoji: this.state.inputEmoji + emojiPic
  //   })
  // }

  render() {
    return (
      
      <form className="note-editor" onSubmit={this.handleSubmit} >
        {/* <Picker onEmojiClick={this.handleEmojiClick} /> */}
        <input 
          type="text" 
          name="title" 
          placeholder={this.props.input.title} 
          onChange={this.handleChange} 
        />
        <textarea 
          name="body" 
          placeholder={this.props.input.body} 
          onChange={this.handleChange} 
        />

        <Editor 
          init={{
          plugins: "emoticons",
          toolbar: "emoticons",
          toolbar_location: "bottom",
          menubar: false
        } }
          placeholder={this.props.input.body}
          name="body" 
          placeholder={this.props.input.body} 
          onChange={this.handleChange} 
        
        />

        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button" onClick={this.props.toggle} >Cancel</button>
        </div>

      </form>
      
    );
  }
}

export default NoteEditor;
