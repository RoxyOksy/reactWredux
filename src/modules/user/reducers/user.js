import get from 'lodash/get';
import filter from 'lodash/filter';

const initialState = {
  users: [],
  some_data: ''
};

export default function userReducer(state = initialState, action) {
  const {users} = state;

  const fieldName = get(action, 'payload.fieldName', '');

  const getUserEditableState = (user) => {
    if(filter(user, (field) => field.value && field.isEditable===true).length!== 0) {
      user.isUserEditableState = true;
    } else {
      user.isUserEditableState = false;
    };
  };

  switch (action.type) {
    case 'ADD_USER' :
      return {
        ...state,
        users: [...users, action.payload]
      };

    case 'DELETE_USER' :
      const newState = [...users.filter((user) => user.id !== action.payload)];

      return {
        ...state,
        users: newState
      };

    case 'CONFIRM_USER' :
      return {
        ...state,
        users: users.map((user) => {
          if(user.id === action.payload) {
            filter(user, (field) => {
              if(field.isEditable!==undefined) {
                field.isEditable = false
              }
            })
          }
          return user
        })
      };

    case 'EDIT_FORM_FIELD_VALUE':
      return {
        ...state,
        users: users.map((user) => {
          if(user.id === action.payload.id) {
            user[fieldName].value = action.payload.value;
            getUserEditableState(user);
          }
          return user
        })
      };

    case 'EDIT_FORM_FIELD_STATE':
      return {
        ...state,
        users: users.map((user) => {
          if(user.id === action.payload.id) {
            user[fieldName].isEditable = !user[fieldName].isEditable;
            getUserEditableState(user);
          }
          return user
        })
      };

    default:
      return state
  }
}
