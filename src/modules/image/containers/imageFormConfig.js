export const getFormConfig =({ onAddImage }) => ({
  layout: 'layout1',
  position4: {
    formFields: [
      {
        label: null,
        type: 'image',
        params: {onAddImage}
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
