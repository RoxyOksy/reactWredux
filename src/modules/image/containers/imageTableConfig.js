import Clear from "@material-ui/icons/Clear";
import AddIcon from '@material-ui/icons/Add';

import {COLORS} from '../../../constants';
import {BUTTON_SHAPE} from '../../../constants';
import {translate} from '../../../shared/helpers';

export const getImageTableConfig = ({onDeleteItem,onAddItem,getImageFormBlock})=> ({
  headColumns: [
    { id: 'counter', type: 'counterCell', label: translate('TABLE.COLUMNS.COUNTER') },
    { id: 'content', type: 'contentCell', label: translate('TABLE.COLUMNS.UPLOAD'), params:{
        children: (props)=>getImageFormBlock(props)
      }},
    { id: 'control', type: 'controlCell', label: translate('TABLE.COLUMNS.CONTROL'), params:{
      buttons:[
        {
          fullWidth: true,
          onClick: onDeleteItem,
          label: null,
          icon: Clear,
          background: COLORS.SECONDARY_COLOR,
          color: COLORS.PRIMARY_CONTRAST_COLOR,
          size: 'small',
          shape: BUTTON_SHAPE.RECTANGLE
        }
      ]
      } }
  ],
  tableWithAddItemButton:  {
    fullWidth: false,
    onClick: onAddItem,
    label: translate('BUTTON.ADD'),
    icon: AddIcon,
    background: COLORS.PRIMARY_COLOR,
    color: COLORS.PRIMARY_CONTRAST_COLOR,
    size: 'medium',
    shape: BUTTON_SHAPE.RECTANGLE
  },
  isTableWithRemoveItemButton: true,

});
