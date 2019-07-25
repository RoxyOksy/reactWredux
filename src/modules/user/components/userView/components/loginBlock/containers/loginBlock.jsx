import React, {Component} from 'react';

import {LoginBlock} from "../components";

export default class LoginBlockContainer extends Component {

  state = {
    login: 'default login',
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

  render() {
    const {login, isLoginEditable} = this.state;

    return (
      <LoginBlock
        isLoginEditable={isLoginEditable}

        login={login}

        handleToggleVisibility={this.handleToggleVisibility}
        handleChangeValue={this.handleChangeValue}
      />
    );
  }

};
