import React from "react";
import Fab from "@material-ui/core/Fab";
import Clear from "@material-ui/icons/Clear";

 const ControlCellComponent = ({onDeleteImage, id})=>{

  return (
    <Fab color="secondary"
         onClick={() => onDeleteImage(id)}>
      <Clear />
    </Fab>
  )
};

export default ControlCellComponent
