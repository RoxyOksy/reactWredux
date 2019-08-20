import uid from "uid";

const addUser = () => {
  const newUser = {
    id: uid(),
    login: {value: '', isEditable: true},
    password: {value: '', isEditable: true},
    position: {value: '', isEditable: true},
    gender: {value: '', isEditable: true},
    avatar: {value: '', isEditable: true},
    isUserEditableState: false
  };

  return {
    type: 'ADD_USER',
    payload: newUser
  }
};

const deleteUser = (id) => {
  return {
    type: 'DELETE_USER',
    payload: id
  };
};

const confirmUser = (id) => {
  return {
    type: 'CONFIRM_USER',
    payload: id
  }
};

const editFormFieldValue = (id, fieldName, value) => {
  return {
    type: `EDIT_FORM_FIELD_VALUE`,
    payload: {id, fieldName, value}
  }
};

const editFormFieldState = (id, fieldName) => {
  return {
    type: `EDIT_FORM_FIELD_STATE`,
    payload: {id, fieldName}
  }
};

export {
  addUser,
  deleteUser,
  confirmUser,
  editFormFieldValue,
  editFormFieldState
}
