import React from "react";
import get from "lodash/get";

const ContentCellComponent = (props)=>{
 return <>
  {get(props,'params.children',()=>('TEXT.NO_DATA'))(props)}
 </>
};

export default ContentCellComponent
