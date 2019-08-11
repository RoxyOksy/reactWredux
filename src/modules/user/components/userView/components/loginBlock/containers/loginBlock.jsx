import React from 'react';
import {connect} from "react-redux";

import {LoginBlock} from "../components";
import {toggleVisability} from '../../../../../actions/action';

const LoginBlockContainer = (props) => {

  // handleToggleVisibility = () => {
  //   const {login, isLoginEditable} = this.state;
  //
  //   if(login){
  //     this.setState({
  //       isLoginEditable: !(isLoginEditable),
  //     });
  //   }
  // };


const handleChangeValue = (value) => {
  console.log('value= ', value);
}

    const {login, isLoginEditable} = props;

    return (
      <LoginBlock
        isLoginEditable={isLoginEditable}

        login={login}

        handleToggleVisibility={props.handleToggleVisibility}
        handleChangeValue={handleChangeValue}
      />
    );
  }

// const mapStateToProps = (state, ownProps) => {
//   return {
//     login: state.user.users[0].login,
//     isLoginEditable: state.user.users[0].isLoginEditable
//   }
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     // handleChangeValue: () => dispatch(addUser()),
//     handleToggleVisibility: (login, isLoginEditable) => dispatch(toggleVisability(login, isLoginEditable))
//   }
// };

export default LoginBlockContainer
