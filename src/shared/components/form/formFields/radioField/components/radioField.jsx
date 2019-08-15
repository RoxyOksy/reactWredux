import React from 'react';
import get from "lodash/get";
import uid from "uid";

import {Radio, RadioGroup, FormControl, FormControlLabel, FormLabel} from "shared/vendors";

import {translate} from 'shared/helpers';

const RadioFieldComponent = ({label, value, radioButtons, handleChangeValue}) => {
  return (
      <FormControl component="fieldset">
        <FormLabel component="legend">{label}</FormLabel>
        <RadioGroup
          aria-label={label}
          name="gender"
          value={value}
          onChange={handleChangeValue}
        >
          { radioButtons.map((radioButton) => <FormControlLabel key={uid()}
                                                                label={get(radioButton,'label', translate('TEXT.NO_DATA'))}
                                                                checked={get(radioButton,'isDefault', false)}
                                                                control={<Radio/>}
          /> )}

        </RadioGroup>
      </FormControl>
  );
};

export default RadioFieldComponent
