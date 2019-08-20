import {Add, Clear, Check} from 'shared/vendors';

import {translate} from 'shared/helpers';

import {COLORS} from 'constants';
import {BUTTON_SHAPE} from 'constants';

export const getTableConfig = ({ onAddUser, onDeleteUser, onRequestToConfirmItem, getUserFormBlock }) => ({
  headColumns: [
    { id: 'counter', type: 'counterCell', label: translate('TABLE.COLUMNS.COUNTER') },
    { id: 'content', type: 'contentCell', label:translate('TABLE.COLUMNS.USER_INFO'), params: {
        children: (props) => getUserFormBlock(props)
      } },
    { id: 'control', type: 'controlCell', label: translate('TABLE.COLUMNS.CONTROL'), params: {
      buttons: [
        {
          fullWidth: true,
          onClick: onRequestToConfirmItem,
          label: null,
          icon: Check,
          background: COLORS.PRIMARY_COLOR,
          color: COLORS.PRIMARY_CONTRAST_COLOR,
          size: 'small',
          shape: BUTTON_SHAPE.RECTANGLE
        },
        {
          fullWidth: true,
          onClick: onDeleteUser,
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
  tableWithAddItemButton: {
    fullWidth: false,
    onClick: onAddUser,
    label: translate('BUTTON.ADD'),
    icon: Add,
    background: COLORS.PRIMARY_COLOR,
    color: COLORS.PRIMARY_CONTRAST_COLOR,
    size: 'medium',
    shape: BUTTON_SHAPE.RECTANGLE
  },
  isTableWithRemoveItemButton: true,

});
