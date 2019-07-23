import React from "react";

import {FileUploaderBlock} from "../../fileUploaderBlock";
import {ImagePreviewBlock} from "../../imagePreviewBlock";

import styles from './imageBlock.module.scss';

const ImageBlockComponent = ({image, isFileUploaderVisible, onDelete, onLoadPreview}) => (
    <div className={styles.imageBlock}>
      { isFileUploaderVisible ?
        <FileUploaderBlock onSelect={onLoadPreview}/> :
        <ImagePreviewBlock src={image} onDelete={onDelete}/> }
    </div>
  );

export default ImageBlockComponent
