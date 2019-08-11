import uid from "uid";

const addUser = () => {
  const newUser = {
    id: uid(),
    isLoginEditable: true,
    login: 'ddd',
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

const toggleVisability = (login, isLoginEditable) => {
  debugger
  if(login) {
      let editable = !(isLoginEditable)
    }

  return {
    type: 'EDIT_LOGIN',
    payload: this.editable
  };

}


export {
  addUser,
  deleteUser,
  toggleVisability
}
