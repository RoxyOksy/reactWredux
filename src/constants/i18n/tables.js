export default (lang) => {
  switch(lang) {
    case 'RU':
      return {
        COLUMNS: {
          UPLOAD: 'Загрузка изображений',
          CONTROL: 'Управление',
          USER_INFO: 'Информация о пользователе',
          COUNTER: '#'
        }
      };

    case 'EN' :
    default:
      return {
        COLUMNS: {
          UPLOAD: 'Image Uploader',
          CONTROL: 'Control',
          USER_INFO: 'User info',
          COUNTER: '#'
        }
      }
  }
}
