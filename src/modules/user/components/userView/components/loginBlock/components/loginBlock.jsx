import React from "react";

import {InputField, ToggleEditor} from '../../../../../../../shared/components';

import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import Check from '@material-ui/icons/Check';
import {makeStyles} from '@material-ui/core/styles';

import styles from './loginBlock.module.scss';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
}));

const LoginBlockComponent = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <ToggleEditor
        InputField={ ()=> <InputField type={'text'}
                                  label={'login'}
        />}
        ConfirmationButton={ (props)=> <Button onClick={props.onClick}><Check/></Button>}
        Typography={(props)=>   <span onClick={props.onClick}>{1}</span>}
      />

    </Box>
  );
};

export default LoginBlockComponent
