import React, {Component} from 'react';
import {connect} from "react-redux";

import {FormBlock} from "shared/components";

import {UserView} from "../components/userView";
import {addUser, deleteUser, confirmUser,
  editFormFieldValue, editFormFieldState} from '../actions/action';

import mapStateToProps from '../selectors';

import {getTableConfig as getUserTableConfig} from "./userTableConfig";
import {getFormConfig as getUserFormConfig} from "./userFormConfig";

class UserContainer extends Component {
  state = {
    isModalOpen: false
  };


  render () {
    const {page, users,
      handleAddUser, handleDeleteUser,
      handleEditValue, handleEditState, handleConfirmUser} = this.props;

    const userFormConfig = getUserFormConfig({
      onEditValue: handleEditValue,
      onEditState: handleEditState
    });

    const changeModalState = () => {
      this.setState((state) => {
        return{
          isModalOpen: !state.isModalOpen
        }
      });
    };

    const checkUserEditableState = (id) => {
      users.filter((user) => {
        if(user.id === id) {
          return user.isUserEditableState ? changeModalState() : handleConfirmUser(id)
        }
      });
    };

    const userTableConfig = getUserTableConfig({
      onAddUser: handleAddUser,
      onDeleteUser: handleDeleteUser,
      // onConfirmItem: props.handleConfirmUser,
      onRequestToConfirmItem: checkUserEditableState,
      // onRequestToConfirmItem: checkUserEditableState,

      getUserFormBlock: (props) => <FormBlock formConfig={userFormConfig} {...props} />
    });

    return (
      <UserView isModalOpen={this.state.isModalOpen}
                users={users}
                page={page}

                tableConfig={userTableConfig}

                changeModalState={changeModalState}
                handleConfirmUser={handleConfirmUser}
      />
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddUser: () => dispatch(addUser()),
    handleDeleteUser: (id) => dispatch(deleteUser(id)),
    handleEditValue: (id, fieldName, value) => dispatch(editFormFieldValue(id, fieldName, value)),
    handleEditState: (id, fieldName) => dispatch(editFormFieldState(id, fieldName)),
    handleConfirmUser: (id) => dispatch(confirmUser(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
