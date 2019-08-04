import React from "react";
import get from "lodash/get";

import {CounterCell} from "../components/cells/counterCell";
import {ControlCell} from "../components/cells/controlCell";
import {ImageUploaderCell} from "../components/cells/imageUploaderCell";
import {Button} from "../../form/button";

export const getDefaultTableConfig = (scope) => {
  return {
    cellComponents: {
      counterCell: CounterCell,
      controlCell: ((props) => { return <ControlCell {... props} /> }),
      imageUploaderCell: ImageUploaderCell
    },
    addItemButton: get(scope, 'props.tableConfig.tableWithAddItemButton') && ((props) => {
      return <Button {... props} />
    })
  }
};

