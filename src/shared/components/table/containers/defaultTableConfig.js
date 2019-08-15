import React from "react";
import get from "lodash/get";

import {Button} from "../../form/button";
import {CounterCell} from "../components/cells/counterCell";
import {ContentCell} from "../components/cells/contentCell";
import {ControlCell} from "../components/cells/controlCell";

export const getDefaultTableConfig = (scope) => {
  return {
    cellComponents: {
      counterCell: CounterCell,
      contentCell: ContentCell,
      controlCell: ((props) => { return <ControlCell {... props} /> })
    },
    addItemButton: get(scope, 'props.tableConfig.tableWithAddItemButton') && ((props) => {
      return <Button {... props} />
    })
  }
};

