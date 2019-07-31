import {CounterCell} from "../components/cells/counterCell";
import {ControlCell} from "../components/cells/controlCell";
import {ImageUploaderCell} from "../components/cells/imageUploaderCell";

export const getDefaultTableConfig = (scope) => {
  return {
    onGridReady: (params) => {
      console.log(333);
      console.log(params);
      scope.gridApi = params.api
      scope.gridApi.sizeColumnsToFit()
      scope.gridApi.resetRowHeights()
    },
    frameworkComponents: {
      counterCell: CounterCell,
      controlCell: ControlCell,
      imageUploaderCell: ImageUploaderCell
    }
  }
};
