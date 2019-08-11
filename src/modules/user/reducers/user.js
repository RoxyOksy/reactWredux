const initialState = {
  users: [
    {
      id: 'user1',
      info: {
        login: '',
        password: '',
        position: '',
        gender: '',
        avatar: ''
      }
    },
  ],
  some_data: ''
};

export default function userReducer(state = initialState, action) {
  const {users} = state;

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

    //
    // case 'SET_LOGIN':
    //   return {
    //     ...state,
    //     login: action.payload
    //   };
    //
    // case 'SET_PASSWORD':
    //   return {
    //     ...state,
    //     password: action.payload
    //   };

    default:
      return state
  }
}
