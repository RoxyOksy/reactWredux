import React from "react";

import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formControl: {
    width: '100%',
  },
  input: {

  }
}));

const InputFieldComponent = ({type, label, value, handleChangeValue}) => {
  const classes = useStyles();

  return (
    <Box display={'flex'} alignItems={'center'} flexDirection={'row'} component="span" m={1}>

      <FormControl className={classes.formControl}>

        <TextField
          className={classes.input}

          type={type}
          label={label}
          value={value}

          onChange={handleChangeValue}
        />

     </FormControl>

  </Box>
  );
};

export default InputFieldComponent
