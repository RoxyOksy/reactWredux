import get from 'lodash/get';
import filter from 'lodash/filter';

const initialState = {
  users: [],
  some_data: ''
};

export default function userReducer(state = initialState, action) {
  const {users} = state;

  const fieldName = get(action, 'payload.fieldName', '');

  const getUserEditableState = () => {
    return {
      ...state,
      users: users.map((user) => {
        const arrayUserHasEditableField = filter(user, (field) => field.value && field.isEditable===true);

        if(arrayUserHasEditableField.length !== 0) {
          user.isUserEditableState = true
        } else {
          user.isUserEditableState = false
        }
        return user
      })
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

    case 'EDIT_FORM_FIELD_VALUE':
      return {
        ...state,
        users: users.map((user) => {
          if(user.id === action.payload.id) {
            user[fieldName].value = action.payload.value
          }
          getUserEditableState();
          return user
        })
      };

    case 'EDIT_FORM_FIELD_STATE':
      return {
        ...state,
        users: users.map((user) => {
          if(user.id === action.payload.id) {
            user[fieldName].isEditable = !user[fieldName].isEditable
          }
          getUserEditableState();
          return user
        })
      };

    default:
      return state
  }
}
