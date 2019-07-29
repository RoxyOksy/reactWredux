import React from 'react';
import Box from "@material-ui/core/Box";

import {UserBlock} from "../userBlock";

import styles from './usersListBlock.module.scss';

const UsersListBlockComponent = ({users, onDeleteUser}) =>
    <ul className={styles.usersListBlock}>
      { users.map((user) => (
        <li key={user.id}>
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'}>
            <UserBlock />
            <button className={styles.deleteUser} onClick={() => onDeleteUser(user.id)}>remove user</button>
          </Box>
        </li>
      )) }
    </ul>

export default UsersListBlockComponent;
