import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import makeStyles from "@material-ui/core/styles/makeStyles";

import {withTranslation} from 'react-i18next';

import '../../../../../../locale/i18n';

const useStyles = makeStyles(theme => ({
  root: {},
  button: {
    margin: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  }
}));

const FileUploaderFieldComponent  = ({fileInputRef, onFileUploaderClick, onChangeFile, t}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Button variant="contained" color="primary" className={classes.button}
              onClick={onFileUploaderClick}>
        {t('BUTTON.UPLOAD')}
        <CloudUploadIcon className={classes.rightIcon} />
      </Button>
      <input hidden ref={fileInputRef} type="file" accept=".png, .jpg, .jpeg" onChange={onChangeFile} />
    </Box>
  );
};

export default withTranslation()(FileUploaderFieldComponent)
