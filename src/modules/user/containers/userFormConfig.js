import {translate} from 'shared/helpers';

export const getFormConfig =({ onEditValue, onEditState }) => ({
  layout: 'layout1',
  position1: {
    formFields: [
      {
        name: 'login',
        label: translate('FORM_FIELD.LOGIN.LABEL'),
        type: 'text',
        classNames: 'loginBlock',
        onChange: onEditValue,
        onConfirm: onEditState,
        params: {placeholder: 'FORM_FIELD.LOGIN.PLACEHOLDER', withConfirmation: true}
      },
      {
        name: 'password',
        label: translate('FORM_FIELD.PASSWORD.LABEL'),
        type: 'password',
        classNames: 'passwordBlock',
        onChange: onEditValue,
        onConfirm: onEditState,
        params: {placeholder: translate('FORM_FIELD.PASSWORD.PLACEHOLDER'), withConfirmation: true}
      }
    ]
  },

  position2: {
    formFields: [
      {
        name: 'position',
        label: translate('FORM_FIELD.POSITION.LABEL'),
        type: 'text',
        classNames: 'positionBlock',
        onChange: onEditValue,
        onConfirm: onEditState,
        params: {placeholder: translate('FORM_FIELD.POSITION.PLACEHOLDER'), withConfirmation: true}
      },
      {
        name: 'avatar',
        label: translate('FORM_FIELD.AVATAR.LABEL'),
        type: 'select',
        classNames: 'avatarBlock',
        onChange: () => (console.log('AVATAR was changed')),
        params: {placeholder: translate('FORM_FIELD.AVATAR.PLACEHOLDER'), withConfirmation: true}
      }
    ]
  },
  position3: {
    formFields: [
      {
        name: 'gender',
        label: translate('FORM_FIELD.GENDER.LABEL'),
        type: 'radio',
        classNames: 'genderBlock',
        onChange: () => (console.log('GENDER was changed')),
        params: {
          placeholder: '',
          radioButtons: [
            {label: translate('FORM_FIELD.MALE.LABEL'), isDefault: false},
            {label: translate('FORM_FIELD.FEMALE.LABEL'), isDefault: true}
          ],
          withConfirmation: true
        }
      }
    ]
  },


});
/*
buttons: [
  {
    shape: '',
    icon: '',
    label: '',
    params: {onCallBack: callback}
  }
]*/
