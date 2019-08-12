import uid from "uid";

const addUser = () => {
  const unique = uid()
  const newUser = {
    id: unique,
    isLoginEditable: true,
    login: '',
    password: '',
    position: '',
    gender: '',
    avatar: ''
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

const editLogin = (login, id) => {
  return {
    type: 'EDIT_LOGIN',
    payload: {login, id}
  };
};


export {
  addUser,
  deleteUser,
  editLogin
}
