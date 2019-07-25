import React from "react";
import Box from "@material-ui/core/Box";

import {makeStyles} from '@material-ui/core/styles';

const ToggleEditorComponent = ({
                                 isEditState,
                                 InputField,
                                 ConfirmationButton,
                                 Typography,
                                 onChangeEditState
                               }) => {


  return (
    <Box display={'flex'} alignItems={'center'} flexDirection={'row'} m={1}>
      {isEditState?<>
        <InputField />
        <ConfirmationButton onClick={()=>onChangeEditState(false)} />
      </>:<Typography onClick={()=>onChangeEditState(true)}  />}
    </Box>
  );
};

export default ToggleEditorComponent
