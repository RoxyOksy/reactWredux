import React from "react";

import {InputField} from "../components";

const InputFieldContainer = ({type, label, value, handleChangeValue}) => {
    return (
      <InputField
        type={type}
        label={label}
        value={value}

        // handleChangeValue={(e) => handleChangeValue(e.target.value)}
      />
    )
};

export default InputFieldContainer
