import React from 'react';
import Card from "@material-ui/core/Card";
import Fab from "@material-ui/core/Fab";
import Clear from "@material-ui/icons/Clear";

import styles from './imagePreviewBlock.module.scss';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: '15px',
  },
  image: {
    maxWidth: '400px',
    maxHeight: '200px'
  },
  fabButton: {
    marginLeft: '15px'
  }
}));

const ImagePreviewComponent = ({src, onDelete}) => {
  const classes = useStyles();

  return (
  <Card className={classes.root}>
    <img src={src} alt="my_pic" className={classes.image}/>
    <Fab color="secondary" className={classes.fabButton}
         onClick={onDelete}>
      <Clear/>
    </Fab>
  </Card>
  );
};

export default ImagePreviewComponent;
