import React from "react";

import {InputField} from "../components";

const InputFieldContainer = ({id, type, label, name, value, handleChangeValue}) => {
    return (
      <InputField type={type}
                  label={label}
                  value={value}

                  handleChangeValue={(e) => handleChangeValue(id, name, e.target.value)}
      />
    )
};

export default InputFieldContainer
