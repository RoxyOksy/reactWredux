import React from 'react';

import {RadioField} from '../components'

const RadioFieldContainer = ({id, name, label, value, radioButtons, handleChangeValue}) => {
  return (
    <RadioField label={label}
                value={value}

                radioButtons={radioButtons}

                handleChangeValue={(e) => handleChangeValue(id, name, e.target.value)}/>
  );
};

export default RadioFieldContainer
