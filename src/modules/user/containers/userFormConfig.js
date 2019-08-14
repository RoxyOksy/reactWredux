import {translate} from '../../../shared/helpers';

export const getFormConfig =({ callback }) => ({
  layout: 'layout1',
  position1: {
    formFields: [
      {
        label: translate('FORM_FIELD.LOGIN.LABEL'),
        type: 'text',
        classNames: 'loginBlock',
        params: {placeholder: 'FORM_FIELD.LOGIN.PLACEHOLDER', withConfirmation: true}
      },
      {
        label: translate('FORM_FIELD.PASSWORD.LABEL'),
        type: 'password',
        classNames: 'passwordBlock',
        params: {placeholder: translate('FORM_FIELD.PASSWORD.PLACEHOLDER'), withConfirmation: true}
      }
    ]
  },

  position2: {
    formFields: [
      {
        label: translate('FORM_FIELD.POSITION.LABEL'),
        type: 'text',
        classNames: 'positionBlock',
        params: {placeholder: translate('FORM_FIELD.POSITION.PLACEHOLDER'), withConfirmation: true}
      },
      {
        label: translate('FORM_FIELD.AVATAR.LABEL'),
        type: 'select',
        classNames: 'avatarBlock',
        params: {name: 'avatar', placeholder: translate('FORM_FIELD.AVATAR.PLACEHOLDER'), withConfirmation: false}
      }
    ]
  },
  position3: {
    formFields: [
      {
        label: translate('FORM_FIELD.GENDER.LABEL'),
        type: 'radio',
        classNames: 'genderBlock',
        params: {placeholder: '', radiobuttons: [{label: 'male', isDefault: true}, {label: 'female'}], withConfirmation: false}
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
