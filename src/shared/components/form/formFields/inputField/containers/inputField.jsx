import React, {Component} from "react";

import {InputField} from "../components";

export default class InputFieldContainer extends Component {
  state = {
    value: ''
  };

  // handleChangeValue = (e) => {
  //   // this.setState({
  //   //   value: e.target.value,
  //   // });
  //   return e.target.value
  // };

  render() {
    const {type, label, value} = this.props;
    // const {value} = this.state;
console.log('handleChangeValue', this.props);
    return (
      <InputField
        type={type}
        label={label}
        value={value}

        handleChangeValue={(e) => this.props.handleChangeValue(e.target.value)}/>
    )
  };

};
