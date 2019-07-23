import React, {Component} from "react";

import {ImageBlock} from "../components";

export default class ImageBlockContainer extends Component {
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
      <ImageBlock isFileUploaderVisible={isFileUploaderVisible}

                  image={image}

                  onDelete={this.handleDelete}
                  onLoadPreview={this.handleLoadPreview}  />
    )
  };

};
