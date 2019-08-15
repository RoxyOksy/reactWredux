import React, {Component} from "react";
import get from "lodash/get";

import {ImageField} from "../components";

export default class ImageFieldContainer extends Component {

  handleDelete = () => {
    this.setState({
      isFileUploaderVisible: true,
    });
  };

  render() {
    const {data, handleChangeValue} = this.props;

    return(
      <ImageField id={get(data,'id',null)}
                  imageSrc={get(data,'imageSrc',null)}

                  onDelete={this.handleDelete}
                  onLoadPreview={handleChangeValue} />
    )
  };
};
