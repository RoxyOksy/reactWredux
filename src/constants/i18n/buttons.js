export default (lang) => {
  switch(lang) {
    case 'RU' :
      return {
        ADD: 'Добавить',
        UPLOAD: 'Загрузить',
      };

    case 'EN' :
    default:
      return {
        ADD: 'Add',
        UPLOAD: 'Upload',
      }
  }
}
