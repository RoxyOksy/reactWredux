import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    direction: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: '40px'
  },
  fabButton: {
    color: 'primary.contrastText',
    marginRight: '15px'
  }
}));

const AddImageBlockComponent = ({onAddImage}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Fab color="secondary" ria-label="add" className={classes.fabButton}
           onClick={onAddImage} >
        <AddIcon />
      </Fab>
      <Typography>Add picture</Typography>
    </Box>
  );
};

export default AddImageBlockComponent;
