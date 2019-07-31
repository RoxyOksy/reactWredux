import React from "react";
import Button from '@material-ui/core/Button';
import Clear from "@material-ui/icons/Clear";

 const ControlCellComponent = ({onDeleteImage, id})=>{

  return (
    <Button fullWidth onClick={() => onDeleteImage(id)} color="secondary" variant="contained" >
      <Clear />
    </Button>

  )
};

export default ControlCellComponent
