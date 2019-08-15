import React from "react";
import {Box} from "shared/vendors";

import {FileUploaderField} from "../../fileUploaderField";
import {ImagePreviewField} from "../../imagePreviewField";

import styles from './imageField.module.scss';

const ImageFieldComponent = (props) => {
  const {imageSrc, id, onDelete, onLoadPreview} = props;

  return(
    <Box className={styles.imageField}>
      { !imageSrc ?
        <FileUploaderField id={id} imageSrc={imageSrc} onSelect={onLoadPreview}/> :
        <ImagePreviewField imageSrc={imageSrc} onDelete={onDelete}/> }
    </Box>

)};

export default ImageFieldComponent
