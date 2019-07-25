import React, {Component} from "react";

import {InputField} from "../components";

export default class InputContainer extends Component {
  state = {
    login: '',
    isLoginEditable: true
  };

  handleToggleVisibility = () => {
    const {login, isLoginEditable} = this.state;

    if(login){
      this.setState({
        isLoginEditable: !(isLoginEditable),
      });
    }
  };

  handleChangeValue = (e) => {
    this.setState({
      login: e.target.value,
    });
  };

  render() {
    const {type, label} = this.props;
    const {value} = this.state;

    return(
      <InputField
        type={type}
        label={label}
        value={value}

        handleChangeValue={this.handleChangeValue}/>
    )
  };

};
