import React from 'react';
import {connect} from "react-redux";

import {FormBlock} from "shared/components";

import {UserView} from "../components/userView";
import {addUser} from '../actions/action';
import {deleteUser} from '../actions/action';
import mapStateToProps from '../selectors';

import {getTableConfig as getUserTableConfig} from "./userTableConfig";
import {getFormConfig as getUserFormConfig} from "./userFormConfig";

const UserContainer = (props) => {
  const {page, users} = props;
  const userFormConfig = getUserFormConfig({
    onAddItem: props.handleAddUser,
    onDeleteItem: props.handleDeleteUser,
  });

  const userTableConfig = getUserTableConfig({
    onAddItem: props.handleAddUser,
    onDeleteItem: props.handleDeleteUser,

    getUserFormBlock: (props) => <FormBlock formConfig={userFormConfig} {...props} />
  });

  return (
    <UserView users={users}
              page={page}

              tableConfig={userTableConfig}/>
)};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddUser: () => dispatch(addUser()),
    handleDeleteUser: (id) => dispatch(deleteUser(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
