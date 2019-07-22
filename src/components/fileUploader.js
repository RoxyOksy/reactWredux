import React, {Component} from "react";
import './fileUploader.css';

export default class FileUploader extends Component {

//   onClick = () => {
//     document.getElementById('props.id').click();
//   };

  handleChangeFile = (event) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.props.onSelect(e);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  render(){
    let classNameBut  = this.props.vis ? 'isVisible' : 'notVisible';
    let classNameDiv = 'buttonBorder';
    if(this.props.vis) {
      classNameDiv += ' isVisible';
    } else classNameDiv = 'notVisible';

    return(
      <div>
        <button className={classNameBut} onClick={this.onClick}>Open</button>
        <div className='buttonBorder' className={classNameDiv}></div>
        <input type="file" accept=".png, .jpg, .jpeg" id={this.props.id}
               onChange={this.handleChangeFile} />
      </div>
    )
  }
}
