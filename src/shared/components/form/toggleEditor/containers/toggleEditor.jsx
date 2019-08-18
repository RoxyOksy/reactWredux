import React from "react";

import {ToggleEditor} from "../components";

const ToggleEditorContainer = ({id, fieldName, InputField, Typography, ConfirmationButton, isEditState, handleChangeEditState}) => {
  return (
    <ToggleEditor
      isEditState={isEditState}

      InputField={InputField}
      ConfirmationButton={ConfirmationButton}
      Typography={Typography}

      onChangeEditState={()=> handleChangeEditState(id, fieldName)}

    />
  )

};

export default ToggleEditorContainer
