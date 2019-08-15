import React from "react";

import {Box, Button, CloudUpload, makeStyles} from "shared/vendors";

import {translate} from "shared/helpers";

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
        {translate('BUTTON.UPLOAD')}
        <CloudUpload className={classes.rightIcon} />
      </Button>
      <input hidden ref={fileInputRef} type="file" accept=".png, .jpg, .jpeg" onChange={onChangeFile} />
    </Box>
  );
};

export default FileUploaderFieldComponent
