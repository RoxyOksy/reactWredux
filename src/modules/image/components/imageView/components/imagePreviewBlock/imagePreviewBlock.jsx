import React from 'react';

import styles from './imagePreviewBlock.module.scss';

const Index = ({src, onDelete}) => {
  return (
    <div className={styles.imagePreviewBlock}>
      <img src={src} alt="my_pic"/>
      <button onClick={onDelete}> X </button>
    </div>
   );
};

export default Index;
