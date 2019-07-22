import React, {Component} from "react";

import styles from './fileUploaderBlock.module.scss';

export default class Index extends Component {

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
      <div className={styles.fileUploader}>
        <button className={styles.buttonOpen} onClick={this.handleFileUploaderClick}>Open</button>
        <input hidden ref={this.fileInputRef} type="file" accept=".png, .jpg, .jpeg" id={this.props.id}
               onChange={this.handleChangeFile} />
      </div>
    )
  }
}
