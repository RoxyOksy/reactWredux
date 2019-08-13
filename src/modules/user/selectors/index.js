import get from 'lodash/get'
import { createSelector } from 'reselect'

const getUsers = (state) => get(state,'user.users',[]);

// const getValue = (state, field, id) => {
//   const index = state.user.users.findIndex((user) => user.id === id);
//
//   return state.user.users[index][field]
// };

export default createSelector(
  [getUsers],
  (users) => {
    return {users}
  }
);
