import React from 'react';
import {connect} from "react-redux";
import {UserView} from "../components/userView";
import {getUserTableConfig} from "./userTableConfig";
import {addUser} from '../actions/action';
import {deleteUser} from '../actions/action';

import '../../../app/app.module.scss';

const UserContainer = (props) => {
  const {page, users} = props;

  const userTableConfig = getUserTableConfig({
    onAddItem: props.handleAddUser,
    onDeleteItem: props.handleDeleteUser,
  });

  return (
    <UserView users={users}
              page={page}

              tableConfig={userTableConfig}/>
)};


const mapStateToProps = (state, ownProps) => {
  return {
    users: state.user.users
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddUser: () => dispatch(addUser()),
    handleDeleteUser: (id) => dispatch(deleteUser(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
