import React from "react";

import styles from './addImageBlock.module.scss';

const AddImageBlockComponent = ({onAddImage}) => (
  <div>
    <button className={styles.addImageBlock} onClick={onAddImage}>+</button>
    <span>One more picture</span>
  </div>
);

export default AddImageBlockComponent;
