import React from "react";
import {connect} from "react-redux";

import {UserBlock} from "../components";
import {getCurrentUser} from "../../../../../selectors/selectors";

const UserBlockContainer = (props) => {

  return (
    <UserBlock userInfo={props.userInfo}/>
  )
};

const mapStateToProps = (state, ownProps) => {
  return {
    userInfo: getCurrentUser(state, ownProps.row.id)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeValue: (value) => dispatch(changeValue(value)),
    // handleToggleVisibility: (login, isLoginEditable) => dispatch(toggleVisability(login, isLoginEditable))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserBlockContainer)
