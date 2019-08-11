const getUsers = (state) => {
  return state.user.users
};

const getCurrentUser = (state, id) => {
  const index = state.user.users.findIndex((user) => user.id === id)
  // state.user.users.filter((user) => user.id === id)

  return state.user.users[index]
};

const getValue = (state, field) => {
  const index = state.user.users.findIndex((user) => user.id === id)
  // state.user.users.filter((user) => user.id === id)

  return state.user.users[index]
};


export{
  getUsers,
  getCurrentUser,
  getValue
}
