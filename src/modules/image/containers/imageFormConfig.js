export const getFormConfig =({ onChangeImage, onEditState }) => ({
  layout: 'layout1',
  position4: {
    formFields: [
      {
        label: null,
        type: 'image',
        onChange: onChangeImage,
        onConfirm: onEditState,
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
