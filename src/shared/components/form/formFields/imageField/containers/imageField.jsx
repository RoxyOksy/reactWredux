import React, {Component} from "react";

import {ImageField} from "../components";

export default class ImageFieldContainer extends Component {
  state = {
    image: null,
    isFileUploaderVisible: true,
  };

  handleLoadPreview = (e) => {
    this.setState({
      image: e.target.result,
      isFileUploaderVisible: false,
    });
  };

  handleDelete = () => {
    this.setState({
      image: null,
      isFileUploaderVisible: true,
    });
  };

  render() {
    const {image, isFileUploaderVisible} = this.state;

    return(
      <ImageField isFileUploaderVisible={isFileUploaderVisible}

                  image={image}

                  onDelete={this.handleDelete}
                  onLoadPreview={this.handleLoadPreview}  />
    )
  };

};
