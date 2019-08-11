import uid from "uid";

const addUser = () => {
  const newUser = {id: uid()};

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

export {
  addUser,
  deleteUser
}
