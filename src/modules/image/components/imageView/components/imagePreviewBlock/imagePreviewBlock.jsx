import React from 'react';

import styles from './imagePreviewBlock.module.scss';

const ImagePreviewComponent = ({src, onDelete}) => (
  <div className={styles.imagePreviewBlock}>
    <img src={src} alt="my_pic"/>
    <button onClick={onDelete}> X </button>
  </div>
);

export default ImagePreviewComponent;
