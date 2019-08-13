export default (lang) => {
  switch(lang) {
    case 'RU':
      return {
        IMAGES: 'Изображения',
        USERS: 'Пользователи',
      };

    case 'EN':
    default:
      return {
        IMAGES: 'Images',
        USERS: 'Users',
      }
  }
}
