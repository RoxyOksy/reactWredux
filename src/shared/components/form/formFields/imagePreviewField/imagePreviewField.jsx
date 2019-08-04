import React from 'react';
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Clear from "@material-ui/icons/Clear";

import makeStyles from "@material-ui/core/styles/makeStyles";

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
    // maxHeight: '200px',

  },
  button: {
    width: '10px',
  }
}));

const ImagePreviewFieldComponent = ({src, onDelete}) => {
  const classes = useStyles();

  return (
  <Box className={classes.root}>
    <Box className={classes.imageBox}>
      <img src={src} alt="my_pic" className={classes.image}/>
    </Box>
    <Button className={classes.button} onClick={onDelete} variant="outlined" >
      <Clear color='primary'/>
    </Button>
  </Box>
  );
};

export default ImagePreviewFieldComponent;
