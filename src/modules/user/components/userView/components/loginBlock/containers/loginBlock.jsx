import React from 'react';
import {connect} from "react-redux";

import {LoginBlock} from "../components";
import {editLogin} from '../../../../../actions/action';

const LoginBlockContainer = (props) => {
    return (
      <LoginBlock
        userInfo={props.userInfo}

        handleToggleVisibility={props.handleToggleVisibility}
        handleChangeValue={props.handleChangeValue}
      />
    );
  };

const mapStateToProps = (state, ownProps) => {
  // return {
  //   login: getValue(state, 'login', ownProps.userInfo.id)
  // }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleChangeValue: (value) => dispatch(editLogin(value, ownProps.userInfo.id))
  }
};

export default connect(null, mapDispatchToProps)(LoginBlockContainer)
