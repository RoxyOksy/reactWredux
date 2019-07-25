import React, {Component} from "react";

import {SelectField} from "../components";

export default class SelectFieldContainer extends Component {
  state = {
    value:  ''
  };

  handleItemChange = (value)=>{
    this.setState(prevState => ({
      ...prevState,
      value,
    }))
  }


  render() {
    const {name, items, inputLabel, defaultValue,isSelectFieldClearable} = this.props;
    const { value} = this.state;

    return(
      <SelectField
        isSelectFieldClearable={isSelectFieldClearable}
        inputLabel={inputLabel}
        defaultValue={defaultValue}
        name={name}
        value={value}

        items={items}

        onItemChange={this.handleItemChange} />
    )
  };

};
