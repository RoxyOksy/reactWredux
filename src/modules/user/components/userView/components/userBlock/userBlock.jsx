import React, {Component} from "react";

import styles from './userBlock.module.scss';

export default class UserBlock extends Component {

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
      <div className={styles.userBlock}>

      </div>
    )
  };

};
