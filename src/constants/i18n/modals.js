export default (lang) => {
  switch(lang) {
    case 'RU':
      return {
        CONFIRM_USER: 'Сохранить данные?',
        YES: 'Да',
        NO: 'Нет',
        OK: 'Подтвердить',
        CANCEL: 'Отменить'
      };

    case 'EN' :
    default:
      return {
        CONFIRM_USER: 'Do you want to confirm entered data?',
        YES: 'Yes',
        NO: 'No',
        OK: 'Ok',
        CANCEL: 'Cancel'
      }
  }
}
