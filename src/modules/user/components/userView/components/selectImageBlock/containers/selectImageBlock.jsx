import React, {Component} from "react";

import {SelectImageBlock} from "../components";

export default class SelectImageContainer extends Component {

  render() {
    return(
      <SelectImageBlock handleItemChange={this.handleItemChange} />
    )
  };

};
