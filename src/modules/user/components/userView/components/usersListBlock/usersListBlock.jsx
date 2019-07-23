import React from 'react';

import {UserBlock} from "../userBlock";

import styles from './usersListBlock.module.scss';

const UsersListBlockComponent = ({users, onDeleteUser}) =>  (
  <ul className={styles.usersListBlock}>
    { users.map((user) => (
        <li key={user.id} >
          <UserBlock />
          <button className={styles.deleteUser} onClick={() => onDeleteUser(user.id)}>remove user</button>
        </li>
      )) }
  </ul>
);

export default UsersListBlockComponent;
