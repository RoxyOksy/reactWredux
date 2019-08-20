import React from "react";
import get from "lodash/get";

import {ImageField} from "../components";

const ImageFieldContainer = ({data, handleChangeValue}) => {
  return(
    <ImageField id={get(data,'id',null)}
                imageSrc={get(data,'imageSrc',null)}

                onDelete={handleChangeValue}
                onLoadPreview={handleChangeValue} />
  )
};

export default ImageFieldContainer
