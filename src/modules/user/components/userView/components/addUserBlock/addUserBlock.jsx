import React from "react";

import styles from './addUserBlock.module.scss';

const AddUserBlockComponent = ({onAddUser}) => {
  return(
    <div>
      <button className={styles.addUserBlock} onClick={onAddUser}>+</button>
      <span>Add new user</span>
    </div>
  );

};

export default AddUserBlockComponent;
