import React from "react";

import {InputField, ToggleEditor} from '../../../../../../../shared/components';

import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Check from '@material-ui/icons/Check';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
}));

const LoginBlockComponent = (props) => {
  const classes = useStyles();

  const {login} = props;

  return (
    <Box className={classes.root}>
      <ToggleEditor
        InputField={()=> <InputField type={'text'}
                                     label={'login'}
                                     handleChangeValue={ (value) => props.handleChangeValue(value)}
        /> }
        ConfirmationButton={ (props) => <Button onClick={props.onClick}><Check/></Button> }
        Typography={ (props) => <Typography onClick={props.onClick}>{login}</Typography> }
      />

    </Box>
  );
};

export default LoginBlockComponent
