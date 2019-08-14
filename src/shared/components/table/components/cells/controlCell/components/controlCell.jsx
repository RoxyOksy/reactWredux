import React from "react";
import get from "lodash/get";

import {Button} from "../../../../../form/button";

 const ControlCellComponent = ({params, data}) => {

  return get(params,'buttons',[]).map((buttonData) => {
    return <Button {...buttonData} onClick={ get(buttonData,'onClick',() => null).bind(null, get(data,'id'))} key={data.id}/>
  })
};

export default ControlCellComponent
