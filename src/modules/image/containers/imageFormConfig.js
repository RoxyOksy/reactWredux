export const getFormConfig =({ onAddImage }) => ({
  layout: 'layout1',
  position4: {
    formFields: [
      {
        label: null,
        type: 'image',
        onChange: onAddImage,
        params: {withConfirmation: true}
      },
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
