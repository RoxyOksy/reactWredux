import React from "react";
import {get} from "lodash";

import {SelectField} from "../components";

const SelectFieldContainer  = ({id, name, label, value, defaultValue, isSelectFieldClearable, handleChangeValue}) => {

  // !!-- NEEDS TO BE CHANGED TO REAL ITEMS --!!
 const items = [
   {
     value: 1,
     text: 'value1',
     image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAYJJREFUSIntlD1LA0EQhp9ZJQZiYSN+4SeCWFmnt9dKaxHBTtTGJoUIJoX+hqCVWGjA0sJ/YCFEESEIgoUggnimSG7HQrnkkmA8c4kIme6d3dmHmd19hUxyHWQH1RitCBEHNCFkUm8tg5bBTcuhAKox03LoV3SGeprwgtUrjNyAvINGQbqBWVQHwweLFkH26evaJr6Rr1rPJI+AxSaAzTJzW4dBShq/Y5XzoFAIo+MOOajKZY8j3OWmwPQAYN1eJGywlaxPX6Sj3OYuEZ0G9zMn1WWNjzomdz79+hT/hH4fjYOHRgs+LfIjQ/pHBiJyj6XUZf5FfeuqDloxfuwoIhHfMZwm/YV1wZER5jcfAtWc7D4iMlCeav6oL9JRjOmvTDcf/PY8hmrVh2o+WIvjtdLBH5cW9sikHE/PTawgC66nz1IzuKx52trJWg7yC+fSBcqf4zWreBYFqBlG3aXShhq2xR/+4za4DW6DQwSLOPW3BQhraztGeYg4BjQROrwOFDTxARHNbtQc+B7hAAAAAElFTkSuQmCC'
   },
   {
     value: 2,
     text: 'value2',
     image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAYJJREFUSIntlD1LA0EQhp9ZJQZiYSN+4SeCWFmnt9dKaxHBTtTGJoUIJoX+hqCVWGjA0sJ/YCFEESEIgoUggnimSG7HQrnkkmA8c4kIme6d3dmHmd19hUxyHWQH1RitCBEHNCFkUm8tg5bBTcuhAKox03LoV3SGeprwgtUrjNyAvINGQbqBWVQHwweLFkH26evaJr6Rr1rPJI+AxSaAzTJzW4dBShq/Y5XzoFAIo+MOOajKZY8j3OWmwPQAYN1eJGywlaxPX6Sj3OYuEZ0G9zMn1WWNjzomdz79+hT/hH4fjYOHRgs+LfIjQ/pHBiJyj6XUZf5FfeuqDloxfuwoIhHfMZwm/YV1wZER5jcfAtWc7D4iMlCeav6oL9JRjOmvTDcf/PY8hmrVh2o+WIvjtdLBH5cW9sikHE/PTawgC66nz1IzuKx52trJWg7yC+fSBcqf4zWreBYFqBlG3aXShhq2xR/+4za4DW6DQwSLOPW3BQhraztGeYg4BjQROrwOFDTxARHNbtQc+B7hAAAAAElFTkSuQmCC'
   },
   {
     value: 3,
     text: 'value3',
     image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAYJJREFUSIntlD1LA0EQhp9ZJQZiYSN+4SeCWFmnt9dKaxHBTtTGJoUIJoX+hqCVWGjA0sJ/YCFEESEIgoUggnimSG7HQrnkkmA8c4kIme6d3dmHmd19hUxyHWQH1RitCBEHNCFkUm8tg5bBTcuhAKox03LoV3SGeprwgtUrjNyAvINGQbqBWVQHwweLFkH26evaJr6Rr1rPJI+AxSaAzTJzW4dBShq/Y5XzoFAIo+MOOajKZY8j3OWmwPQAYN1eJGywlaxPX6Sj3OYuEZ0G9zMn1WWNjzomdz79+hT/hH4fjYOHRgs+LfIjQ/pHBiJyj6XUZf5FfeuqDloxfuwoIhHfMZwm/YV1wZER5jcfAtWc7D4iMlCeav6oL9JRjOmvTDcf/PY8hmrVh2o+WIvjtdLBH5cW9sikHE/PTawgC66nz1IzuKx52trJWg7yC+fSBcqf4zWreBYFqBlG3aXShhq2xR/+4za4DW6DQwSLOPW3BQhraztGeYg4BjQROrwOFDTxARHNbtQc+B7hAAAAAElFTkSuQmCC'
   },
 ];
// !!-- END --!!

    return(
      <SelectField
        isSelectFieldClearable={isSelectFieldClearable}
        label={label}
        defaultValue={defaultValue}
        name={name}
        value={value}

        items={items}

        onItemChange={(event) => handleChangeValue(id, name, get(event,'target.value', ''))}
      />
    )
};

export default SelectFieldContainer
