import {translate} from 'shared/helpers';

export const getFormConfig =({ callback }) => ({
  layout: 'layout1',
  position1: {
    formFields: [
      {
        label: translate('FORM_FIELD.LOGIN.LABEL'),
        type: 'text',
        classNames: 'loginBlock',
        onChange: () => (console.log('LOGIN was changed')),
        params: {placeholder: 'FORM_FIELD.LOGIN.PLACEHOLDER', withConfirmation: true}
      },
      {
        label: translate('FORM_FIELD.PASSWORD.LABEL'),
        type: 'password',
        classNames: 'passwordBlock',
        onChange: () => (console.log('PASSWORD was changed')),
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
        onChange: () => (console.log('POSITION was changed')),
        params: {placeholder: translate('FORM_FIELD.POSITION.PLACEHOLDER'), withConfirmation: true}
      },
      {
        label: translate('FORM_FIELD.AVATAR.LABEL'),
        type: 'select',
        classNames: 'avatarBlock',
        onChange: () => (console.log('AVATAR was changed')),
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
        onChange: () => (console.log('GENDER was changed')),
        params: {
          placeholder: '',
          radioButtons: [
            {label: translate('FORM_FIELD.MALE.LABEL'), isDefault: false},
            {label: translate('FORM_FIELD.FEMALE.LABEL'), isDefault: true}
          ],
          withConfirmation: false
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
