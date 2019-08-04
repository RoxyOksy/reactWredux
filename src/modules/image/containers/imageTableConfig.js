import Clear from "@material-ui/icons/Clear";
import AddIcon from '@material-ui/icons/Add';

import {COLORS} from '../../../constants'
import {BUTTON_SHAPE} from '../../../constants'

export const getImageTableConfig = ({onDeleteItem,onAddItem})=> ({
  headColumns: [
    { id: 'counter', type: 'counterCell', label: '#' },
    { id: 'imageUploader', type: 'imageUploaderCell', label: 'Image Uploader' },
    { id: 'control', type: 'controlCell', label: 'Control', params:{
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
    label: 'add',
    icon: AddIcon,
    background: COLORS.PRIMARY_COLOR,
    color: COLORS.PRIMARY_CONTRAST_COLOR,
    size: 'medium',
    shape: BUTTON_SHAPE.RECTANGLE
  },
  isTableWithRemoveItemButton: true,

});
