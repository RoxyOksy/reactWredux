import React, {Component} from "react";

import {FileUploaderBlock} from "../fileUploaderBlock";
import {ImagePreviewBlock} from "../imagePreviewBlock";

import styles from './imageBlock.module.scss';

export default class Index extends Component {

  state = {
    image: null,
    isFileUploaderVisible: true,
  };

  loadPreview = (e) => {
    this.setState({
      image: e.target.result,
      isFileUploaderVisible: false,
    });
  };

  delete = () => {
    this.setState({
      image: null,
      isFileUploaderVisible: true,
    });
  };

  render() {
    const {image, isFileUploaderVisible} = this.state;

    return(
      <div className={styles.imageBlock}>
        { isFileUploaderVisible ?
          <FileUploaderBlock id={this.props.id} onSelect={this.loadPreview}/> :
          <ImagePreviewBlock src={image} onDelete={this.delete}/> }
      </div>
    )
  };

};
