import {CounterCell} from "../components/cells/counterCell";
import {ControlCell} from "../components/cells/controlCell";
import {ImageUploaderCell} from "../components/cells/imageUploaderCell";

export const getDefaultTableConfig = (scope) => {
  return {
    cellComponents: {
      counterCell: CounterCell,
      controlCell: ControlCell,
      imageUploaderCell: ImageUploaderCell
    }
  }
};
