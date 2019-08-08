import React from "react";
import get from "lodash/get";

import {Button} from "../../../../../form/button";

 const ControlCellComponent = ({params, row}) => {

  return get(params,'buttons',[]).map((buttonData) => {
    return <Button {...buttonData} onClick={ get(buttonData,'onClick',() => null).bind(null, get(row,'id'))} key={row.id}/>
  })
};

export default ControlCellComponent
