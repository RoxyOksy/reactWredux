import React from "react";
import get from "lodash/get";
import {translate} from "../../../../../../helpers";

const ContentCellComponent = (props) => {
 return <>
  {get(props,'params.children',() => translate('TEXT.NO_DATA'))(props)}
 </>
};

export default ContentCellComponent
