import React from "react";

import {InputField} from '../../../../../../../shared/components';

import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import Check from '@material-ui/icons/Check';
import {makeStyles} from '@material-ui/core/styles';

import styles from './loginBlock.module.scss';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    border: '1px solid yellow'
  },
  input: {
    // margin: '25px',
    // border: '1px solid red'
  }
}));

const LoginBlockComponent = () => {
  const classes = useStyles();

  // console.log(this.props);

  return (

    <Box className={classes.root}>
      <InputField type={'text'}
                  label={'login'} />
      <Button><Check/></Button>
      <span>{1}</span>
    </Box>
  );
};

export default LoginBlockComponent
