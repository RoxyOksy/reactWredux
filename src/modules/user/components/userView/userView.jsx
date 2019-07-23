import React from 'react';

import {UsersListBlock} from "./components/usersListBlock";
import {AddUserBlock} from "./components/addUserBlock";

import '../../../../app/app.module.scss';

const UserViewComponent = ({users, onAddUser, onDeleteUser}) => (
    <div className="App">
      <AddUserBlock onAddUser={onAddUser}/>
      <UsersListBlock users={users} onDeleteUser={onDeleteUser}/>
    </div>
  );

export default UserViewComponent
