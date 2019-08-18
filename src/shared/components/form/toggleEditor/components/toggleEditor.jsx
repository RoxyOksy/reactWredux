import React from "react";
import Box from "@material-ui/core/Box";

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
}));

const ToggleEditorComponent = ({
                                 isEditState,
                                 InputField,
                                 ConfirmationButton,
                                 Typography,

                                 onChangeEditState
                               }) => {

  const classes = useStyles();

  return (
    <Box m={1} className={classes.root}>
      {isEditState ? <>
        <InputField />
        <ConfirmationButton onClick={onChangeEditState}/>
      </> : <Typography onClick={onChangeEditState}  />}
    </Box>
  );
};

export default ToggleEditorComponent
