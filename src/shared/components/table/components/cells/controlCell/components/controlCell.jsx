import React from "react";
import get from "lodash/get";
import uid from "uid";

import {Button} from "../../../../../form/button";

 const ControlCellComponent = ({params, data}) => {
  return (
    get(params,'buttons',[]).map((buttonData) => {
    return <Button {...buttonData} onClick={ get(buttonData,'onClick',() => null).bind(null, get(data,'id'))} key={uid()}/>
  })
  )
};

export default ControlCellComponent
