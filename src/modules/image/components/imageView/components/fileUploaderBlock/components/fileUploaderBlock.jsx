import React from "react";

import styles from './fileUploaderBlock.module.scss';

const FileUploaderBlockComponent  = ({fileInputRef, onFileUploaderClick, onChangeFile}) => (
  <div className={styles.fileUploader}>
    <button className={styles.buttonOpen} onClick={onFileUploaderClick}>Open</button>
    <input hidden ref={fileInputRef} type="file" accept=".png, .jpg, .jpeg" onChange={onChangeFile} />
  </div>
);

export default FileUploaderBlockComponent
