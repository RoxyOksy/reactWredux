import React, {Component} from "react";

import {UserBlock} from "../components";

export default class UserBlockContainer extends Component {

  state = {
    image: null
  };



  render() {
    const {image} = this.state;

    return(
      <UserBlock image={image}/>
    )
  };

};
