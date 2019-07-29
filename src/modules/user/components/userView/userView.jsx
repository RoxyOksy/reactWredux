import React from 'react';
import Box from '@material-ui/core/Box';

import {PageTitle} from "../../../../shared/components";
import {UsersListBlock} from "./components/usersListBlock";
import {AddUserBlock} from "./components/addUserBlock";

import '../../../../app/app.module.scss';

const UserViewComponent = ({users, onAddUser, onDeleteUser}) => (
    <Box className="App">
      <PageTitle componentStyle={{theme:'darken', size: 'big'}} title={'Users'} variant={'h1'} />
      <AddUserBlock onAddUser={onAddUser}/>
      <UsersListBlock users={users} onDeleteUser={onDeleteUser}/>
    </Box>
  );

export default UserViewComponent
