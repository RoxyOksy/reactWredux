import React, {Component} from "react";
import './fileUploader.css';

export default class FileUploader extends Component {

  onClick = () => {
    document.getElementById('getFile').click();
  };

  handleChangeFile = (event) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.props.onSelect(e);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  render(){
    let classNameBut = this.props.vis ? 'isVisible' : 'notVisible';
    return(
      <div>
        <button className={classNameBut} onClick={this.onClick}>Open</button>
        <input type="file" accept=".png, .jpg, .jpeg" id="getFile"
               onChange={this.handleChangeFile} />
      </div>
    )
  }
}
