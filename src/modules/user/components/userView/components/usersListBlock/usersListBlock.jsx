import React from 'react';

import {UserBlock} from "../userBlock";

import styles from './usersListBlock.module.scss';

const UsersListBlock = ({users, onDeleteUser}) => {

  const elements = users.map((user) => {
    return (
      <li key={user.id} >
        <UserBlock />
        <button className={styles.deleteUser} onClick={() => onDeleteUser(user.id)}> remove user </button>
      </li>
    );
  });

  return (
    <ul className={styles.usersListBlock}>
      { elements }
    </ul>
  )
};

export default UsersListBlock;
