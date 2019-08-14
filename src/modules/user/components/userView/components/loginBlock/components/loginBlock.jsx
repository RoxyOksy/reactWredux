import React from "react";
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Check from '@material-ui/icons/Check';
import {makeStyles} from '@material-ui/core/styles';

import {InputField, ToggleEditor} from '../../../../../../../shared/components';

import {translate} from "../../../../../../../shared/helpers";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
}));

const LoginBlockComponent = (props) => {
  const classes = useStyles();

  const {userInfo: {login}, handleChangeValue} = props;

  return (
    <Box className={classes.root}>
      <ToggleEditor
        InputField={()=> <InputField type={'text'}
                                     label={translate('FORM_FIELD.LOGIN.LABEL')}
                                     value={login}
                                     handleChangeValue={handleChangeValue}

        /> }
        ConfirmationButton={ (props) => <Button onClick={props.onClick}><Check/></Button> }
        Typography={ (props) => <Typography onClick={props.onClick}>{login}</Typography> }
      />
    </Box>
  );
};

export default LoginBlockComponent
