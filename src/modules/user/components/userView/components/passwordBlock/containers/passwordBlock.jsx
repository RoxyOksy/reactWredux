import React, {Component} from 'react';

import {PasswordBlock} from "../components";

export default class PasswordBlockContainer extends Component {

  state = {
    password: '',
    isPasswordEditable: true
  };

  handleToggleVisibility = () => {
    this.setState({
      isPasswordEditable: false,
    });
  };

  handleChangeValue = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    const {password, isPasswordEditable} = this.state;

    return (
      <PasswordBlock
        isPasswordEditable={isPasswordEditable}

        password={password}

        handleToggleVisibility={this.handleToggleVisibility}
        handleChangeValue={this.handleChangeValue}
      />
    );
  }

};
