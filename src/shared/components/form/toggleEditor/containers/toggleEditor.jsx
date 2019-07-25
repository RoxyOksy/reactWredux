import React, {Component} from "react";

import {ToggleEditor} from "../components";

export default class ToggleEditorContainer extends Component {
  state = {
    isEditState: true
  };

  handleChangeEditState = (isEditState) =>  this.setState({  isEditState});

  render() {
    const {InputField, Typography, ConfirmationButton} = this.props;
    const {isEditState} = this.state;

    return(
      <ToggleEditor
        isEditState={isEditState}

        InputField={InputField}
        ConfirmationButton={ConfirmationButton}
        Typography={Typography}

        onChangeEditState={this.handleChangeEditState}
      />
    )
  };

};
