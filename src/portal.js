import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//
// export default class Modal extends Component {
//   el = document.createElement('div');
//   modalRoot = document.getElementById('modal');
//
//   componentDidMount() {
//     this.modalRoot.appendChild(this.el);
//     this.el.innerHTML = '1234'
//   }
//
//   componentWillUnmount() {
//     this.modalRoot.removeChild(this.el);
//   }
//
//   render(){
//     return ReactDOM.createPortal(
//       this.props.children,
//       this.el
//     )
//   }
// }

const Outsider = () => (
  ReactDOM.createPortal(<div>i am outsider</div>, document.body)
);

class Modal extends Component {
  render= () => {
    return (
      <Outsider />
    )
  }
}


