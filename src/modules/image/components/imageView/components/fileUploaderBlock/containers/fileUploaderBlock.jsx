import React, {Component} from "react";

import {FileUploaderBlock} from '../components';

export default class FileUploaderBlockContainer extends Component {
  fileInputRef = React.createRef();

  handleFileUploaderClick = ()=> this.fileInputRef.current.click()

  handleChangeFile = (event) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.props.onSelect(e);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  render(){
    return(
      <FileUploaderBlock
        fileInputRef={this.fileInputRef}

        onFileUploaderClick={this.handleFileUploaderClick}
        onChangeFile={this.handleChangeFile} />
    )
  }
}

