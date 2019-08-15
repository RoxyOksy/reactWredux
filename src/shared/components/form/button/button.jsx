import React from "react";

import {Typography, Box, Button, Fab, makeStyles, lighten} from "shared/vendors";

const useStyles = makeStyles((theme) => {

  return ({
  root: {
    display: 'flex',
    direction: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '35px'
  },
  button: {
    background: (props)=>{
      return props.background
    },
    color: (props)=>{
      return props.color
    },
    '&:hover': {
      background: (props)=>{
        return  lighten(props.background, 0.2)
      },
    }
  }
})});

const ButtonComponent = ({onClick, shape, label, icon, fullWidth, color, background, size, t}) => {
  const classes = useStyles({color, background});
  const getButtonForm = (formType)=>{
    const IconButton = icon;

    switch(formType) {
      case 'rectangle' :
        return (
          <Button color="primary" variant="contained" size={size} fullWidth={fullWidth} className={classes.button} onClick={onClick}>
            { icon&&<IconButton/> }
            { label&&<Typography>{label}</Typography> }
          </Button>
        );
      case 'circle' :
        return (
          <Fab onClick={onClick} color="primary" className={classes.button}>
            { icon&&<IconButton/> }
            { label&&<Typography>{label}</Typography> }
          </Fab>
        );
      default: return (
        <Button color="primary" variant="contained" fullWidth={fullWidth} className={classes.button} onClick={onClick}>
          { icon&&<IconButton/> }
          { label&&<Typography>{label}</Typography> }
        </Button>
      );
    }
  };

  const ButtonForm = getButtonForm(shape);

  return (
    <Box className={classes.root}>
      {ButtonForm}
    </Box>
  );
};

export default ButtonComponent
