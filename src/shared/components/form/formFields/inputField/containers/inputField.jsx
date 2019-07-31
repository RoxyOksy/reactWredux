import React, {Component} from "react";

import {InputField} from "../components";

export default class InputFieldContainer extends Component {
  state = {
    value: ''
  };

  handleChangeValue = (e) => {
    this.setState({
      value: e.target.value,
    });

  };

  render() {
    const {type, label, } = this.props;
    const {value} = this.state;

    return (
      <InputField
        type={type}
        label={label}
        value={value}

        handleChangeValue={this.handleChangeValue}/>
    )
  };

};
