import React from "react";
import Box from "@material-ui/core/Box";

import {FileUploaderField} from "../../fileUploaderField";
import {ImagePreviewField} from "../../imagePreviewField";

import styles from './imageField.module.scss';

const ImageFieldComponent = ({image, isFileUploaderVisible, onDelete, onLoadPreview}) => (
    <Box className={styles.imageField}>
      { isFileUploaderVisible ?
        <FileUploaderField onSelect={onLoadPreview}/> :
        <ImagePreviewField src={image} onDelete={onDelete}/> }
    </Box>
  );

export default ImageFieldComponent
