import {Add, Clear} from 'shared/vendors';
import {translate} from 'shared/helpers';

import {COLORS, BUTTON_SHAPE} from 'constants';

export const getImageTableConfig = ({onAddImageItem, onDeleteImageItem, getImageFormBlock})=> ({
  headColumns: [
    { id: 'counter', type: 'counterCell', label: translate('TABLE.COLUMNS.COUNTER') },
    { id: 'content', type: 'contentCell', label: translate('TABLE.COLUMNS.UPLOAD'), params:{
        children: (props) => getImageFormBlock(props)
      }},
    { id: 'control', type: 'controlCell', label: translate('TABLE.COLUMNS.CONTROL'), params:{
      buttons:[
        {
          fullWidth: true,
          onClick: onDeleteImageItem,
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
    onClick: onAddImageItem,
    label: translate('BUTTON.ADD'),
    icon: Add,
    background: COLORS.PRIMARY_COLOR,
    color: COLORS.PRIMARY_CONTRAST_COLOR,
    size: 'medium',
    shape: BUTTON_SHAPE.RECTANGLE
  },
  isTableWithRemoveItemButton: true,

});
