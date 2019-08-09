import React from "react";
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {lighten} from "@material-ui/core/styles";
import { withTranslation } from 'react-i18next';

import '../../../../locale/i18n';

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
            { label&&<Typography>{t(label)}</Typography> }
          </Button>
        );
      case 'circle' :
        return (
          <Fab onClick={onClick} color="primary" className={classes.button}>
            { icon&&<IconButton/> }
            {label&&<Typography>{t(label)}</Typography> }
          </Fab>
        );
      default: return (
        <Button color="primary" variant="contained" fullWidth={fullWidth} className={classes.button} onClick={onClick}>
          { icon&&<IconButton/> }
          { label&&<Typography>{t(label)}</Typography> }
        </Button>
      );
    }
  };

  const ButtonForm = getButtonForm(shape)

  return (
    <Box className={classes.root}>
      {ButtonForm}
    </Box>
  );
};

export default withTranslation()(ButtonComponent)