import React from "react";
import get from "lodash/get";

import {CounterCell} from "../components/cells/counterCell";
import {ControlCell} from "../components/cells/controlCell";
import {UserInfoCell} from "../components/cells/userInfoCell";
import {Button} from "../../form/button";

export const getDefaultTableConfig = (scope) => {
  return {
    cellComponents: {
      counterCell: CounterCell,
      contentCell: UserInfoCell,
      controlCell: ((props) => { return <ControlCell {... props} /> })
    },
    addItemButton: get(scope, 'props.tableConfig.tableWithAddItemButton') && ((props) => {
      return <Button {... props} />
    })
  }
};

