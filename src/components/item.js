import React, {Component} from "react";
import FileUploader from "./fileUploader";
import ImagePreview from "./imagePreview";

export default class Item extends Component {

  state = {
    image: null,
    inputVisibility: true,
    previewVisibility: false,
  };

  loadPreview = (e) => {
    this.setState({
      image: e.target.result,
      inputVisibility: false,
      previewVisibility: true
    });
  };

  delete = () => {
    this.setState({
      image: null,
      inputVisibility: true,
      previewVisibility: false,
    });
  };

  render() {
    const {image, inputVisibility, previewVisibility} = this.state;

    return(
      <div>
        <FileUploader vis={inputVisibility} onSelect={this.loadPreview}/>
        <ImagePreview vis={previewVisibility} src={image} onDelete={this.delete}/>
      </div>
    )
  };

};
