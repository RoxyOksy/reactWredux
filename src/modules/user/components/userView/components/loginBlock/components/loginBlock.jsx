import React from "react";

import {Typography, Box, Button, Check, makeStyles} from "shared/vendors";

import {translate} from "shared/helpers";

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
