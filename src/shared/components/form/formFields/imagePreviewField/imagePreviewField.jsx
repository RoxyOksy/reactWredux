import React from 'react';

import {Box, Button, Clear, makeStyles} from "shared/vendors";

const useStyles = makeStyles(theme => ({
  root: {

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',

  },
  imageBox: {
    display: 'flex',
    justifyContent: 'center',

    flexGrow: '1'
  },
  image: {
    maxWidth: '400px',
  },
  button: {
    width: '10px',
  }
}));

const ImagePreviewFieldComponent = ({imageSrc, onDelete}) => {
  const classes = useStyles();

  return (
  <Box className={classes.root}>
    <Box className={classes.imageBox}>
      <img src={imageSrc} alt="my_pic" className={classes.image}/>
    </Box>
    <Button className={classes.button} onClick={onDelete} variant="outlined" >
      <Clear color='primary'/>
    </Button>
  </Box>
  );
};

export default ImagePreviewFieldComponent;
