import React, {Component} from 'react';

import {PositionBlock} from "../components/";

export default class PositionBlockContainer extends Component {

  state = {
    position: '',
    isPositionEditable: true
  };

  handleToggleVisibility = () => {
    this.setState({
      isPositionEditable: false,
    });
  };

  handleChangeValue = (e) => {
    this.setState({
      position: e.target.value,
    });
  };

  render() {
    const {position, isPositionEditable} = this.state;

    return (
      <PositionBlock
        isPositionEditable={isPositionEditable}

        position={position}

        handleToggleVisibility={this.handleToggleVisibility}
        handleChangeValue={this.handleChangeValue}
      />
    );
  }

};
