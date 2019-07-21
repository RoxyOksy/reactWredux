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
    let classNameBut = this.props.vis ? 'isVisible' : 'notVisible';

    return(
      <div>
        {/*<button  onClick={this.onClick} tabIndex='5'>Open}</button>*/}
        <input type="file" accept=".png, .jpg, .jpeg" id={this.props.id} className={classNameBut}
               onChange={this.handleChangeFile} />
      </div>
    )
  }
}
