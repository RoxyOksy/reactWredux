import Clear from "@material-ui/icons/Clear";
import AddIcon from '@material-ui/icons/Add';
import { useTranslation} from 'react-i18next';

import {COLORS} from '../../../constants';
import {BUTTON_SHAPE} from '../../../constants';

export const getImageTableConfig = ({onDeleteItem,onAddItem})=> ({
  headColumns: [
    { id: 'counter', type: 'counterCell', label: '#' },
    { id: 'imageUploader', type: 'imageUploaderCell', label: 'TABLE_HEAD_UPLOAD' },
    { id: 'control', type: 'controlCell', label: 'TABLE_HEAD_CONTROL', params:{
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
    label: 'ADD_TEXT',
    icon: AddIcon,
    background: COLORS.PRIMARY_COLOR,
    color: COLORS.PRIMARY_CONTRAST_COLOR,
    size: 'medium',
    shape: BUTTON_SHAPE.RECTANGLE
  },
  isTableWithRemoveItemButton: true,

});
