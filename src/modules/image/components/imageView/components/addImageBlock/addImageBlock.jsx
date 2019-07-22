import React from "react";

import styles from './addImageBlock.module.scss';

const Index = ({onAddItem}) => {
  return(
    <div>
      <button className={styles.addImageBlock} onClick={onAddItem}>+</button>
      <span>One more picture</span>
    </div>
  );

};

export default Index;
