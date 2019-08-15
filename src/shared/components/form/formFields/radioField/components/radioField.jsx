import React from 'react';
import get from "lodash/get";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
          {/*/!*needs to be mapped*!/*/}
          {/*<FormControlLabel value="female" control={<Radio/>} label={label} />*/}
          {/*<FormControlLabel value="male" control={<Radio/>} label={label}/>*/}
          {/*/!*END*!/*/}

          { radioButtons.map((radioButton) => <FormControlLabel key={value}
                                                                label={get(radioButton,'label', translate('TEXT.NO_DATA'))}
                                                                checked={get(radioButton,'isDefault', false)}
                                                                control={<Radio/>}
          /> )}

        </RadioGroup>
      </FormControl>
  );
};

export default RadioFieldComponent
